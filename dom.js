// console.log(document);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);

// let title = document.getElementById("header-title")
// title.textContent = "This is New Title";
// document.getElementById("main-header").style.border = "5px solid black";
// document.getElementsByClassName("title")[0].style.color = "green";
// document.getElementsByClassName("title")[0].style.fontWeight = "bold";

// document.getElementsByClassName("list-group-item")[2].style.color = "green";
// let items = document.getElementsByClassName("list-group-item");
// for(let i=0; i<items.length; i++){
//     items[i].style.fontWeight = "bold";
// }

// document.getElementsByClassName("new_item")[0].style.background = "yellow";
// document.getElementsByTagName("li")[4].style.color = "red";

// document.querySelector(".list-group-item:nth-child(2)").style.background = "green";
// document.querySelector(".list-group-item:nth-child(3)").hidden = true;


// parent Element
console.log(document.getElementsByClassName("list-group-item")[0].parentElement);

// parentNode
document.getElementById("main").parentNode.parentNode.style.background = "grey";

// last child
console.log(document.getElementById("items").lastChild);

// lastElementChild
document.getElementById("items").lastElementChild.style.background = "skyblue";

// first element child
document.querySelector("#items").firstElementChild.style.color = "purple";

// first child
console.log(document.querySelectorAll("#items")[0].firstChild);

// next sibling
console.log(document.getElementsByClassName("title")[0].nextSibling);

// next element sibling
document.getElementsByTagName("h2")[0].nextElementSibling.style.background = "#ECECEC";

// previous sibling
console.log(document.getElementsByTagName("form")[0].previousSibling);

// previous element sibling
document.getElementsByTagName("form")[0].previousElementSibling.style.color = "red";

// create element && append child
let elem = document.createElement("h3");
elem.innerText = "this is appended heading";
document.getElementsByClassName("container")[1].appendChild(elem);

// set attribute
document.getElementsByTagName("form")[0].firstElementChild.setAttribute("name", "text");



let head = document.createElement("h2");
head.innerText = "HEllo word";
document.getElementsByClassName("container")[0].prepend(head);

let new_item = document.createElement("li");
new_item.textContent = "extra item added";
new_item.className = "list-group-item";
document.getElementById("items").prepend(new_item);