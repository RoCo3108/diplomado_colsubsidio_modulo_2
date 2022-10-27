//console.log("Hola Ronald Lo lograstes !Felicitaciones\n")

function generateSquare(number, letter = "X") {
  if (typeof number === "number") {
    for (let i = 0; i < number; i++) {
      console.log(letter.repeat(number));
      for (let j = 0; j < number; j++) {}
    }
  } else {
    console.log("Missing Size");
  }
}
generateSquare(10, "X");
