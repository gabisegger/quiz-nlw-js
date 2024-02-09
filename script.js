const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    resposta: [
      "var myVar;",
      "variable myVar;",
      "myVar = var;",
    ],
    correta: 0
  },
  {
    pergunta: "O que é um operador ternário em JavaScript?",
    resposta: [
      "Um operador que trabalha com três variáveis",
      "Um operador que retorna um valor baseado em uma condição",
      "Um operador que só pode ser utilizado em operações matemáticas",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do método 'querySelector'?",
    resposta: [
      "Selecionar um elemento HTML pelo seu nome de classe",
      "Selecionar um elemento HTML pelo seu ID",
      "Selecionar um elemento HTML pelo seletor CSS",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a finalidade do método 'toFixed' em JavaScript?",
    resposta: [
      "Arredondar um número para o inteiro mais próximo",
      "Limitar o número de casas decimais de um número de ponto flutuante",
      "Converter um número para uma string",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a finalidade do método 'push' em um array em JavaScript?",
    resposta: [
      "Remover o último elemento do array",
      "Adicionar um novo elemento ao início do array",
      "Adicionar um novo elemento ao final do array",
    ],
    correta: 2
  },
  {
    pergunta: "O que é uma função de callback em JavaScript?",
    resposta: [
      "Uma função que é chamada automaticamente quando é declarada",
      "Uma função que é passada como argumento para outra função e é executada posteriormente",
      "Uma função que não pode ser chamada em JavaScript",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a diferença entre 'let' e 'var' em JavaScript?",
    resposta: [
      "'let' tem escopo de bloco, enquanto 'var' tem escopo de função",
      "'var' tem escopo de bloco, enquanto 'let' tem escopo de função",
      "'let' e 'var' são equivalentes e podem ser usados de forma intercambiável",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o propósito do método 'addEventListener' em JavaScript?",
    resposta: [
      "Remover um evento de um elemento HTML",
      "Adicionar um evento a um elemento HTML",
      "Alterar o conteúdo de um elemento HTML",
    ],
    correta: 1
  },
  {
    pergunta: "O que é uma função anônima em JavaScript?",
    resposta: [
      "Uma função sem nome atribuído",
      "Uma função que é executada apenas uma vez",
      "Uma função que não pode ser chamada diretamente",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maneira correta de escrever um comentário de linha única em JavaScript?",
    resposta: [
      "// Este é um comentário de linha única",
      "<!-- Este é um comentário de linha única -->",
      "/* Este é um comentário de linha única */",
    ],
    correta: 0
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template');

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.resposta){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.resposta.indexOf(resposta)
    
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
      
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}