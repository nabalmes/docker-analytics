import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { CoreConfigService } from '@core/services/config.service';
//import { IdentityService } from 'app/api';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AuthService } from 'app/common/services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IdentityService } from 'app/api/sidc-services/identity';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  //  Public
  public coreConfig: any;
  public loginForm: FormGroup;
  public submitted = false;
  public passwordTextType: boolean;

  // Private
  private unsubscribeAll: Subject<any>;

  @BlockUI() blockUI: NgBlockUI;

  /**
   * Constructor
   *
   * @param {CoreConfigService} coreConfigService
   * @param {FormBuilder} formBuilder
   */
  constructor(
    private coreConfigService: CoreConfigService,
    private formBuilder: FormBuilder,
    private identityService: IdentityService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) {
    this.unsubscribeAll = new Subject();

    // Configure the layout
    this.coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        customizer: false,
        enableLocalStorage: false
      }
    };
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  /**
   * On Submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.blockUI.start();

    this.identityService.apiIdentityTokenPost(this.loginForm.getRawValue()).pipe(takeUntil(this.unsubscribeAll)).subscribe(response => {
      this.blockUI.stop();
      const helper = new JwtHelperService();
      const tokenDetails = helper.decodeToken(response.data.jwToken);
      const fullName = tokenDetails.full_name;
      const firstName = tokenDetails.first_name;
      const lastName = tokenDetails.last_name;
      this.authService.user = {...response.data, fullName, firstName, lastName};
      localStorage.setItem("currentUser", JSON.stringify(this.authService.currentUserValue));
      localStorage.setItem("token", this.authService.currentUserValue.jwToken);
      // if (this.authService.isAdmin) {
      //   this.router.navigate(["/admin/"]);
      // } else {
      //   this.authService.redirectMember();
      // }
      this.router.navigate(["/application/dashboard/sales"]);

    }, (httpError: HttpErrorResponse) => {

      this.blockUI.stop();
      this.toastr.error('', httpError.error.Message, {
        timeOut: 3000,
        positionClass: 'toast-bottom-center',
        toastClass: 'toast ngx-toastr',
      });
     
    });
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });

    // Subscribe to config changes
    this.coreConfigService.config.pipe(takeUntil(this.unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}