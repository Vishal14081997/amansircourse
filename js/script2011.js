//clousers

function parant() {
  let a = 4;

  function child() {
    console.log(a);
  }
  child();
}

// parant()


////////////////////////////

const obj = {
  name: "vishal", //property
  age: 27,
  fun: function () {
    console.log("vishal sing"); //method
  },
};

obj.fun();
// console.log(obj)


//////////////////////////
let person = {
  eat(e) {
    console.log(e);
  },
};

let ram = {
  name(n) {
    console.log(n);
  },
};

// ram__proto__ = person;
Object.setPrototypeOf(ram, person);
ram.name("rajendra");
ram.eat("he can eat!");

//////////////////////////////////////
//type-2

//class and object

class Car {
  color;
  wheels;
  constructor(color, v) {
    this.color = color;
    this.wheels = v;
  }
  start() {
    console.log(this.color);
  }
}

// let bmw = new Car();
// bmw.color = "white";
// bmw.wheels = { small: 2, big: 2 };

// let bmw1 = new Car();
// bmw1.color = "red";
// bmw1.wheels = { small: 5, big: 5 };
let bmw = new Car("white", { small: 2, big: 2 });
let bmw1 = new Car("red", { small: 5, big: 5 });
bmw1.start()
