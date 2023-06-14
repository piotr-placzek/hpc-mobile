import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'hpc-catalog',
  templateUrl: 'catalog.page.html',
  styleUrls: ['catalog.page.scss'],
})
export class CatalogPage implements OnInit, OnDestroy {
  private readonly subscriptions = new Subscription();

  public products: IProduct[] = [];

  constructor(private readonly db: DatabaseService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.db.dbReady$.subscribe((ready: boolean): void => {
        console.log('database ready', ready);
      })
    );

    this.db
      .getProducts()
      .then((products: IProduct[]) => this.products.push(...products));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
