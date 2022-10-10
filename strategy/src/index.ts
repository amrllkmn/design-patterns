import MallardDuck from './classes/Duck/MallardDuck';
import ModelDuck from './classes/Duck/ModelDuck';
import FlyWithRockets from './classes/Flying/FlyWithRockets';

function main() {
  const mallard = new MallardDuck();
  mallard.display();
  mallard.performFly();
  mallard.performQuack();

  console.log('\n');

  const model = new ModelDuck();
  model.display();
  model.performFly();
  model.performQuack();
  model.setFlyBehavior(new FlyWithRockets());
  model.performFly();
}

main();
