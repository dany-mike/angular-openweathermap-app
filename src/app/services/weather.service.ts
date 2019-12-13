import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = environment.apikey;
  // headers = new HttpHeaders().set('Authorization', 'Bearer' + this.apiKey)
  cityNameUrl: string;
  CityForecastUrl: string;

  constructor(private http: HttpClient) { }
  getWeatherByCity(name: string) {
    this.cityNameUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+name+'&appid='+this.apiKey+'&units=metric';
    return this.http.get(this.cityNameUrl).pipe(
      map(res => res)
    )
  }
  getWeatherForecastByCity(name: number) {
    this.CityForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+name+'&appid='+this.apiKey+'&units=metric&cnt=9';
    return this.http.get(this.CityForecastUrl).pipe(
      map(res => res)
    )
  }
} 
