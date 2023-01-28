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
