import { WeatherService } from './../weather.service';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public mausam: any;
  locationName:any;
  cur_temp:number;
  weather_condition:string;

  constructor(private weather:WeatherService) {}

  ngOnInit() {
    this.weather.getWeatherDetails().subscribe(data => {
      this.mausam = data;
      this.locationName= this.mausam.name;
      this.cur_temp=this.mausam.main.temp - 273.15;
      this.weather_condition=this.mausam.weather[0].main;
      console.log(this.mausam);
    });
  }


}
