
const calcular=document.getElementById('calcular');




function imc(){
  const nome=document.getElementById('nome').value;
  const altura=document.getElementById('altura').value;
  const peso=document.getElementById('peso').value;
  const resultado=document.getElementById('resultado');

  if (nome  !==''&& altura !== ''  && peso !== ''){

    const valorIMC=(peso/(altura*altura)).toFixed (1);
     
    let classifacao='';

    if (valorIMC < 18,5){
        classifacao=' abaixo do peso';
    } else if (valorIMC < 25) {
        classifacao='com peso ideal.parabens!!!';
    } else if (valorIMC < 30){
            classifacao='levemente acima do peso.';
        
    }else if (valorIMC <35){
        classifacao='com obesidade grau 1.';
    }else if( valorIMC <40){
        classifacao='com obesidade grau 2.';
    }else{
        classifacao='obesidade grau 3. cuidado !!';
    }


     resultado.textContent=`${nome} seu IMC é ${valorIMC} e voce esta ${classifacao} `;

  }else{
     resultado.textContent='preencha todos os campos!!!'
  }

}


calcular.addEventListener('click', imc);

