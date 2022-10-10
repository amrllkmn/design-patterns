import QuackBehavior from '../../interfaces/QuackBehavior';

export default class Quack implements QuackBehavior {
  behavior = 'Quack!';

  quack(): void {
    console.log(this.behavior);
  }
}
