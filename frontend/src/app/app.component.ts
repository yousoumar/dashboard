import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { NotificationComponent } from './notification/notification.component';
import { StudentsComponent } from './students/students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NotificationComponent,
    CalendarComponent,
    StudentsComponent,
    HeaderComponent,
    MenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fil-dashboard';
}
