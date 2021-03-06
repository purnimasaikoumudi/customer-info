import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerDetailsRoutingModule } from './customer-details-routing.module';
import { AppMaterialModule } from '../app-ui.module';

@NgModule({
  declarations: [
    CustomerDetailsComponent,
  ],
  imports: [
    CommonModule,
    CustomerDetailsRoutingModule,
    AppMaterialModule
  ]
})
export class CustomerDetailsModule { }
