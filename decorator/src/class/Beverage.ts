export default abstract class Beverage {
  description = 'Unknown beverage';

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;

  constructor(description: string) {
    this.description = description;
  }
}
