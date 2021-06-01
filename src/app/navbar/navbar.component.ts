import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  hideMessageStatus = true;
  constructor() { }

  ngOnInit(): void {
  }
  public setStatus(type:string,message:string){
    this.hideMessageStatus = false;
  }
}
