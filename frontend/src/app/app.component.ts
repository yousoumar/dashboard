import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

import { HeaderComponent } from './header/header.component';
import { KpisComponent } from './kpis/kpis.component';
import { MenuComponent } from './menu/menu.component';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NotificationComponent,
    CalendarComponent,
    HeaderComponent,
    MenuComponent,
    KpisComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fil-dashboard';
}
