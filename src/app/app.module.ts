import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurweatherComponent } from './curweather/curweather.component';
import { ForecastFiveDaysComponent } from './forecast-five-days/forecast-five-days.component';
import { ForecastSevenDaysComponent } from './forecast-seven-days/forecast-seven-days.component';

@NgModule({
  declarations: [
    AppComponent,
    CurweatherComponent,
    ForecastFiveDaysComponent,
    ForecastSevenDaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
