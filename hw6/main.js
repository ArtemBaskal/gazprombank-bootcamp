//task 1
(function() {
  function getSevenCol(arr) {
    let i = 0;
    arr
      .toString()
      .split("")
      .forEach(el => {
        if (+el === 7) i++;
      });
    return i;
  }
  console.log(getSevenCol([1, 7, 4, 77, 73])); //example
})();
//task 2
(function() {
  function arrToStr(arr) {
    const halfLength = arr.length / 2;
    let brr = [];
    for (let i = 0; i < halfLength; i++) {
      brr.push(arr.shift(), arr.pop());
    }
    return brr.join("");
  }

  console.log(arrToStr(["a", "b", "c", "d", "e", "f"])); //example
})();
