import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'manufacturer' })
export class ManufacturerPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('-').map(this.capitalize).join(' ');
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
