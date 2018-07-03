import {forwardRef, Injectable, NgModule} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
    lat:any=localStorage.getItem('wa_lat')?localStorage.getItem('wa_lat'):20;
    lon:any= localStorage.getItem('wa_lon')?localStorage.getItem('wa_lon'):30;
    
    url:string= 'https://api.openweathermap.org/data/2.5/';
    key:string='cc1dbfbe093670c4b99edc93e5f161b0';

    constructor(private http: HttpClient) { }

    getWeatherDetails(){
        return this.http.get(this.url+'weather?lat='+this.lat+'&lon='+this.lon+'&appid='+this.key)
    }


    getForcast(){
        return this.http.get(this.url+'forecast?lat='+this.lat+'&lon='+this.lon+'&appid='+this.key)
    }


    }