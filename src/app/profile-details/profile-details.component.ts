import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent{
  profileUrl: string = 'https://www.robertbird.com/wp-content/uploads/2021/07/barry-o-donnell-profile-image-500x500-min.jpg';
  public empId: string;
  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    this.route.params.subscribe(paramsId => {
      this.empId = paramsId['empId'];
    });
  }
}
