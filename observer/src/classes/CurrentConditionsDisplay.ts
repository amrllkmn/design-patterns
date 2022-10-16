import DisplayElement from '../interfaces/display';
import Observer from '../interfaces/observer';
import WeatherData from './WeatherData';

export default class CurrentConditionsDisplay
  implements Observer, DisplayElement
{
  private temperature: number;

  private humidity: number;

  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.temperature = 0;
    this.humidity = 0;
    weatherData.registerObserver(this);
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature} F degrees and ${this.humidity}% humidity.`
    );
  }

  update(temp: number, humidity: number, pressure: number): void {
    this.temperature = temp;
    this.humidity = humidity;
    this.display();
  }
}
