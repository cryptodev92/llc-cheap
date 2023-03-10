import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';

import { IntellectualPropertyModule } from './intellectual-property/intellectual-property.module';
import { BusinessFormationModule } from './business-formation/business-formation.module';
import { BusinessOperationsModule } from './business-operations/business-operations.module';
import { BreadcrumbModule } from 'src/app/shared/widgets/breadcrumb/breadcrumb.module';
import { RouterModule } from '@angular/router';
import { BusinessMainModule } from './business-main/business-main.module';

@NgModule({
  declarations: [
    BusinessComponent
  ],
  exports: [
    BusinessComponent
  ],
  imports: [
    CommonModule,
    BusinessFormationModule,
    BusinessOperationsModule,
    IntellectualPropertyModule,
    BusinessMainModule,
    BreadcrumbModule,
    RouterModule
  ]
})
export class BusinessModule { }
