import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isClicked!: boolean;

  toggleClick = ():void=> {
      this.isClicked=!this.isClicked
      console.log(this.isClicked)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
