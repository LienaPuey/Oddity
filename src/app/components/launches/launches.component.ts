import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LaunchesService } from 'src/app/services/launches.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {
  launchesList: any []= [];
  countdownInterval: any;

  ngOnInit(): void {
    this.getLaunches();
    this.startCountdown();
  }
  constructor(private launchesService : LaunchesService, private datePipe: DatePipe){}

  getLaunches() {
    this.launchesService.getFormattedLaunchesWithCountdown().subscribe((launches: any[]) => {
      this.launchesList = launches;
      this.startCountdown();
      console.log(this.launchesList)
      this.launchesList.forEach(launch => {
        console.log(launch.mission.description);
      })
    });
  }


  startCountdown(){
    this.countdownInterval = setInterval(() => {
      this.launchesList.forEach(launch => {
        launch.countdown = this.launchesService.calculateCountdown(launch.net)
      });
    }, 1000);
  }

 ngOnDestroy() {
    clearInterval(this.countdownInterval);
  }
}
