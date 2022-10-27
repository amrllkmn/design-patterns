import Espresso from './class/Espresso';
import Mocha from './class/Mocha';

function main() {
  let espresso = new Espresso();
  console.log(`${espresso.getDescription()}: $${espresso.cost()}`);

  espresso = new Mocha(espresso);
  espresso = new Mocha(espresso);

  console.log(`${espresso.getDescription()}: $${espresso.cost()}`);
}

main();
