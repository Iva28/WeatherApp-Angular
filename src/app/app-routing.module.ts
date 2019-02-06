import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurweatherComponent } from './curweather/curweather.component';
import { ForecastFiveDaysComponent } from './forecast-five-days/forecast-five-days.component';
import { ForecastSevenDaysComponent } from './forecast-seven-days/forecast-seven-days.component';

const routes: Routes = [
  { path: 'current-weather', component: CurweatherComponent},
  { path: '', pathMatch: 'full', redirectTo: 'current-weather'},
  { path: 'forecast-5-days', component: ForecastFiveDaysComponent},
  { path: 'forecast-7-days', component: ForecastSevenDaysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
