const jogo = () =>{

   let primeira_tela = document.getElementById('primeira-tela');
   let segunda_tela = document.getElementById('segunda-tela');


   console.log('Opá chegou bem mano!!');
   const tela = document.getElementById('tela');
   const buttons = document.querySelectorAll('[id*=bt]');
  
   let alista = 0;
   let pergunta;
   let aserto;
   let img;
   let tempo = 0;

   let pontos = document.getElementById('pontos');
   let eks = document.getElementById('eks');

   const listaDePerguntas = ['javaScript é uma linguagem:', 'O que são normas:', 'Quantos dias tem um ano:', 'O que é concatenação'];

  const dicionario = [
  [ 
    ['Interpretada'],
    ['Compilada'],
    ['Executada'],
    ['Incompletada'],
  ],
  [
    ['Parametros'],
    ['Regras'],
    ['Matrerice'],
    ['Ingenuidade'],
  ],
    [ 
    ['465 dias'],
    ['165 dias'],
    ['365 dias'],
    ['264 dias'],
  ],
  [
    ['Separação de elementos'],
    ['Diminução de elementos'],
    ['repartição de elementos'],
    ['Junção de elementos'],
  ],

  // [
  //   ['Luta'],
  //   ['Musica'],
  //   ['Acrobacias'],
  //   ['Pesca'],
  // ],

  ]

// temp = temp + 1  discodificando [7] = 1 + 1

  const potuacao = (dica) =>{
     if(dica == 'sim_pode_acreixentar'){
       tempo++;
       console.log(tempo+' tempo');
     }else if(dica == 'não_decrementa_já'){
       tempo--;
       console.log(tempo+' tempo');
     }
     if(tempo >= 0){
        pontos.textContent = tempo;
        pontos.style.fontSize = '3em';  
     }
      if(tempo >= 4){
        pontos.textContent = 'You win';
        pontos.style.fontSize = '1.5em';
        tempo = 0;
     }
     else if(tempo <= -1){
        pontos.textContent = 'Game over';
        pontos.style.fontSize = '1.5em';
        tempo = 0;
     }
  } 

  const configurar = () =>{
     primeira_tela.style.filter = 'blur(5px)';
     segunda_tela.style.display = 'block';
  }

  const bloqueio = (dica) =>{
      configurar();
      potuacao(dica);
      setTimeout(()=>{
         elementoSerto();
      }, 2000);
  }

  const serto = () =>{
    tela.textContent = '';
    let item = document.createElement('img');
    item.src = `img1/checkbox.png`;
    tela.textContent += 'Serto'
    item.setAttribute('id', 'green');
    tela.appendChild(item);
    setTimeout(()=>{
       bloqueio('sim_pode_acreixentar');
    }, 2000);
  }

  const errado = () =>{
    tela.textContent = '';
    let item = document.createElement('img');
    item.src = `img1/cancel.png`;
    tela.textContent += 'Errado'
    item.setAttribute('id', 'red');
    tela.appendChild(item);
    setTimeout(()=>{
       bloqueio('não_decrementa_já');
    }, 2000);
  }

   const resposta = (resp) =>{
            aserto = resp.target.id;
            console.log(`O aserto ${aserto} e o bt_${alista}`);
        if(aserto == `bt_${alista}`){
            console.log('serto');
            serto(); 
        }else if(aserto != `bt_${alista}`){
            console.log('Errado');
            errado();
        }

     }

  const display = (atb) =>{
     pergunta = listaDePerguntas[atb];
     tela.textContent = pergunta;
     buttons.forEach((ele, adn) =>{
      ele.textContent = dicionario[atb][adn];
       ele.addEventListener('click', resposta);
    } );
  } 

  const verificasao = () =>{
    if(alista >= dicionario.length){
      alista = 0;
    }
  }

  const permissão = () =>{
      segunda_tela.style.display = 'none';
      primeira_tela.style.filter = 'none';
  }

  const elementoSerto = () =>{
      permissão();
      alista = alista + 1;
      verificasao();
      display(alista);
  } 

      elementoSerto();
  
  const fimDeJogo = () =>{
    window.location.href = 'file:///C:/Users/DELL/Downloads/manilson/informatica/Estudos%20Fortes/Jogo%20de%20perguntas/pagina%20inicial/index.html'
    window.location.href = 'pagina inicial/index.html'
  }    

  document.getElementById('red').addEventListener('click', fimDeJogo);
  document.getElementById('green').addEventListener('click', elementoSerto);
}
