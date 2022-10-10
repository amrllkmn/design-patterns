import FlyBehavior from '../../interfaces/FlyBehavior';

export default class FlyWithWings implements FlyBehavior {
  behavior = "I'm flying with wings.";

  fly(): void {
    console.log(this.behavior);
  }
}
