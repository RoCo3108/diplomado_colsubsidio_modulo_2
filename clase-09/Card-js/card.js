const cards = document.getElementById('card')

const div_card = document.createElement("div");
div_card.textContent = "Featured"

const div_body = document.createElement("div");

const titulo = document.createElement("h5");
titulo.textContent = "Titulo de la Card"

const parrafo = document.createElement("p");
parrafo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio animi beatae, sint omnis quasi velit ullam recusandae perspiciatis nihil provident magnam saepe deleniti incidunt earum quas eligendi dignissimos minima!"

const boton = document.createElement("a");
boton.textContent = "Go somewhere"

boton.setAttribute('class',"href='#'")
div_card.setAttribute('class', 'card-header bg-primary text-white')
titulo.setAttribute('class', 'card-title')
parrafo.setAttribute('class', 'card-text')
cards.appendChild(div_body)
cards.appendChild(div_card)
cards.appendChild(titulo)
cards.appendChild(parrafo)
cards.appendChild(boton)



