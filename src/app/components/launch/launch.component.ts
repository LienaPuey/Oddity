import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchesService } from 'src/app/services/launches.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit{
  id:string ='';
  launchDetail: any;

  constructor( private launchesService: LaunchesService, private root: ActivatedRoute){}

  ngOnInit(): void {
    this.root.paramMap.subscribe(params =>{
      this.id = params.get('id')!;
      this.launchesService.getLaunchDetail(this.id).subscribe(resp => {
        console.log(resp);
        this.launchDetail = resp;
      })
    })
  }
}
