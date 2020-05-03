//task 1

let printWindowValues = () =>
  Object.getOwnPropertyNames(window).forEach(prop => console.log(window[prop]));

printWindowValues();

//task 2

let expten = function(num) {
  let res = 1;
  for (let i = 1; i <= 10; i++) {
    res *= num;
  }
  console.log(res);
};

expten(2); //example

//task 3

let getFuncRes = function(func, value) {
  return func(value);
};

getFuncRes(console.log, "Hello World!");
