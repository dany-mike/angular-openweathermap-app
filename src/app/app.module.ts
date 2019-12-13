import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherItemComponent } from './components/weather/weather-item/weather-item.component';
import { WeatherItemTommorowComponent } from './components/weather/weather-item-tommorow/weather-item-tommorow.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HeaderComponent,
    WeatherItemComponent,
    WeatherItemTommorowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
