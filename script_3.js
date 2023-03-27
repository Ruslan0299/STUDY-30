//створюю елемент li
let li_0 = document.createElement("li");
//встановлюю значення для id
li_0.id = "null";
//встановлюю текстовий вміст li
li_0.textContent = "0";
//запит селектора
let ulList = document.querySelector("ul");
//додаю li в ul
ulList.prepend(li_0);
// console.log(ulList);//0 1 3

let li_2 = document.createElement("li");
li_2.id = "second";
li_2.textContent = "2";
let li_1 = document.getElementsByTagName("li")[1];
li_1.after(li_2);
// console.log(ulList);//0 1 2 3

let li_4 = document.createElement("li");
li_4.id = "fourth";
li_4.textContent = "4";
ulList.appendChild(li_4);
// console.log(ulList);//0 1 2 3 4
