import { DayFive } from './day-five';

export class ForecastFiveDays {
    constructor(
        public name: string,
        public region: string,
        public country: string,
        public condition: string,
        public icon: string,
        public wind_kph: number,
        public precip_mm: number,
        public pressure_mb: number,
        public temp_c: number,
        public days: DayFive[]) {}
}
