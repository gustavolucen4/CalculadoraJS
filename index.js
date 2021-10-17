function resposta(num) {

   let numero = document.querySelector('#telaMain').innerHTML
   let resposta = document.querySelector('#telaDireita').innerHTML

   verifica(resposta)

   if(numero.length <= 20){

      numero = numero.replace('/0', 'Erro, divisão por 0')
      if(numero == 'Erro, divisão por 0')
         num = numero

      document.querySelector('#telaEsquerda').innerHTML += num 
      document.querySelector('#telaMain').innerHTML += num
   }else {
      
      document.querySelector('#telaMain').innerHTML = 'numero limite digitad'
      document.querySelector('#telaEsquerda').innerHTML = numero

      setTimeout(() => {
         document.querySelector('#telaMain').innerHTML = numero
      }, 2000);
   } 

}

function calcular(argument){

   const resultado = document.querySelector('#telaMain').innerHTML
   if(resultado){
      document.querySelector('#telaMain').innerHTML = eval(resultado)
      document.querySelector('#telaDireita').innerHTML = `${argument}${eval(resultado)}`
   }else{
      document.querySelector('#telaMain').innerHTML = ' '
   }
}


function limpar(){

   document.querySelector('#telaEsquerda').innerHTML = ' '
   document.querySelector('#telaDireita').innerHTML = ' '
   document.querySelector('#telaMain').innerHTML = ' '
}

function verifica(argument){

   if(argument.length > 1){

      let resp = argument.replace('=', ' ')
      document.querySelector('#telaDireita').innerHTML = ' '
      document.querySelector('#telaEsquerda').innerHTML = resp
   }else{
      return
   }
}
