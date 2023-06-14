import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProductDetailsComponent } from './product-details.component';
import { SharedModule } from 'src/shared/shared.module';
import { ProductsListModule } from '../products-list/products-list.module';

@NgModule({
  imports: [IonicModule, CommonModule, SharedModule, ProductsListModule],
  declarations: [ProductDetailsComponent],
  exports: [ProductDetailsComponent],
})
export class ProductDetailsModule {}
