
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




dimeCuantasCardsQuieresQueSea(2);
