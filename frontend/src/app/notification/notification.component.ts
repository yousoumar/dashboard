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
    let absentStudents: string = '';
    fetch('/assets/alumeneo.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data[0].absentStudents.forEach((student: any) => {
          absentStudents += student.firstName + ', ';
          if (absentStudents !== this.absentStudents) {
            this.absentStudents = absentStudents;
          }
        });
      });
  }

  ngOnInit(): void {
    setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      if ((hours === 8 && minutes === 5) || (hours === 13 && minutes === 50)) {
        this.checkAbsentStudents();
      } else {
        this.absentStudents = '';
      }
    }, 1000);
  }
}
