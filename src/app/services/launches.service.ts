import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, timer } from 'rxjs';
import { LaunchResponse } from '../interfaces/launch-response';
import { DetailResponse } from '../interfaces/launch-detail';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  private apiKey = 'e5fa3ef94d5a113e6a09f6d5a5abadf403bb251c'

  constructor(private http: HttpClient, public datePipe: DatePipe) { }

  getLaunches(url:string = "https://ll.thespacedevs.com/2.2.0/launch/upcoming"): Observable<LaunchResponse> {
    const headers = new HttpHeaders().set('Authorization', `Token ${this.apiKey}`)
    return this.http.get<LaunchResponse>(url, { headers });
  }

  getLaunchDetail(id: string): Observable<any>{
    return this.http.get<DetailResponse>(`https://ll.thespacedevs.com/2.2.0/launch/${id}`);
  }
  
  
  getFormattedLaunchesWithCountdown(): Observable<LaunchResponse[]> {
    const url = "https://ll.thespacedevs.com/2.2.0/launch/upcoming";
    const headers = new HttpHeaders().set('Authorization', `Token ${this.apiKey}`);
    
    return this.http.get(url, { headers }).pipe(
      map((resp: any) =>{
        return resp.results.map((launch: any)=> {
          const formattedDate = this.datePipe.transform(launch.net, 'MMMM d, yyyy - HH:mm z', 'UTC+2');
          const countdown = this.calculateCountdown(launch.net);
          return {
            ...launch,
            formattedDate,
            countdown
          }
        })
      }),
      map((launches:any[]) => {
        launches.forEach(launch =>{
          launch.countdownInterval = timer(0, 1000).pipe(
            map(()=>{
              launch.countdown = this.calculateCountdown(launch.net);
            })
          )
        });
        return launches;
      })
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
}

