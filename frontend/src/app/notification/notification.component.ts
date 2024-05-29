import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnInit {
  absentStudents: string = '';

  checkAbsentStudents() {
    fetch('/assets/alumeneo.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data[0].absentStudents.forEach((student: any) => {
          this.absentStudents += student.firstName + ', ';
          setTimeout(() => {
            this.absentStudents = '';
          }, 5000);
        });
      });
  }

  ngOnInit(): void {
    setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      if ((hours === 8 && minutes === 5) || (hours === 13 && minutes === 0)) {
        this.checkAbsentStudents();
      }
    }, 60000);
  }
}
