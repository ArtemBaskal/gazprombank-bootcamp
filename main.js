//task 2
const arr = ["a", "b", "c", "d", "e", "f"];
const length = arr.length;
let  brr = [];
for (let i=0; i < length/2; i++){
brr.push(arr.shift(), arr.pop())
}
console.log(brr.join(""))