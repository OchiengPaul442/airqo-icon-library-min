import { Component, Input } from '@angular/core';
import { icons } from '@airqo-icons/core';

@Component({
  selector: 'airqo-icon',
  template: `<svg-icon [src]="getIconPath(name)"></svg-icon>`,
})
export class IconComponent {
  @Input() name!: string;

  getIconPath(name: string): string {
    const meta = icons.find(i => i.name === name);
    return meta ? `assets/icons/${meta.category}/${name}.svg` : '';
  }
}