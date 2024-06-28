import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

type BusSchedule = {
  sens: number;
  terminus: string;
  infotrafic: boolean;
  temps: string;
  dernierDepart: boolean;
  tempsReel: string;
  ligne: {
    numLigne: string;
    typeLigne: number;
  };
  arret: {
    codeArret: string;
  };
};

@Component({
  selector: 'app-kpis',
  standalone: true,
  templateUrl: './kpis.component.html',
  styleUrl: './kpis.component.scss',
  imports: [NgIf],
})
export class KpisComponent implements OnInit {
  constructor() {}
  absentStudentNumer: number | string = 0;
  allStudentNumber: number = 0;
  intervalId: number | null = null;
  c6BusIntervalId: number | null = null;
  isMorning: boolean = new Date().getHours() < 12;
  temperature: number = 0;
  fetchingTemperature: boolean = true;
  c6busSchedule: BusSchedule | null = null;
  fetchingC6BusSchedule: boolean = true;

  async fetchC6BusSchedule() {
    return fetch('https://open.tan.fr/ewp/tempsattentelieu.json/CTRE/1/C6')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.c6busSchedule = data.find((bus: BusSchedule) => bus.sens === 2);
        this.fetchingC6BusSchedule = false;
      });
  }
  fetchStudents() {
    fetch('/assets/alumeneo.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.allStudentNumber =
          data[0].presentStudents.length + data[0].absentStudents.length;
        this.absentStudentNumer =
          this.allStudentNumber - data[0].presentStudents.length;
      });
  }

  fetchWeather() {
    fetch(environment.apiUrl + '/weather')
      .then((response) => response.json())
      .then((data) => {
        this.temperature = data;
        this.fetchingTemperature = false;
      });
  }

  async ngOnInit(): Promise<void> {
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
        this.fetchWeather();
      }
    }, 1000);
    this.fetchWeather();
    this.fetchStudents();

    await this.fetchC6BusSchedule();

    this.c6BusIntervalId = setInterval(() => {
      if (this.c6busSchedule!.temps == 'proche') {
        this.c6busSchedule!.temps = 0 + 'mn';
      }

      let temps = this.c6busSchedule!.temps.slice(0, -2);

      if (Number(temps) > 0) {
        this.c6busSchedule!.temps = Number(temps) - 1 + 'mn';
      } else {
        this.fetchC6BusSchedule();
      }
    }, 60000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    if (this.c6BusIntervalId) {
      clearInterval(this.c6BusIntervalId);
    }
  }
}
