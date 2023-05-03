// criando array

const frutas = ["maçã", "caju", "acerola", "laranja", "banana"]

console.log(frutas.length)

// acessando itens

frutas.forEach(function(item, indice, array){
console.log(array)    
}) 

// Acessar item

const primeiro = frutas[0]
console.log(primeiro)

const ultimo = frutas [frutas.length - 1];
console.log(ultimo)

// Inserindo elementos

const adicionar = frutas.push("mamão");
console.log(frutas)

frutas.splice(1, 0, "morango")
frutas.splice(3,2, "melancia")
console.log(frutas)

//

const fim = frutas.pop()
console.log(frutas)
              

                    
                    