// **Iteración #2: async-await**

// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando
// async-await.


const runTimeOut2 = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })
    promise.then(() => {console.log('Time out!')})

    };

runTimeOut2();


// -------------

function runTimeOut(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    
    console.log('time star')
    
    await runTimeOut(2000); 
    console.log('Time out 2!');
}

demo();



// 2.2 Convierte la siguiente función con un fetch utilizando async-await.
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;


function getCharacters () {
fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}

getCharacters();


// --- solucion 

const getCharacters2 = async () => {
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const resultToJson = await result.json();
    return resultToJson;
}