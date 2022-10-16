import DisplayElement from '../interfaces/display';
import Observer from '../interfaces/observer';
import WeatherData from './WeatherData';

export default class StatisticsDisplay implements Observer, DisplayElement {
  private temperatures: number[];

  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.temperatures = [];
    weatherData.registerObserver(this);
  }

  getAverageTemp(): number {
    const sum = this.temperatures.reduce((a, b) => a + b, 0);
    return sum / this.temperatures.length;
  }

  getMinTemp(): number {
    return Math.min(...this.temperatures);
  }

  getMaxTemp(): number {
    return Math.max(...this.temperatures);
  }

  display(): void {
    console.log(
      `Avg/min/max: ${this.getAverageTemp()} / ${this.getMinTemp()} / ${this.getMaxTemp()}`
    );
  }

  update(temp: number, humidity: number, pressure: number): void {
    this.temperatures.push(temp);
    this.display();
  }
}
