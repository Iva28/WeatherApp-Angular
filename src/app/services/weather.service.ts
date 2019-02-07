import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curweather } from '../models/curweather';
import { ForecastFiveDays } from '../models/forecast-five-days';
import { DayFive } from '../models/day-five';
import { ForecastSevenDays } from '../models/forecast-seven-days';
import { DaySeven } from '../models/day-seven';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'http://api.apixu.com/v1/';
  private city = 'Baku';

  constructor(private http: HttpClient) { }

  getCurWeather(): Observable<Curweather> {
    return this.http.get<Curweather>(`${this.url}current.json?q=${this.city}`)
    .pipe(map((data) => {
      return new Curweather(data['location']['name'],
      data['location']['region'],
      data['location']['country'],
      data['current']['temp_c'],
      data['current']['temp_f'],
      data['current']['condition']['icon']);
    }));
  }

  getForecastFiveDays(): Observable<ForecastFiveDays> {
    return this.http.get<ForecastFiveDays>(`${this.url}forecast.json?q=${this.city}&days=5`)
    .pipe(map((data) => {
      const days: DayFive[] = [];
      data['forecast']['forecastday'].forEach((f) => {
        days.push(new DayFive( f['date'], f['day']['condition']['icon'], f['day']['avgtemp_c']));
      });
      return new ForecastFiveDays(
        data['location']['name'],
        data['location']['region'],
        data['location']['country'],
        data['current']['condition']['text'],
        data['current']['condition']['icon'],
        data['current']['wind_kph'],
        data['current']['precip_mm'],
        data['current']['pressure_mb'],
        data['current']['temp_c'],
        days);
    })); 
  }

  getForecastSevenDays(): Observable<ForecastSevenDays> {
    return this.http.get<ForecastSevenDays>(`${this.url}forecast.json?q=${this.city}&days=7`)
    .pipe(map((data) => {
      const days: DaySeven[] = [];
      data['forecast']['forecastday'].forEach((f) => {
        days.push(new DaySeven(
          f['date'],
          f['astro']['sunrise'],
          f['astro']['sunset'],
          f['astro']['moonrise'],
          f['astro']['moonset'],
          f['day']['maxtemp_c'],
          f['day']['mintemp_c'],
          f['day']['avgtemp_c'],
          f['day']['totalprecip_mm'],
          f['day']['maxwind_kph']));
      });
      return new ForecastSevenDays(
        data['location']['name'],
        data['location']['region'],
        data['location']['country'],
        days);
    })); 
  }
}
