import {forwardRef, Injectable, NgModule} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
    lat:any=localStorage.getItem('wa_lat');
    lon:any= localStorage.getItem('wa_lon');
    
    url:string= 'http://api.openweathermap.org/data/2.5/weather';
    key:string='cc1dbfbe093670c4b99edc93e5f161b0';

    constructor(private http: HttpClient) { }

    getWeatherDetails(){
        return this.http.get(this.url+'?lat='+this.lat+'&lon='+this.lon+'&appid='+this.key)
    }


    }