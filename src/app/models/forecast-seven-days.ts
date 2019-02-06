import { DaySeven } from './day-seven';

export class ForecastSevenDays {
    constructor(
        public name: string,
        public region: string,
        public country: string,
        public days: DaySeven[]) {}
}
