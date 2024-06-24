import { KeyValuePipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, KeyValuePipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  menu: any = {};
  ngOnInit(): void {
    fetch('http://localhost:3000/menu')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((item: any) => {
          if (this.menu[item.pole]) {
            this.menu[item.pole] += ', ' + item.nom;
          } else {
            this.menu[item.pole] = item.nom;
          }
        });
      });
  }
  // menu = [
  //   {
  //     counter: 'Grillades',
  //     items: ['Poisson braisé', 'Salade de pâtes'],
  //     img: 'https://img.icons8.com/ios-glyphs/90/chicken.png',
  //   },
  //   {
  //     counter: 'Les cuistos migrateurs',
  //     items: ['Poêlée de légumes', 'Lentilles'],
  //     img: 'https://img.icons8.com/ios-glyphs/90/vegan-food.png',
  //   },
  //   {
  //     counter: 'Végétarien',
  //     items: ['Steak haché', 'Frites'],
  //     img: 'https://img.icons8.com/ios-glyphs/90/steak.png',
  //   },
  //   {
  //     counter: 'Accompagnements',
  //     items: ['Steak haché', 'Frites'],
  //     img: 'https://img.icons8.com/ios-glyphs/90/steak.png',
  //   },
  // ];
}
