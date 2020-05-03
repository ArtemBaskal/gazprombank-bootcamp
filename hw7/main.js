function throughOnce(fn) {
  let result;
  let isEven = true;

  return function() {
    if (isEven) {
      result = fn.apply(this, arguments);
    }
    isEven = !isEven;
    return result;
  };
}

const logThroughOnce = throughOnce(function(text) {
  console.log(text);
});

logThroughOnce("Hello World! 1"); // "Hello World! 1"
logThroughOnce("Hello World! 2"); //
logThroughOnce("Hello World! 3"); // "Hello World! 3"
logThroughOnce("Hello World! 4"); //
