import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  time: string | undefined;
  pauseTime: boolean = false;
  isRedHour: boolean = false;
  specificTimes: Array<{ hours: number, minutes: number, seconds: number }> = [
    { hours: 8, minutes: 5, seconds: 0 },
    { hours: 13, minutes: 50, seconds: 0 }
  ];
  redStates: Array<{ endTime: Date }> = [];
  audio = new Audio('../../assets/alert.mp3');



  ngOnInit(): void {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }
  updateTime(): void {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let paddedMinutes = minutes < 10 ? '0' + minutes : minutes;
    let paddedSeconds = seconds < 10 ? '0' + seconds : seconds;

    this.time =
      hours + 'h :' + paddedMinutes + 'm' + ' :' + paddedSeconds + 's';

    // Check if the current time matches any specific time
    this.specificTimes.forEach(time => {
      if (hours === time.hours && minutes === time.minutes && seconds === time.seconds) {
        console.log('sound');
        this.playSound().then(() => console.log('sound played'));
        this.setRedState();
      }
    });

    // Check if the current time is within any red state period
    this.isRedHour = this.redStates.some(redState => date <= redState.endTime);

    if (this.isRedHour) {
      console.log('Red state active');
    } else {
      console.log('No red state');
    }
  }

  setRedState(): void {
    const endTime = new Date(new Date().getTime() + 15 * 60000); // 15 minutes from now
    this.redStates.push({ endTime });
  }

  async playSound(): Promise<void> {
    await this.audio.play();
  }
}
