/*1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un
console.log(). Para ello, es necesario que crees un .html y un .js.*/

const URL = 'https://api.agify.io?name=michael';

const getMovies = async () => {
  const person = await fetch(URL);
  const jsonPerson = await person.json();
  const personas = jsonPerson;

  console.log(personas)


};   

getMovies();
    


