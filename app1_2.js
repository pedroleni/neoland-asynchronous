2/*.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
fetch() para hacer una consulta a la api cuando se haga click en el botón,
pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io';*/

const URLsingle = 'https://api.nationalize.io'; 
const myInput = document.querySelector('#searchbar');
const container = document.querySelector("#container");
const body =  document.querySelector ("body")

const getData = ()=>{
    const URLsingle = 'https://api.nationalize.io'; 
    let valor = document.getElementById('searchbar').value
    let URL =  URLsingle + "?name="+ valor;
    return URL

}

//De manera global tengo una lista donde almacenar las peliculas fuera de cualquier función
let List;

const getCountries= async () => {
  let URL = getData();
  const rawCountries = await fetch(URL);
  const jsonMovies = await rawCountries.json();
  const countries = jsonMovies.country;
  mapCountries(countries);
};

const mapCountries =  (countries) => {
  const mappedCountries =  countries.map((countrie) => ({
    country_id: countrie.country_id,
    probability: countrie.probability,

  }));
  //Almaceno la info mapeada en mi array local de arriba
  List =  mappedCountries;
  generateHTML(List);
};

const generateHTML = (mappedList) => {
//Cada vez que lo genero limpio el contenedor
    container.innerHTML = "";
    let valor = document.getElementById('searchbar').value
    paintNombre(valor)

/*2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.*/
    estructura(mappedList)
  }

const estructura =(mappedList)=>{
    let lista = document.createElement ("ul")
    for (item of mappedList){
        let div = document.createElement ("div")
        let h = document.createElement ("p")

        let probabilidad = (item.probability*100).toFixed(2)
        h.innerHTML += item.country_id+" con el porcentaje de probabilidad "+probabilidad+" %"

        div.appendChild(h);

        let li = document.createElement ("li")
        lista.appendChild(li)
        li.appendChild(div);

        let button = document.createElement ("button")
        button.innerHTML ="boton para borrar pais"
        body.appendChild(button)
        div.appendChild(button)
    
        evento(button, lista, li)
}

container.appendChild(lista)

}

const evento =(boton, lista, li)=>{
    boton.addEventListener("click", ()=>{
        lista.removeChild(li)})

}

const paintNombre = (valor) => {
  container.innerHTML += "El nombre "+valor+ " puede ser del pais: "
}


getCountries()