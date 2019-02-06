export class DaySeven {
    constructor(
        public date: string,
        public sunrise: string,
        public sunset: string,
        public moonrise: string,
        public moonset: string,
        public maxtemp_c: number,
        public mintemp_c: number,
        public avgtemp_c: number,
        public totalprecip_mm: number,
        public maxwind_kph: number) {}
}
