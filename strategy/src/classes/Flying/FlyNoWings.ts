import FlyBehavior from '../../interfaces/FlyBehavior';

export default class FlyNoWings implements FlyBehavior {
  behavior = "I can't fly.";

  fly(): void {
    console.log(this.behavior);
  }
}
