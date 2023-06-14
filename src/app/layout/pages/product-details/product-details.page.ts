import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'hpc-product-details-page',
  templateUrl: 'product-details.page.html',
  styleUrls: ['product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit, OnDestroy {
  private readonly subscriptions = new Subscription();
  public product!: IProduct;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly database: DatabaseService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.params.subscribe(async (params: any): Promise<void> => {
        this.product = await this.database.getProductById(
          params.id,
          params.manufacturer
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
