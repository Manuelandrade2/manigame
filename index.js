let tempo;
let numero = 0;
let segundo_ponto = 0;
let lista = ['Porta 001', 'Porta 002', 'Porta 003', 'Porta 004', 'Porta 005'];

const outroPonto = (textContent) =>{
   segundo_ponto = segundo_ponto + 1;
   console.log(`Sim estou a ver ${textContent}`);
   if(lista[segundo_ponto] == textContent){
      console.log(`Sim são semelhantes ${lista[segundo_ponto]} e ${textContent}`);
   }else{ 
      console.log(`Merda não são semelhantes ${segundo_ponto} e ${textContent}`); 
   }
}

const ver = (informacao) =>{
  console.log(informacao);
  console.log(lista[informacao]);
  outroPonto(lista[informacao]);
}

const sentir = () =>{
  numero = numero + 1;
  if(numero >= 5){
     clearInterval(tempo);
  }
  ver(numero);
}

tempo = setInterval(()=>{
  sentir(); 
}, 2000);

