import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  menu = [
    {
      counter: 'Cibo',
      items: ['Poisson braisé', 'Salade de pâtes'],
      img: 'https://img.icons8.com/ios-glyphs/90/chicken.png',
    },
    {
      counter: 'Cuistots migrateurs',
      items: ['Poêlée de légumes', 'Lentilles'],
      img: 'https://img.icons8.com/ios-glyphs/90/vegan-food.png',
    },
    {
      counter: 'Traditionnels',
      items: ['Steak haché', 'Frites'],
      img: 'https://img.icons8.com/ios-glyphs/90/steak.png',
    },
  ];
}
