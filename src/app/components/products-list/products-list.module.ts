import { NgModule } from '@angular/core';
import { ProductsListItem } from './products-list-item/products-list-item.component';
import { ProductsList } from './products-list.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  imports: [IonicModule, CommonModule, SharedModule],
  declarations: [ProductsList, ProductsListItem],
  exports: [ProductsList, ProductsListItem],
})
export class ProductsListModule {}
