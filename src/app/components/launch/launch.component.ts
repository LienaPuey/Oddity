import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailResponse } from 'src/app/interfaces/launch-detail';
import { LaunchesService } from 'src/app/services/launches.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit{
  id:string ='';
  launchDetail!: DetailResponse;
  countdown: any;
  formattedDate: string = '';
  constructor( private launchesService: LaunchesService, private root: ActivatedRoute){}

  ngOnInit(): void {
    this.root.paramMap.subscribe(params =>{
      this.id = params.get('id')!;
      this.launchesService.getLaunchDetail(this.id).subscribe(resp => {
        console.log(resp);
        this.launchDetail = resp;
        this.countdown = this.launchesService.calculateCountdown(this.launchDetail.net.toISOString());
        this.formattedDate = this.launchesService.datePipe.transform(this.launchDetail.net, 'MMMM d, yyyy - HH:mm z', 'UTC+2')?? '';
        console.log('el detalle', this.launchDetail, 'la cuenta atras', this.countdown);
      })
    })
  }


}
