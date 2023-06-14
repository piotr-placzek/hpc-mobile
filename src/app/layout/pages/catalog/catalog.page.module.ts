import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductsList } from 'src/app/components/products-list/products-list.component';
import { CatalogPage } from './catalog.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CatalogPage }]),
  ],
  declarations: [CatalogPage, ProductsList],
})
export class CatalogPageModule {}
