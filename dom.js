// console.log(document);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);

let title = document.getElementById("header-title")
title.textContent = "This is New Title";
document.getElementById("main-header").style.border = "5px solid black";
document.getElementsByClassName("title")[0].style.color = "green";
document.getElementsByClassName("title")[0].style.fontWeight = "bold";

document.getElementsByClassName("list-group-item")[2].style.color = "green";
let items = document.getElementsByClassName("list-group-item");
for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = "bold";
}

document.getElementsByClassName("new_item")[0].style.background = "yellow";
document.getElementsByTagName("li")[4].style.color = "red";

document.querySelector(".list-group-item:nth-child(2)").style.background = "green";
document.querySelector(".list-group-item:nth-child(3)").hidden = true;