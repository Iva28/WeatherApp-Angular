import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Curweather } from '../models/curweather';
import { ForecastFiveDays } from '../models/forecast-five-days';

@Component({
  selector: 'app-curweather',
  templateUrl: './curweather.component.html',
  styleUrls: ['./curweather.component.css']
})
export class CurweatherComponent implements OnInit {

  curWeather: Curweather;
  isVisible: boolean;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.isVisible = true;
    this.weatherService.getCurWeather().subscribe(
      (result: Curweather) => { this.curWeather = result;},
      (error) => { console.log(error); }
    );
  }
}
