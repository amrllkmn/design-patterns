import DisplayElement from '../interfaces/display';
import Observer from '../interfaces/observer';
import WeatherData from './WeatherData';

export default class HeatIndexDisplay implements Observer, DisplayElement {
  private temperature: number;

  private humidity: number;

  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.temperature = 0;
    this.humidity = 0;
    weatherData.registerObserver(this);
  }

  private computeHeatIndex(): number {
    const index =
      16.923 +
      0.185212 * this.temperature +
      5.37941 * this.humidity -
      0.100254 * this.temperature * this.humidity +
      0.00941695 * (this.temperature * this.temperature) +
      0.00728898 * (this.humidity * this.humidity) +
      0.000345372 * (this.temperature * this.temperature * this.humidity) -
      0.000814971 * (this.temperature * this.humidity * this.humidity) +
      0.0000102102 *
        (this.temperature * this.temperature * this.humidity * this.humidity) -
      0.000038646 * (this.temperature * this.temperature * this.temperature) +
      0.0000291583 * (this.humidity * this.humidity * this.humidity) +
      0.00000142721 *
        (this.temperature *
          this.temperature *
          this.temperature *
          this.humidity) +
      0.000000197483 *
        (this.temperature * this.humidity * this.humidity * this.humidity) -
      0.0000000218429 *
        (this.temperature *
          this.temperature *
          this.temperature *
          this.humidity *
          this.humidity) +
      0.000000000843296 *
        (this.temperature *
          this.temperature *
          this.humidity *
          this.humidity *
          this.humidity) -
      0.0000000000481975 *
        (this.temperature *
          this.temperature *
          this.temperature *
          this.humidity *
          this.humidity *
          this.humidity);
    return index;
  }

  display(): void {
    const index = this.computeHeatIndex();
    console.log(`Heat index is ${index}`);
  }

  update(): void {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.display();
  }
}
