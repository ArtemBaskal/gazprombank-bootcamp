function printWindowValues() {
  const arr = Object.getOwnPropertyNames(window);
  for (const key of arr) {
    console.log(key);
  }
};

printWindowValues();
