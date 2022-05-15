class Animal {
    move() {
      return true;
    }
  }
  
  class Cat extends Animal {}
  let cat = new Cat;
  console.log(cat.move());
  