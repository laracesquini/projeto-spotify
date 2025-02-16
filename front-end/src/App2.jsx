//Arrow Function
//rafce -> monta tudo isso aqui embaixo
import React from 'react'

const App2 = () => {
  return (
    <div>App2</div>
  )
}

export default App2

// const App2 = () => <h1>Olá mundo!</h1>; Se tiver só uma instrução na arrow function, posso retornar só ela sem return ou {}

// const App2 = () => {
//   return <h1>Olá mundo!</h1>;

// };

//Nomeação de componentes -> PascalCase - palavras juntas e com letra maiúscula (todas, até a primeira)

//export default posso importar com qualquer nome e sem chaves
//export "sem default" - só posso importar entre chaves e com o nome exportado

//Self closing tag
// <Header></Header> OU <Header/> (abre e fecha)

// Nomeação de variável, função...
// import logoSpotify  - camelCase (primeira letra da primeira palavra minúscrula)

// Nomeação de classes em CSS
// Metodologia BEM
//Blocks, Elements, Modifiers
//Link -> é um elemento de um bloco. Nomeia: bloco__elemento--modificador

//Tag vazia em react se chama fragmento
// No react só posso devolver um elemento, uso a tag vazia e coloco tudo dentro dela
//Nomes compostos são separados por -

// Componentes recebem props - como se fosse um parametro

//Componentes são exportados no final do arquivo por padrão

//Spread operator ...
//Cria uma cópia de um array ou de um objeto

//kebab-case - separado por traçoes e minúsculo

//Quando componentes se re-renderizam
//uma das ocasiões é quando uma variável de estado usada por esse componente é atualizada

//Hook - useState