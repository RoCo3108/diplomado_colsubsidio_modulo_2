const lista = document.getElementById("lista");
console.log(lista);

const arrayElement = ["Primer Elemento", "Segundo Elemento", "Tercer Elemento"];
arrayElement.forEach((item) => {
  console.log(item);
  const li = document.createElement("li");
  li.textContent = item;

  lista.appendChild(li);
});
