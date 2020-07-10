let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let db = 0;
for (let i = 0; i < numericArray.length; i++) {
      if (numericArray[i] % 2 == 0) {
          db++;
      }
 }
console.log("csiravagyok", db);


let kiscica = [1, 4, 6, 8, 3]
let sum = 0
for (let i = 0; i < kiscica.length; i++) {
    sum += kiscica[i];
    
} 

console.log(sum)

kiscica.push(9)
console.log(kiscica)

kiscica.pop()
console.log(kiscica)


