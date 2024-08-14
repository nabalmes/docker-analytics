import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
//import { AuthGuard } from 'app/auth/helpers';
//import { Role } from '../../../app/auth/models';
import { CoreCommonModule } from '@core/common.module';
//import { DashboardService } from 'app/main/dashboard/dashboard.service';
import { AnalyticsComponent } from 'app/main/application/dashboard/analytics/analytics.component';
import { EcommerceComponent } from 'app/main/application/dashboard/ecommerce/ecommerce.component';
import { inventoryComponent } from 'app/main/application/dashboard/inventory/inventory.component';
import { SalesComponent } from './sales/sales.component';

const routes = [
  {
    path: 'analytics',
    component: AnalyticsComponent,
    //canActivate: [AuthGuard],
    data: { 
      //roles: [Role.Admin],
       animation: 'danalytics' },
    resolve: {
      //css: DashboardService,
      //inv: InvoiceListService
    }
  },
  {
    path: 'ecommerce',
    component: EcommerceComponent,
    //canActivate: [AuthGuard],
    resolve: {
      //css: DashboardService
    },
    data: { animation: 'decommerce' }
  },
  {
    path: 'inventory',
    component: inventoryComponent,
    //canActivate: [AuthGuard],
    resolve: {
      //css: DashboardService
    },
    data: { animation: 'dinventory' }
  },
  {
    path: 'sales',
    component: SalesComponent,
    //canActivate: [AuthGuard],
    resolve: {
      //css: DashboardService
    },
    data: { animation: 'dsales' }
  }
];

@NgModule({
  declarations: [AnalyticsComponent, EcommerceComponent, inventoryComponent, SalesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    NgbModule,
    PerfectScrollbarModule,
    CoreCommonModule,
    NgApexchartsModule,
    //InvoiceModule
  ],
  providers: [
    //DashboardService, //InvoiceListService
],
  exports: [EcommerceComponent]
})
export class DashboardModule {}
