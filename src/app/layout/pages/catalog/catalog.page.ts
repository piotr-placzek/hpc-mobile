import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'hpc-catalog-page',
  templateUrl: 'catalog.page.html',
  styleUrls: ['catalog.page.scss'],
})
export class CatalogPage implements OnInit, OnDestroy {
  private readonly subscriptions = new Subscription();

  public products: IProduct[] = [];

  constructor(
    private readonly db: DatabaseService,
    private readonly router: Router
  ) {}

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

  async onProductClicked(product: IProduct): Promise<void> {
    this.router.navigate([`/product/${product.manufacturer}/${product.id}`]);
  }
}
