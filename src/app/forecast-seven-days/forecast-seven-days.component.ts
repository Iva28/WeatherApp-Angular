import { Component, OnInit } from '@angular/core';
import { ForecastSevenDays } from '../models/forecast-seven-days';
import { WeatherService } from '../services/weather.service';
import { DaySeven } from '../models/day-seven';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-forecast-seven-days',
  templateUrl: './forecast-seven-days.component.html',
  styleUrls: ['./forecast-seven-days.component.css']
})
export class ForecastSevenDaysComponent implements OnInit {

  forecast: ForecastSevenDays;
  curDay: DaySeven;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getForecastSevenDays().subscribe(
      (result: ForecastSevenDays) => {
        result.days.forEach(d => {
          let _date = new Date(d.date);
          let weekday = _date.toLocaleDateString('en-US',{weekday: 'short'});
          let month = _date.getMonth() + 1;
          let day = _date.getDate();
          d.date = weekday + ' ' + month + "/" + day;
        });
        this.forecast = result;
        this.curDay = this.forecast.days[0];
      },
      (error) => { console.log(error); }
    );
  }
}
