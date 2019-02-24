let data = 1;
let time = new Date().getTime();
let isFirstCall = true;
let arr = [];

function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve(data++), 1000);
  });
}

setInterval(() => {
  let currentTime = new Date().getTime();
  if (currentTime - time >= 2000 || isFirstCall) {
    getData().then(resolve => {
      arr.push(resolve);
      time = currentTime;
      isFirstCall = false;
    });
  } else {
    console.log("Информация закэширована: " + arr[arr.length - 1]);
  }
}, 500);
