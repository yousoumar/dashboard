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
  }
}
