import { NgModule } from '@angular/core';
import { ProductsListItem } from './products-list-item/products-list-item.component';
import { ProductsList } from './products-list.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [ProductsList, ProductsListItem],
  exports: [ProductsList, ProductsListItem],
})
export class ProductsListModule {}
