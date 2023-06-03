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
  rocketImages: {[rocketId: string]: string}= {}
  countdownInterval: any;

  ngOnInit(): void {
    this.getLaunches();
    this.startCountdown();
  }
  constructor(private launchesService : LaunchesService, private datePipe: DatePipe){}

  getLaunches() {
    this.launchesService.getLaunches().subscribe((resp: any) => {
      this.launchesList = resp.results.map((launch: any) => {
        const formattedDate = this.datePipe.transform(launch.net, 'MMMM d, yyyy - HH:mm z', 'UTC+2');
        const countdown = this.calculateCountdown(launch.net);
        return {
          ...launch,
          formattedDate,
          countdown
        };
      });
  
      this.launchesList.forEach((launch: any) => {
        this.getRocketImage(launch.rocket.configuration.id);
      });
  
      this.startCountdown();
    });
  }

  getRocketImage(rocketId:string){
    this.launchesService.getRocketImage(rocketId)
    .subscribe((response: any)=>{
      console.log('respuesta' + response);
      this.rocketImages[rocketId]= response.manufacturer.image_url;
      console.log('imagen' , this.rocketImages[rocketId]);
    },
    (error) => {
      console.error('Error en la solicitud del cohete:', error);
    }
    )
  }

  calculateCountdown(date: string){
    const targetDate= new Date(date).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <=0){
      return{
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  startCountdown(){
    this.countdownInterval = setInterval(() => {
      this.launchesList.forEach(launch => {
        launch.countdown = this.calculateCountdown(launch.net)
      });
    }, 1000);
  }

 ngOnDestroy() {
    clearInterval(this.countdownInterval);
  }
}
