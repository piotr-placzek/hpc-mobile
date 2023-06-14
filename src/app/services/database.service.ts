import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private db!: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public dbReady$ = this.dbReady.asObservable();

  constructor(
    private readonly http: HttpClient,
    private readonly platform: Platform,
    private readonly sqlite: SQLite,
    private readonly sqlitePorter: SQLitePorter
  ) {
    // @note: cordova is unavailable in browser
    // this.platform.ready().then((): void => {
    //   this.sqlite
    //     .create({
    //       name: 'hpc.db',
    //       location: 'default',
    //     })
    //     .then((sqliteObject: SQLiteObject): void => {
    //       this.db = sqliteObject;
    //       this.seedDatabase();
    //     });
    // });
    this.dbReady.next(true);
  }

  public getProducts(): Promise<IProduct[]> {
    // @note: cordova is unavailable in browser
    // return this.db
    //   .executeSql('SELECT * FROM products')
    //   .then(this.mapProducts)
    //   .catch(this.handleError([]));
    return Promise.resolve([
      {
        id: 'example-id',
        manufacturer: 'example-manufacturer',
        name: 'example-name',
        description: 'example-description',
        image: 'example-image',
        owned: false,
        wishlisted: false,
      },
      {
        id: 'example-id',
        manufacturer: 'example-manufacturer',
        name: 'example-name',
        description: 'example-description',
        image: 'example-image',
        owned: false,
        wishlisted: false,
      },
    ]);
  }

  private seedDatabase() {
    this.http
      .get('assets/seed.sql', { responseType: 'text' })
      .subscribe((sql: string): void => {
        this.sqlitePorter.importSqlToDb(this.db, sql).then((): void => {
          this.dbReady.next(true);
        });
      });
  }

  private mapProducts(data: any): IProduct[] {
    return data.rows.map((row: any): IProduct => {
      console.log(row);
      return row;
    });
  }

  private handleError(value: any) {
    return (error: any): any => {
      console.error(error);
      return value;
    };
  }
}
