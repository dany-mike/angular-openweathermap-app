import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: any = [];
  weatherT: any = [];
  display: boolean = false;
  displayT: boolean = false;
  disabled: boolean;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getWeatherByCity(name) {
    this.weatherService.getWeatherByCity(name).subscribe(weather => {
      this.weather = weather;
      this.disabled = false;
      this.displayT = false;
      this.display = true;
      console.log(weather);
    })
  }

  getWeatherOfTommorow(name) {
    this.weatherService.getWeatherForecastByCity(name).subscribe(weatherT => {
      this.weatherT = weatherT;
      this.displayT = true;
      this.disabled = true;
      console.log(weatherT);
    })
  }

  

}
