import { KeyValuePipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';

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
    fetch(environment.apiUrl + '/menu')
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
}
