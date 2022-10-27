import Beverage from './Beverage';
import CondimentDecorator from './Condiment';

export default class Mocha extends CondimentDecorator {
  price = 0.2;

  constructor(bev: Beverage) {
    super('Mocha');
    this.beverage = bev;
  }

  cost(): number {
    return this.beverage.cost() + this.price;
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, ${this.description}`;
  }
}
