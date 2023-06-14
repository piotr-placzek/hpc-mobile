import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ManufacturerPipe } from 'src/shared/pipes/manufacturer.pipe';

@Component({
  selector: 'hpc-products-list-item',
  templateUrl: 'products-list-item.component.html',
  styleUrls: ['products-list-item.component.scss'],
})
export class ProductsListItem {
  @Input() product!: IProduct;
  @Output() click = new EventEmitter<IProduct>();

  public onClick($event: Event) {
    $event.stopPropagation();
    this.click.emit(this.product);
  }
}
