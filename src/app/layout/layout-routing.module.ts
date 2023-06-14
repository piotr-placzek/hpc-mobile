import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'catalog',
        loadChildren: () =>
          import('./pages/catalog/catalog.page.module').then(
            (m) => m.CatalogPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/catalog',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/catalog',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class LayoutRoutingModule {}
