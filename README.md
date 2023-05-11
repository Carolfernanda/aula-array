# Aula Array

A Pen created on CodePen.io. Original URL: [https://codepen.io/carolfern/pen/mdzqRRO](https://codepen.io/carolfern/pen/mdzqRRO).
*********************
OS Arrays são estruturas que servem para guardar dados, e organizá-los.

## Métodos Array books :books:

* _unshift_ (adicionar primeiro): Adiciona um ou mais elementos ao início do array: 
```
let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]
```

* _shift_ (remover primeiro): Remove e retorna o primeiro elemento do array:
```
let arr = [1, 2, 3];
let first = arr.shift();
console.log(first); // 1
console.log(arr); // [2, 3]
```

* _pop_ (remover o index): Remove e retorna o último elemento do array:
```
let arr = [1, 2, 3];
let last = arr.pop();
console.log(last); // 3
console.log(arr); // [1, 2]
```

* _toString_(): Retorna uma string com os elementos do array separados por vírgulas:
```
let arr = ['banana', 'maçã', 'laranja'];
let str = arr.toString();
console.log(str); // 'banana,maçã,laranja'
```

* _reverse_(): Inverte a ordem dos elementos do array:
```
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
```

* _splice_(): Remove um ou mais elementos do array em uma posição específica:
```
let arr = ['banana', 'maçã', 'laranja'];
arr.splice(1, 1);
console.log(arr); // ['banana', 'laranja']
```

* _slice_() - Retorna uma parte do array como um novo array:
```
let arr = ['banana', 'maçã', 'laranja'];
let sliced = arr.slice(1, 3);
console.log(sliced); // ['maçã', 'laranja']
```

* _includes_() - Retorna true se o array contém um elemento específico e false caso contrário:
```
let arr = ['banana', 'maçã', 'laranja'];
let isIncluded = arr.includes('maçã');
console.log(isIncluded); // true
```

* _concat_() - Junta dois ou mais arrays em um novo array:
```
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]
```

* _filter_() - Retorna um novo array com todos os elementos que passam em um teste fornecido:
```
let arr = [1, 2, 3, 4, 5];
let filtered = arr.filter(item => item % 2 === 0);
console.log(filtered); // [2, 4]
```

* _push_() - Adiciona um ou mais elementos ao final do array
```
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
```

* _unshift_() - Adiciona um ou mais elementos ao início do array:
```
let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]
```

* _shift_() - Remove e retorna o primeiro elemento do array:
```
let arr = [1, 2, 3];
let first = arr.shift();
console.log(first); // 1
console.log(arr); // [2, 3]
```

* _sort_() - Classifica os elementos do array em ordem alfabética ou numérica:
```
let arr = ['banana', 'maçã', 'laranja'];
arr.sort();
console.log(arr); // ['banana', 'laranja', 'maçã']
```

* _indexOf_() - Retorna o índice do primeiro elemento encontrado no array:
```
let arr = ['banana', 'maçã', 'laranja'];
let index = arr.indexOf('maçã');
console.log(index); // 1
```

* _slice_() - Retorna uma parte do array como um novo array:
```
let arr = ['banana', 'maçã', 'laranja'];
let sliced = arr.slice(1, 3);
console.log(sliced); // ['maçã', 'laranja']
```

* _reverse_() - Inverte a ordem dos elementos do array:
```
let arr = ['banana', 'maçã', 'laranja'];
arr.reverse();
console.log(arr); // ['laranja', 'maçã', 'banana']
```
