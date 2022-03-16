import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    PagesComponent,
    ProductComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
