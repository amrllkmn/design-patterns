import CurrentConditionsDisplay from './classes/CurrentConditionsDisplay';
import StatisticsDisplay from './classes/StatisticsDisplay';
import WeatherData from './classes/WeatherData';

function main() {
  const weatherData = new WeatherData();
  const currentDisplay = new CurrentConditionsDisplay(weatherData);
  const statisticsDisplay = new StatisticsDisplay(weatherData);

  weatherData.setMeasurement(30.4, 65, 80);
  weatherData.setMeasurement(29.2, 70, 82);
  weatherData.setMeasurement(29.2, 90, 78);
}

main();
