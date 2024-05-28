import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import iCalendarPlugin from '@fullcalendar/icalendar';
import timeGridPlugin from '@fullcalendar/timegrid';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  ngOnInit(): void {
    const calendarEl = document.getElementById('calendar')!;
    const calendar = new Calendar(calendarEl, {
      plugins: [timeGridPlugin, iCalendarPlugin],
      initialView: 'timeGridWeek',
      views: {
        timeGridWeek: {
          allDaySlot: false,
          type: 'timeGrid',
          duration: { days: 3 },

          dayHeaderContent: (args) => {
            if (args.date.getDay() === new Date().getDay()) {
              return "Aujourd'hui";
            }

            return args.date
              .toLocaleDateString('fr-fr', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })
              .replace(/^\w/, (c) => c.toUpperCase());
          },
        },
      },
      headerToolbar: {
        left: '',
        center: '',
        right: '',
      },
      events: {
        url: 'http://localhost:3000/calendar',
        format: 'ics',
      },
      hiddenDays: [0, 6],
      slotMinTime: '08:00:00',
      slotMaxTime: '19:00:00',
      height: 'auto',
      nowIndicator: true,
    });

    calendar.render();
  }
}
