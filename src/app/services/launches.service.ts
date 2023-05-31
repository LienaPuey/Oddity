import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaunchResponse } from '../interfaces/launch-response';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  constructor(private http: HttpClient) { }

  getLaunches(url:string = "https://ll.thespacedevs.com/2.2.0/launch/upcoming"): Observable<LaunchResponse> {
    return this.http.get<LaunchResponse>(url);
  }

}

