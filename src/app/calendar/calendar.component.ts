import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  events = {
    Lundi: [
      {
        name: 'Conception logicielle',
        date: '2021-10-04',
        hour: '8h: 00 - 12h: 00',
        isAnExam: false,
      },
      {
        name: 'IHM',
        date: '2021-10-04',
        hour: '13h: 45 - 18h: 00',
        isAnExam: false,
      },
    ],
    Mardi: [
      {
        name: 'Architecture distribuée',
        date: '2021-10-04',
        hour: '8h: 00 - 12h: 00',
        isAnExam: false,
      },
      {
        name: 'Anglais',
        date: '2021-10-04',
        hour: '13h: 45 - 18h: 00',
        isAnExam: true,
      },
    ],
    Mercredi: [
      {
        name: 'Sport',
        date: '2021-10-04',
        hour: '8h: 00 - 12h: 00',
        isAnExam: false,
      },
      {
        name: 'SSG',
        date: '2021-10-04',
        hour: '13h: 45 - 18h: 00',
        isAnExam: false,
      },
    ],
    Jeudi: [
      {
        name: 'Outils numérique',
        date: '2021-10-04',
        hour: '8h: 00 - 12h: 00',
        isAnExam: false,
      },
    ],
    Vendredi: [
      {
        name: 'Conception logicielle',
        date: '2021-10-04',
        hour: '8h: 00 - 12h: 00',
        isAnExam: false,
      },
      {
        name: 'IHM',
        date: '2021-10-04',
        hour: '13h: 45 - 18h: 00',
        isAnExam: true,
      },
    ],
  };

  objectKeys(obj: typeof this.events): (keyof typeof this.events)[] {
    return Object.keys(obj) as unknown as (keyof typeof this.events)[];
  }

  getCurrentDay(): string {
    const today = new Date();
    const day = today.getDay();
    const days = [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ];
    return days[day];
  }
}
