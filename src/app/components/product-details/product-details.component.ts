import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'hpc-product-details',
  templateUrl: 'product-details.component.html',
  styleUrls: ['product-details.component.scss'],
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
}
