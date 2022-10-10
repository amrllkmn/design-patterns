import Duck from './Duck';
import FlyWithWings from '../Flying/FlyWIthWings';
import Quack from '../Quacking/Quack';

export default class MallardDuck extends Duck {
  display(): void {
    console.log("I'm a mallard duck.");
  }

  constructor() {
    super(new FlyWithWings(), new Quack());
  }
}
