import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { CoreCommonModule } from '@core/common.module';
import { AdminGuard } from 'app/common/guards/admin.guard';
import { MemberGuard } from 'app/common/guards/member.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'application',
    loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule),
    //resolve: { ApplicantDetails: ApplicantDetailsResolver },
    canActivate: [AdminGuard]
  },
  {
    path: 'change-password',
    loadChildren: () => import('./auth/change-password/change-password.module').then(m => m.ChangePasswordModule)
  },
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes),
    ContentHeaderModule,
    TranslateModule,
    CoreCommonModule,
  ],
  providers: [  ]
})
export class MainModule { }
