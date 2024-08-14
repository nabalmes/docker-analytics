import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreCommonModule } from '@core/common.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BASE_PATH, IdentityService } from 'app/api/sidc-services/identity';
import { environment } from 'environments/environment';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { animation: 'auth' }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: { animation: 'auth' }
  }
];

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule, FormsModule, ReactiveFormsModule, CoreCommonModule],
  providers:[
    { provide: BASE_PATH, useValue: environment.apiUrlForIdentity },
    IdentityService,
    //ProjectReportTemplateService
  ]
})
export class LoginModule { }
