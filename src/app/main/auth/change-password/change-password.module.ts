import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';
import { FormsModule } from '@angular/forms';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { SharedModule } from 'app/common/shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChangePasswordService, BASE_PATH as IDENTITY_BASE_PATH } from 'app/api/sidc-services/identity';
import { environment } from 'environments/environment';

const routes: Routes = [
  {
    path: '',
    component: ChangePasswordComponent
  },
  // {
  //   path: 'add',
  //   component: MembersFormComponent,
  //   data: {
  //     title: 'Add New Member',
  //     breadcrumb: "New"
  //   }
  // },
  
];

@NgModule({
  declarations: [
    ChangePasswordComponent
  ],
  imports: [
    ContentHeaderModule,
    TranslateModule,
    CoreCommonModule,
    NgbModule,
    CoreTouchspinModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    Ng2FlatpickrModule,
    SharedModule,
    NgxDatatableModule
  ],
  providers: [
    {provide: IDENTITY_BASE_PATH, useValue: environment.apiUrlForIdentity},
    ChangePasswordService
  ]
})

export class ChangePasswordModule { }
