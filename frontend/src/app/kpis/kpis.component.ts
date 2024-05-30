import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpis',
  standalone: true,
  templateUrl: './kpis.component.html',
  styleUrl: './kpis.component.scss',
})
export class KpisComponent implements OnInit {
  constructor() {}
  presentStudentNumber: number = 0;
  allStudentNumber: number = 0;
  intervalId: number | null = null;
  isMorning: boolean = new Date().getHours() < 12;

  fetchStudents() {
    fetch('/assets/alumeneo.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.presentStudentNumber = data[0].presentStudents.length;
        this.allStudentNumber =
          data[0].presentStudents.length + data[0].absentStudents.length;
      });
  }

  ngOnInit(): void {
    const now = new Date();
    const startTime1 = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      8,
      0,
      0,
    );
    const endTime1 = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      8,
      10,
      0,
    );
    const startTime2 = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      13,
      45,
      0,
    );
    const endTime2 = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      13,
      55,
      0,
    );

    this.intervalId = setInterval(() => {
      if (
        (now >= startTime1 && now <= endTime1) ||
        (now >= startTime2 && now <= endTime2)
      ) {
        this.fetchStudents();
      }
    }, 1000);

    this.fetchStudents();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
