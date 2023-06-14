import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, LayoutRoutingModule],
  declarations: [LayoutComponent],
})
export class LayoutModule {}
