import CurrentConditionsDisplay from './classes/CurrentConditionsDisplay';
import StatisticsDisplay from './classes/StatisticsDisplay';
import WeatherData from './classes/WeatherData';

function main() {
  const weatherData = new WeatherData();
  const currentDisplay = new CurrentConditionsDisplay(weatherData);
  const statisticsDisplay = new StatisticsDisplay(weatherData);

  weatherData.setMeasurement(80, 65, 30.4);
  weatherData.setMeasurement(82, 70, 29.2);
  weatherData.setMeasurement(78, 90, 29.2);
}

main();
