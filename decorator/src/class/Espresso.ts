import Beverage from './Beverage';

export default class Espresso extends Beverage {
  price = 0.89;

  constructor() {
    super('Espresso');
  }

  cost(): number {
    return this.price;
  }
}
