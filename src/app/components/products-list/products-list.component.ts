import { Component, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { EventEmitter } from 'stream';

@Component({
  selector: 'hpc-products-list',
  templateUrl: 'products-list.component.html',
  styleUrls: ['products-list.component.scss'],
})
export class ProductsList {
  @Input() products: IProduct[] = [];
  @Output() toggleWishlisted = new EventEmitter();
  @Output() toggleOwned = new EventEmitter();
}
