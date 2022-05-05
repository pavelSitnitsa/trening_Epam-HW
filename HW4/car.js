let car = {
  color: "black",
};
function power() {
  console.log(60);
}
car.color = "green";
car.power = power();

console.log(car.color);
console.log(car.power);

