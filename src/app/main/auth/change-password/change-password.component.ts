import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CoreConfigService } from "@core/services/config.service";
import { TranslateService } from "@ngx-translate/core";
import { Subject } from "rxjs";
import * as _ from "lodash";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PasswordValidator } from "app/common/ui/validators/password.validator";
import { MustMatchValidator } from "app/common/ui/validators/mustmatch.validator";
import { BlockUI, NgBlockUI } from "ng-block-ui";
// import { AdminService, MemberChangePasswordCommand } from "app/api";
import { ToastrService } from "ngx-toastr";
import { takeUntil } from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";
import { environment } from "environments/environment";
import Swal from "sweetalert2";
import { AuthService } from "app/common/services/auth.service";
import { ChangePasswordCommand, ChangePasswordService } from "app/api/sidc-services/identity";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChangePasswordComponent implements OnInit, OnDestroy  {
   // Public
   public coreConfig: any;
   public user: any;
   public member: any;
   public contentHeader: object;
   public passwordTextType: boolean;
   public passwordConfirmTextType: boolean;
   public passwordNewTextType: boolean;
   public submitted = false;
   public changePasswordForm: FormGroup;
   public changePasswordCommand: ChangePasswordCommand;
 
   public languageOptions: any;
   public translationServiceLangs = [];
   public selectedLanguage: any;
   @BlockUI() blockUI: NgBlockUI;
   // Private
   private unsubscribeAll: Subject<any>;
 
   constructor(
     private coreConfigService: CoreConfigService,
     private activatedRoute: ActivatedRoute,
     private formBuilder: FormBuilder,
     private changePasswordService: ChangePasswordService,
     private authService: AuthService,
     private toastr: ToastrService,
     private router: Router,
     public translateService: TranslateService
   ) {
     this.unsubscribeAll = new Subject();
 
     // Configure the layout
     this.coreConfigService.config = {
       layout: {
         navbar: {
           hidden: false,
         },
         menu: {
           hidden: false,
         },
         footer: {
           hidden: false,
         },
         customizer: false,
         enableLocalStorage: false,
       },
     };
   }
 
   togglePasswordTextType() {
     this.passwordTextType = !this.passwordTextType;
   }
 
   toggleConfirmPasswordTextType() {
     this.passwordConfirmTextType = !this.passwordConfirmTextType;
   }
   toggleNewPasswordTextType() {
     this.passwordNewTextType = !this.passwordNewTextType;
   }
 
   ngOnInit(): void {
     const snapshot = this.activatedRoute.snapshot.data;
     // this.user = snapshot.ApplicantDetails.data.applicant;
     // this.member = snapshot.ApplicantDetails.data.member;
 
     this.languageOptions = {
       en: {
         title: "English",
         flag: "us",
       },
       tl: {
         title: "Tagalog",
         flag: "ph",
       },
     };
 
     this.contentHeader = {
       headerTitle: "Account",
       actionButton: false,
       breadcrumb: {
         type: "",
         links: [
           {
             name: "Home",
             isLink: true,
             link: "/",
           },
           {
             name: "Account",
             isLink: false,
           },
         ],
       },
     };
 
     this.translationServiceLangs = this.translateService
       .getLangs()
       .map((lang) => {
         return { lang };
       });
 
     // Set the selected language from default languageOptions
     this.selectedLanguage = this.translateService.currentLang;
     const userName = this.authService.currentUserValue.userName;
     this.changePasswordForm = this.formBuilder.group(
       {
         username: [
           userName
         ],
         currentPassword: ["", Validators.required],
         password: ["", [Validators.required, PasswordValidator.strong]],
         confirmPassword: ["", Validators.required],
       },
       { validator: [MustMatchValidator("password", "confirmPassword")] }
     );
   }
 
   get f() {
     return this.changePasswordForm.controls;
   }
 
   /**
    * Set the language
    *
    * @param language
    */
   setLanguage(language): void {
     // Set the selected language for the navbar on change
     this.selectedLanguage = language;
 
     // Use the selected language id for translations
     this.translateService.use(language);
 
     this.coreConfigService.setConfig(
       { app: { appLanguage: language } },
       { emitEvent: true }
     );
   }
 
   onSubmit() {
     console.log("clicked!:",this.changePasswordForm.value);
     this.submitted = true;
 
     if (this.changePasswordForm.invalid) {
       return;
     }
 
     this.changePasswordCommand = this.changePasswordForm.getRawValue();
     Swal.fire({
       title: "Are you sure?",
       text: "Your password will be changed.",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#7367F0",
       cancelButtonColor: "#E42728",
       confirmButtonText: "Yes",
       customClass: {
         confirmButton: "btn btn-primary",
         cancelButton: "btn btn-danger ml-1",
       },
     }).then((result) => {
       if (result.value) {
         this.blockUI.start();
         this.changePasswordService.apiChangepasswordChangePasswordPost(
             this.changePasswordCommand
           )
           .pipe(takeUntil(this.unsubscribeAll))
           .subscribe(
             (response) => {
               this.blockUI.stop();
               Swal.fire({
                 title: "Great!",
                 text: "Password has been changed successfully.",
                 icon: "success",
                 confirmButtonColor: "#7367F0",
                 confirmButtonText: "Ok",
                 customClass: {
                   confirmButton: "btn btn-primary",
                 },
               });
               this.router.navigate(["/application/dashboard/sales"]);
             },
             (httpError: HttpErrorResponse) => {
               this.blockUI.stop();
               this.toastr.error("", httpError.error.Message, {
                 timeOut: 3000,
                 positionClass: "toast-bottom-center",
                 toastClass: "toast ngx-toastr",
               });
             }
           );
       }
     });
   }
 
   ngOnDestroy(): void {
     this.unsubscribeAll.next();
     this.unsubscribeAll.complete();
   }
 }
 
