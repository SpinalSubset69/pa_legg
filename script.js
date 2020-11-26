const atletas = {
  1: "B",
  2: "C",
  3: "D",
  4: "A",
};

const caballos = {
  mac: {
    edad: "Viejo",
    velocidad: "Rapido",
    tono: "Oscuro",
  },
  smith: {
    edad: "Joven",
    velocidad: "Rapido",
    tono: "Claro",
  },
  jack: {
    edad: "Joven",
    velocidad: "Lento",
    tono: "Oscuro",
  },
  willy: {
    edad: "Joven",
    velocidad: "Rapido",
    tono: "Oscuro",
  },
};

var listaAtletas = document.getElementById("Atletas"); //Elemento ol donde irá el listado de atletas
var listaCaballos = document.getElementById("Caballos"); //Elemento ol donde irá el listado de caballos

//Rellenamos la lista de atletas según su ordn de llegada
for (var i = 1; i < 5; i++) {
  //Creamos un nuevo elemento en cada iteración
  let elemento = document.createElement("li");
  elemento.innerHTML = atletas[i];
  //Se agrega el eleeno "li" en la lista
  listaAtletas.appendChild(elemento);
}

for (var i = 1; i < 5; i++) {
    //Iteramos del 1 al 5
  switch (i) {
    case 1:
      fillHorses("mac");
      break;
    case 2:
      fillHorses("smith");
      break;
    case 3:
      fillHorses("jack");
      break;
    case 3:
      fillHorses("willy");
      break;
  }
}

function fillHorses(horseName) {
  let elemento = document.createElement("li");
  elemento.innerHTML =
    horseName +
    " " +
    caballos[horseName].edad +
    " " +
    caballos[horseName].velocidad +
    " " +
    caballos[horseName].tono;
  listaCaballos.appendChild(elemento);
}
console.log(atletas);
