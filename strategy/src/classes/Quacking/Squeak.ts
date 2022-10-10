import QuackBehavior from '../../interfaces/QuackBehavior';

export default class Squeak implements QuackBehavior {
  behavior = 'Squeak!';

  quack(): void {
    console.log(this.behavior);
  }
}
