import { Component, OnInit } from '@angular/core';
import { LaunchesService } from 'src/app/services/launches.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {
  launchesList: any []= [];

  ngOnInit(): void {
    this.launchesService.getLaunches()
    .subscribe((resp:any) => {
      this.launchesList = resp.results;
      console.log(this.launchesList);
    });
  }
  constructor(private launchesService : LaunchesService){}

  getLaunches(){
    this.launchesService.getLaunches()
    .subscribe((resp:any)=>{
      this.launchesList = [...this.launchesList, ...resp.results];
      console.log(this.launchesList);
    })
  }
}
