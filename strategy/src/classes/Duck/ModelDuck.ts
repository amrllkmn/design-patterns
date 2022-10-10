import FlyNoWings from '../Flying/FlyNoWings';
import QuackSilent from '../Quacking/QuackSlient';
import Duck from './Duck';

export default class ModelDuck extends Duck {
  display(): void {
    console.log("I'm a model duck.");
  }

  constructor() {
    super(new FlyNoWings(), new QuackSilent());
  }
}
