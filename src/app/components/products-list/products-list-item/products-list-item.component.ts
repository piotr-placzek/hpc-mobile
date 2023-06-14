import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'hpc-products-list-item',
  templateUrl: 'products-list-item.component.html',
  styleUrls: ['products-list-item.component.scss'],
})
export class ProductsListItem {
  @Input() product!: IProduct;
  @Output() toggleWishlisted = new EventEmitter();
  @Output() toggleOwned = new EventEmitter();
}
