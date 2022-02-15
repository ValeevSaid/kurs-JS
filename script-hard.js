let num = 266219;
let arrNum = Array.from(String(num), Number);
let sum = 1;
arrNum.forEach((item) => {
  sum *= item;
});
console.log(sum);

let deg = sum ** 3;
console.log(deg);
console.log(String(deg).slice(0, 2));
