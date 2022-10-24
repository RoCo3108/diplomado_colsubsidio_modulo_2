//console.log("Hola Ronald Lo lograstes !Felicitaciones\n")

function generateCuadrado(num,letra){
    if (typeof num  === "number"){
        for (let i= 0; i < num; i++) {
            console.log(letra.repeat(num))
            for (let j = 0; j <num; j++) { 
            }
        }
    }
     else{
        console.log("Missing Size")
     }

}
generateCuadrado(6,"X")