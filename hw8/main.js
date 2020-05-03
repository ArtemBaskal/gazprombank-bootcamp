const enterStatus = document.getElementById("status");
const button = document.querySelector("button");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  let request = new XMLHttpRequest();
  request.open("GET", "./types.json");
  request.setRequestHeader("Content-Type", "application/json; charset=utf8");
  request.send();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.response);
      if (!data[enterStatus.value]) alert("You are not registered yet!");
      body.style.background = data[enterStatus.value].background;
      alert(
        "Hello, " +
          data[enterStatus.value].name +
          "!" +
          " Your rating is " +
          data[enterStatus.value].number
      );
      let access = document.createElement("div");
      if (data[enterStatus.value].isAdmin) {
        access.innerHTML = "Access confirmed!";
      } else {
        access.innerHTML = "Access denied!";
      }
      document.body.appendChild(access);
    } else {
      inputUsd.value = "Something went wrong and kill you";
    }
  });
});
