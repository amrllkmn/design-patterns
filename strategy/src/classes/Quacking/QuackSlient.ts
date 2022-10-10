import QuackBehavior from '../../interfaces/QuackBehavior';

export default class QuackSilent implements QuackBehavior {
  behavior = '**Silent**';

  quack(): void {
    console.log(this.behavior);
  }
}
