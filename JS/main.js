/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";


let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}*/

function generateSquare (n) {
  return Array(n)


      .fill('+'.repeat(n))
      .join('\n') 


}

generateSquare(5)