import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductDetailsPage } from './product-details.page';
import { ProductDetailsModule } from 'src/app/components/product-details/product-details.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProductDetailsPage }]),
    ProductDetailsModule
  ],
  declarations: [ProductDetailsPage],
})
export class ProductDetailsPageModule {}
