import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'hpc-products-list',
  templateUrl: 'products-list.component.html',
  styleUrls: ['products-list.component.scss'],
})
export class ProductsList {
  @Input() products: IProduct[] = [];
}
