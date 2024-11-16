"use strict";

// DOM methods

document.getElementById("title");

document.getElementById("title").id;

document.getElementById("title").value;

document.getElementById("title").textContent;

document.getElementById("title").className;

document.getElementById("title").getAttribute("id");

document.getElementById("title").getAttribute("class");

document.getElementById("title").setAttribute("class", "test heading");

const title = document.getElementById("title");

title.style.backgroundColor = "green";

title.style.padding = "15px";

title.style.borderRadius = "10px";

title.textContent; // show all text any those on which display none is applied

title.innerText; // show only visible text not those on which display none is applied

title.innerHTML; // show all text any those on which display none is applied with html tags

// ===========================
const parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[0].innerHTML); // Output => Monday

// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
// }

parent.children[1].style.color = "orange";

// console.log(parent.firstElementChild.innerText);
// console.log(parent.lastElementChild.innerText);

const dayOne = document.querySelector(".day");

// console.log(dayOne.innerText);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling.innerText);

// console.log("Nodes: ", parent.childNodes);

const div = document.createElement("div");
console.log(div);

div.className = "main";
div.id = "myId";

div.innerHTML = `<h1>Welcome Ali</h1>
<p>I live in Sialkot</p>`;
// const addText = document.createTextNode("Chai aur code");

// div.append(addText);

document.body.append(div);

// ====================================
function addList(langName) {
  const li = document.createElement("li");
  li.innerText = langName;
  li.innerText = `${langName}`;
  document.querySelector(".language").appendChild(li);
  //   document.querySelector(".language").append(li);
}

// addList("Java");
// addList("Python");

function addOptLang(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
}

addOptLang("Golang");

// Edit
const second = document.querySelector("li:nth-child(2)");
// second.innerHTML = "Mojo";

const newli = document.createElement("li");
// newli.textContent = "Mojo";
second.replaceWith(newli);

const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>TypeScript</li>";

const lastLang = document.querySelector("li:last-child");
lastLang.remove();
