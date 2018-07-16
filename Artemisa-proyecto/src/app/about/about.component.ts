import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  images: Array<string> = [
    "assets/img/Artemisa(16).jpg",
    "assets/img/Artemisa(15).jpg",
    "assets/img/Artemisa(14).jpg",
    "assets/img/Artemisa(13).jpg"
    ];
  constructor() { }

  ngOnInit() {
  }

}
