let variasTarjetas =
[
  {
      "title": "Card 1",
      "content": "Este es el texto que debe observarse en el card-text",
      "buton": "Pulsame"
  },
  {
      "title": "Card 2",
      "content": "Este es el texto que debe observarse en el card-text",
      "buton": "Pulsame"
  },
  {
      "title": "Card 3",
      "content": "Este es el texto que debe observarse en el card-text",
      "buton": "Pulsame"
  },
  {
      "title": "Card 4",
      "content": "Este es el texto que debe observarse en el card-text",
      "buton": "Pulsame"
  },
  {
      "title": "Card 5",
      "content": "Este es el texto que debe observarse en el card-text",
      "buton": "Pulsame"
  },
  {
      "title": "Card 6",
      "content": "Este es el texto que debe observarse en el card-text",
      "buton": "Pulsame"
  },
  {
    "title": "Card 7",
    "content": "Este es el texto que debe observarse en el card-text",
    "buton": "Pulsame"
}
  ]

/*const listaPrueba =["martes", "miercoles", "jueves"];
listaPrueba.forEach((item) => {
  console.log(item);
  const li = document.createElement("li");
  li.textContent = item;

  lista.appendChild(li);
});*/


const filasR = document.getElementById("rows");

const createCard = (elemento) => {

        const colum = document.createElement("div");
       
        const cards = document.createElement("div");
        const headers = document.createElement("div");
        headers.textContent = "Tarjeta de Presentacion";
  
        const div_body = document.createElement("div");
  
        const titulo = document.createElement("h5");
        titulo.textContent = elemento.title;
  
        const parrafo = document.createElement("p");
        parrafo.textContent = elemento.content;
  
        const boton = document.createElement("a");
        boton.textContent = elemento.buton;

        const footer = document.createElement("div");
      
        colum.setAttribute("class", "col-lg-4")
        div_body.setAttribute("class", "card-body");
        titulo.setAttribute("class", "card-title text-center");
        headers.setAttribute("class", "card-header bg-primary text-white");
        parrafo.setAttribute("class", "card-text ");
        boton.setAttribute("class", "btn btn-primary");
        cards.setAttribute("class", "card my-3")
        footer.setAttribute("class", "card-footer")
        filasR.appendChild(colum);
        colum.appendChild(cards);
        cards.appendChild(headers);
        cards.appendChild(div_body);
        div_body.appendChild(titulo);
        div_body.appendChild(parrafo);
        div_body.appendChild(boton);
        cards.appendChild(footer);
        div_body.appendChild(parrafo);
        div_body.appendChild(boton);
}
createCard(5)
variasTarjetas.forEach(elemento => createCard(elemento));

/*
function dimeCuantasCardsQuieresQueSea(mizin) {
  const filas = document.createElement("div");
  if (typeof mizin === "number") {
    for (var i = 0; i < mizin; i++) {
      const cards = document.getElementById("cards");
     
      const div_card = document.createElement("div");

      div_card.textContent = "Tarjeta de Presentacion";

      const div_body = document.createElement("div");

      const titulo = document.createElement("h5");
      titulo.textContent = "Titulo de la Card";

      const parrafo = document.createElement("p");
      parrafo.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio animi beatae, sint omnis quasi velit ullam recusandae perspiciatis nihil provident magnam saepe deleniti incidunt earum quas eligendi dignissimos minima!";

      const boton = document.createElement("a");
      boton.textContent = "Ver Detalle";
      div_body.setAttribute("class", "card-body");
      titulo.setAttribute("class", "card-title text-center");
      div_card.setAttribute("class", "card-header bg-primary text-white");
      parrafo.setAttribute("class", "card-text p-4");
      boton.setAttribute("class", "btn btn-primary");
      cards.appendChild(div_card);
      cards.appendChild(div_body);
      div_body.appendChild(titulo);
      div_body.appendChild(parrafo);
      div_body.appendChild(boton);
    }
    
  }
  else if(typeof num === "undefined") {

    document.write("No encontrado,Ingrese Tamaño");
  }
}




dimeCuantasCardsQuieresQueSea(1);*/

