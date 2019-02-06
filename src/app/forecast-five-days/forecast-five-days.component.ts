import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { ForecastFiveDays } from '../models/forecast-five-days';

@Component({
  selector: 'app-forecast-five-days',
  templateUrl: './forecast-five-days.component.html',
  styleUrls: ['./forecast-five-days.component.css']
})
export class ForecastFiveDaysComponent implements OnInit {

  forecast: ForecastFiveDays;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getForecastFiveDays().subscribe(
      (result: ForecastFiveDays) => {
        result.days.forEach(d => {
          let weekday = new Date(d.date).toLocaleDateString('en-US',{weekday: 'short'});
          d.date = weekday;
        });  
        this.forecast = result;
      },
      (error) => { console.log(error); }
    );
  }
}
