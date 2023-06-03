import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaunchResponse } from '../interfaces/launch-response';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  private apiKey = 'e5fa3ef94d5a113e6a09f6d5a5abadf403bb251c'

  constructor(private http: HttpClient) { }

  getLaunches(url:string = "https://ll.thespacedevs.com/2.2.0/launch/upcoming"): Observable<LaunchResponse> {
    const headers = new HttpHeaders().set('Authorization', `Token ${this.apiKey}`)
    return this.http.get<LaunchResponse>(url, { headers });
  }

  getRocketImage(rocketId: string) {
    const rocketUrl = `https://ll.thespacedevs.com/2.2.0/config/launcher/${rocketId}/`;
    const headers = new HttpHeaders().set('Authorization', `Token ${this.apiKey}`);
    return this.http.get<any>(rocketUrl, { headers });
  }
}

