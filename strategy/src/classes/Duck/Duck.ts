import FlyBehavior from '../../interfaces/FlyBehavior';

import QuackBehavior from '../../interfaces/QuackBehavior';

export default abstract class Duck {
  flyBehavior: FlyBehavior;

  quackBehavior: QuackBehavior;

  swimInput = 'All ducks swim';

  abstract display(): void;

  performFly(): void {
    this.flyBehavior.fly();
  }

  performQuack(): void {
    this.quackBehavior.quack();
  }

  swim(): void {
    console.log(this.swimInput);
  }

  setFlyBehavior(fb: FlyBehavior): void {
    this.flyBehavior = fb;
  }

  setQuackBehavior(qB: QuackBehavior): void {
    this.quackBehavior = qB;
  }

  constructor(fB: FlyBehavior, qB: QuackBehavior) {
    this.flyBehavior = fB;
    this.quackBehavior = qB;
  }
}
