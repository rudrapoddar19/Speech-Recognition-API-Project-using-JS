const texts = document.querySelector(".texts");
window.SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
let p = document.createElement("p");
recognition.addEventListener("result", (e) => {
texts.appendChild(p);
const text = Array.from(e.results)
.map((result) => result[0])
.map((result) => result.transcript)
.join("");
p.innerText = text;
if (e.results[0].isFinal) {
if (text.includes("how are you")) {
p = document.createElement("p");
p.classList.add("replay");
p.innerText = "I am fine";
texts.appendChild(p);
}
if (text.includes("hello")) {
p = document.createElement("p");
p.classList.add("replay");
p.innerText = "Hi";
texts.appendChild(p);
}
if (
text.includes("what's your name") ||
text.includes("what is your name")
) {
p = document.createElement("p");
p.classList.add("replay");
p.innerText = "Rudra Poddar";
texts.appendChild(p);
}
if (
text.includes("from where have you studied BTech")
) {
p = document.createElement("p");
p.classList.add("replay");
p.innerText = "University Of Engineering & Managemenet,Kolkata";
texts.appendChild(p);
}
if (
text.includes("say something about you")
) {
p = document.createElement("p");
p.classList.add("replay");
p.innerText = "I am a MERN Stack Web Developer";
texts.appendChild(p);
}
if (text.includes("open GitHub")) {
p = document.createElement("p");
p.classList.add("replay");
p.innerText = "opening GitHub";
texts.appendChild(p);
console.log("opening github");
window.open("https://github.com/rudrapoddar19");
}
if (
text.includes("open LinkedIn")||
text.includes("open Linkedin")
) {
p = document.createElement("p");
p.classList.add("replay");
p.innerText = "opening LinkedIn";
texts.appendChild(p);
console.log("opening LinkedIn");
window.open("https://www.linkedin.com/in/rudrapoddar/");
}
if (
text.includes("Thank You")||
text.includes("Thank ")
) {
p = document.createElement("p");
p.classList.add("replay");
p.innerText = "Welcome";
texts.appendChild(p);
}
p = document.createElement("p");
}
});
recognition.addEventListener("end", () => {
recognition.start();
});
recognition.start();