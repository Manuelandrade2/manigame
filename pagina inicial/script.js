'Crinado a magia pror tras de tudo'

const caregamento = () =>{
  const space = document.getElementById('espaço');
  const processamento = document.querySelector('label');
  let incio = 10;
  let rep;
 
  const magia = () =>{
      processamento.textContent = 'Loading...';
      let elemento = document.createElement('div');
      elemento.setAttribute('id', 'cor');
      space.appendChild(elemento);
      let ponto = 1;
      console.log(elemento.style.width+' Aqui oo');

  const loop = () =>{
         elemento.style.width = `${incio + ponto}px`;
         ponto++;
      if(ponto >= 215){
         elemento.style.backgroundColor = 'rgb(4, 200, 4)';
         processamento.textContent = 'Finisher!';
         clearInterval(rep);
  
         const atraso =()=>{
           window.location.href = 'file:///C:/Users/DELL/Downloads/manilson/informatica/Estudos%20Fortes/Jogo%20de%20perguntas/jogo.html';
         }
         atraso(); 

       }   
      }
       rep = setInterval(loop, 10);
     } 
  
  document.getElementById('play').addEventListener('click', magia);

}