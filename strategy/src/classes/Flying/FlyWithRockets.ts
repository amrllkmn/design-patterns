import FlyBehavior from '../../interfaces/FlyBehavior';

export default class FlyWithRockets implements FlyBehavior {
  behavior = 'Rocket powered flight baby!';

  fly(): void {
    console.log(this.behavior);
  }
}
