function printWindowValues() {
  const arrOfProps = Object.getOwnPropertyNames(window);
  for (const key of arrOfProps) {
    console.log(key);
  }
}

printWindowValues();

function expten(number) {
  let result = 1;
  for (let i = 1; i <= 10; i++) {
    result *= number;
  }
  console.log(result);
}

function getFuncRes(func, value) {
  return func(value);
}

getFuncRes(console.log, "Hello World!");
