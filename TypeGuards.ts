// for primitive types

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

// printValue("hello");
// printValue(5);

type Dog = {
  bark: () => void;
};

type Cat = {
  mewo: () => void;
};

function makeSound(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.mewo();
  }
}

type PhysicalProduct = {
  name: string;
  weight: number;
};

type DigitalProduct = {
  name: string;
  downloadUrl: string;
};

function getShippingInfo(product: PhysicalProduct | DigitalProduct) {
  if ("weight" in product) {
    return `Ships at ${product.weight}kg`;
  } else {
    return `Instant download: ${product.downloadUrl}`;
  }
}


const waterBottle = {name: "RFL", weight: 5};
console.log(getShippingInfo(waterBottle))