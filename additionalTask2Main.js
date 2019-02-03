
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


const body = document.getElementsByTagName("body")[0];
const tbl = document.createElement("table");
tbl.style.width = "100%";
tbl.setAttribute("border", "1");
const tbdy = document.createElement("tbody");
const thead = document.createElement("thead");
thead.innerHTML = "dataTable";

//Object.getOwnPropertyNames(dataTable[0]).forEach(prop => console.log(prop));  //for titles

dataTable.forEach((obj, index, array) => {
  const tr = document.createElement("tr");
  
  createTd(obj.name);
  createTd(obj.value);
  
  tbdy.appendChild(tr);

  function createTd(prop){
    const td = document.createElement("td");
    td.innerHTML = prop;
    tr.appendChild(td);
  }
});

 

tbl.appendChild(thead);
tbl.appendChild(tbdy);
body.appendChild(tbl);