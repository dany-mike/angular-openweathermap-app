import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-item-tommorow',
  templateUrl: './weather-item-tommorow.component.html',
  styleUrls: ['./weather-item-tommorow.component.css']
})
export class WeatherItemTommorowComponent implements OnInit {

  tommorow = new Date()


  @Input() city: any = [];
  constructor() { }

  ngOnInit() {
    this.tommorow.setDate(this.tommorow.getDate() + 1)
  }

}
