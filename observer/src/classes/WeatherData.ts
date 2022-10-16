import Observer from '../interfaces/observer';
import Subject from '../interfaces/subject';

export default class WeatherData implements Subject {
  private observers: Observer[];

  private humidity: number;

  private temperature: number;

  private pressure: number;

  constructor() {
    this.observers = [];
    this.humidity = 0;
    this.pressure = 0;
    this.temperature = 0;
  }

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObserver(): void {
    this.observers.forEach((observer) => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  }

  measurementsChanged(): void {
    this.notifyObserver();
  }

  setMeasurement(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.humidity = humidity;
    this.pressure = pressure;
    this.temperature = temperature;
    this.measurementsChanged();
  }
}
