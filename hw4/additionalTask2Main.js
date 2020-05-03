const dataTable = [
  {
    name: "name1",
    value: "1"
  },
  {
    name: "name2",
    value: "2"
  },
  {
    name: "name3",
    value: "3"
  },
  {
    name: "name4",
    value: "4"
  }
];

let body = document.body,
tbl = document.createElement("table");
tbl.style.width = "100px";
tbl.style.border = "1px solid black";

dataTable.forEach((obj) => {
  let tr = tbl.insertRow();

  createTd(obj.name);
  createTd(obj.value);

  body.appendChild(tbl);

  function createTd(value) {
    let td = tr.insertCell();
    td.innerHTML = value;
    td.style.border = "1px solid black";
  }
});
body.appendChild(tbl);
