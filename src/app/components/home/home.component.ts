import { Component, OnInit } from '@angular/core';
import { LaunchesService } from 'src/app/services/launches.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  firstLaunch: any;
  countdownInterval : any;
  launchesList : any[] = [];
  nextThreeLaunches: any[] = [];

  constructor( private launchesService: LaunchesService) { }

  ngOnInit(): void {
    // this.getLaunches();
    // this.startCountdown();
    // this.getNextThreeLaunches();
  }

  getLaunches() {
    this.launchesService.getFormattedLaunchesWithCountdown().subscribe((launches : any[]) => {
      this.launchesList = launches;
      if(launches.length > 0){
        this.firstLaunch = launches[0];
      }
      console.log(this.firstLaunch);
    })
  }

  startCountdown(){
    this.countdownInterval = setInterval(() => {
      if (this.launchesList.length > 0){
        const firstLaunch = this.launchesList[0];
        firstLaunch.countdown = this.launchesService.calculateCountdown(firstLaunch.net);
      }
    }, 1000);
  }

  getNextThreeLaunches(){
    this.launchesService.getFormattedLaunchesWithCountdown().subscribe((launches: any[])=> {
      this.launchesList = launches;
      if(launches.length > 0){
        this.nextThreeLaunches = launches.slice(0,3);
      }
    })
  }

  ngOnDestroy() {
    clearInterval(this.countdownInterval);
  }
}
