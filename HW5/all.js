// 1
let muvies = ["Shawshank Redemption", "Green Mile", "Forrest Gump"].forEach((muv) => console.log(muv));
// 2
let cars = ["Mercedes", "BMW", "Lexus"];
let str = cars.join(", ");
let arr = str.split(",");
console.log(str);
console.log(arr);
// 3
['Elena', 'Sasha', 'Ivan'].forEach((item) => {console.log(`Hello, ${item}`)} )
// 4
let numbers = [0, 5, 6, 3, 9].map(numb => console.log(!!numb))
// 5
let arr1 = [1, 6, 7, 8, 3, 4, 5, 6];
let sort = arr1.sort((a, b) => a - b).reverse();
console.log(sort);
// 6
let arr2 = [1, 6, 7, 8, 3, 4, 5, 6];
let newArr = [];
for (let numb of arr2) {
  if (numb > 3) {
    newArr.push(numb);
  }
}
console.log(newArr);
// 7
let arr3 = [1, 6, 7, 8, 3, 4, 5, 9];
function show(arr, n) {
  for (let key of arr3) {
    if (key == n) {
      return arr.indexOf(n);
    }
  }
}
console.log(show(arr3, 8));
// 8
let a = 21;
while (a > 10) {
  console.log(a);
  a--;
}
// 9
let i = 0
for(let i = 0; 21 > i; i++){
    if(i % 2 != 0 || i == 2){
       console.log(i)
    }
}
// 10
let q = 0
for(let q = 0; 21 > q; q++){
    if(q % 2 != 0){
       console.log(q)
    }
}
