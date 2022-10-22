///console.log("javascript in amazing!")

function pulsame(){

    console.log("C is fun\nPython is cool\nJavascript is amazing")
}


function primera(parm){

    if (parm===undefined){
        console.log("argument not found")
    }else{

        console.log("Argument found")
    }
}

function imprima(num){
    console.log(num)

    if (typeof num === "number") {
        for (let i = 0; i < num; i++) {
            console.log("C is fun")
            
        }
    }if (typeof num === "undefined"){
        console.log("Es un undefined")

    }
    if (typeof num==="string"){

        console.log("Es un string")
    }
}

console.log( 5 ==="5" )