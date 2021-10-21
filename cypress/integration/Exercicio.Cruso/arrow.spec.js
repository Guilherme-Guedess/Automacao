const { it } = require("mocha")

it('nada agora', function(){ })

//function soma (a, b) {   "retorna 5"
  //  return a + b;
//}

//const soma = function (a, b){   "retorna 5"
  //  return a + b 
//}

//const soma = (a, b) => {   "retorna 5"
  //  return a + b
//}

// "=>" o arrow é uma nova formar de usar o metodo "function"
// "const" é uma maneira de criar uma varialvel fixa que não vai ser mudada

//const soma = (a, b) => a + b "retorna 5"

// const soma = (a) => a + a "retorna 2"

//const soma = a => a + a

const soma = () => 5 + 5

console.log(soma (1,4))

it('a function test...', function() {
    console.log('function', soma)
})