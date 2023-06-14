import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductsListModule } from 'src/app/components/products-list/products-list.module';
import { CatalogPage } from './catalog.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CatalogPage }]),
    ProductsListModule,
  ],
  declarations: [CatalogPage],
})
export class CatalogPageModule {}
