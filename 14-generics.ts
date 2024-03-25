const score: Array<number> = [];

const names: Array<string> = [];

function identity<Type>(arg: Type): Type {
  return arg;
}

identity(3);
identity("prayag bhatt");

function func<T>(arg: T): T {
  return arg;
}

interface Car {
  name: string;
  numberOfBrakes: number;
  numberOfEngines: number;
}

function buildCars<Car>(arg: Car): Car {
  return arg;
}

buildCars<Car>({ name: "Supra", numberOfBrakes: 2, numberOfEngines: 8 });

function getListedItems<T>(products: T[]): T {
  const dbIndex = 3;
  return products[dbIndex];
}

// NOTE: Array Function and Generics
// The comma is put after <T,> to differentiate between react components
const moreProducts = <T>(products: T[]): T => {
  const dbIndex = 2;
  return products[dbIndex];
};
