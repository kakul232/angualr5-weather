import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public mausam: any;
  public forcast: any;
  public locationName: any;
  public timestamp: any;
  public cur_temp: any;
  public Tempmin: any;
  public Tempmax: any;
  public weather_condition: any;
  public curent_icon: any;

  public windSpeed: any;
  public Cloud: any;
  public humidity:any;



  getLocalData: any;

  constructor(private weather: WeatherService) { }

  ngOnInit() {

    this.getLocalData = JSON.parse(localStorage.getItem('CurrentWeather'));
    if (this.getLocalData) {
      console.log(this.getLocalData);
      this.mausam = this.getLocalData;
      this.getCueerntWeather();
      this.getCueerntForcast();

    } else {
      console.log('not');
      this.getCueerntWeather();
      this.getCueerntForcast();
    }


  }


  getCueerntWeather = function () {
    if (!this.getLocalData) {
      this.weather.getWeatherDetails().subscribe(data => {
        this.mausam = data;
        localStorage.setItem('CurrentWeather', JSON.stringify(this.mausam));
        this.getCueerntWeather();
      })
    } else {

      this.getLocalData = JSON.parse(localStorage.getItem('CurrentWeather'));
      this.timestamp = new Date().getTime();
      this.locationName = this.mausam.name;
      this.cur_temp = this.mausam.main.temp - 273.15;
      this.Tempmax = this.mausam.main.temp_max - 273.15;
      this.Tempmin = this.mausam.main.temp_m - 273.15;
      this.humidity = this.mausam.main.humidity ;
      this.weather_condition = this.mausam.weather[0].main;
      this.windSpeed = this.mausam.wind.speed;
      this.Cloud = this.mausam.clouds.all;
      this.curent_icon = 'http://openweathermap.org/img/w/' + this.mausam.weather[0].icon + '.png';
    }
  }


  getCueerntForcast = function () {
    if (this.getLocalData) {
      this.weather.getForcast().subscribe(data => {
        this.forcast = data;

      })
    }
  }
}





