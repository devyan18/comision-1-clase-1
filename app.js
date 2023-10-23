const numeros = [1,20,3,4,5,6,7,8,20,10,11,12] // -> puede ser lo que obtenga de la base datos

// for (let i = 0;  i < numeros.length; i++) {
//   if (!(numeros[i] % 2)) {
//     pares.push(numeros[i])
//   }
// }

// Filter
const pares = numeros.filter((num) => !(num % 2))


// for (let i = 0;  i < numeros.length; i++) {
//  doble.push(numeros[i] * 2)
// }

// Map
const doble = numeros.map((num) => num * 2)


// forEach
numeros.forEach((num) => {
  
})

// Find

let elNumero = "20asdasd"

if (!isNaN(+elNumero)) {
  let miNumero = numeros.find((num) => num === +elNumero)
  console.log(miNumero)
}


