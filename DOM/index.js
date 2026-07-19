
const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red";
paragraph.style.color = "red";
container.appendChild(paragraph);

const heading3 = document.createElement("h3");
heading3.textContent = "I'm Blue";
heading3.style.color = "blue";
container.appendChild(heading3);

const div_container = document.createElement("div");
div_container.style.border = "1px solid black";
container.appendChild(div_container);

const heading1 = document.createElement("h1")
heading1.textContent= "I'm in a div";

const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "ME TOO";

div_container.appendChild(heading1);
div_container.appendChild(anotherParagraph);

const clik = document.querySelector(".button");
clik.onclick = () => alert("Kinang Inamo");