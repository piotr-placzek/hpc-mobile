import { NgModule } from '@angular/core';
import { ManufacturerPipe } from 'src/shared/pipes/manufacturer.pipe';

const PIPES = [ManufacturerPipe];

@NgModule({
  declarations: [...PIPES],
  exports: [...PIPES],
})
export class SharedModule {}
