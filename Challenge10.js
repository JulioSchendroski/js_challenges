function shuffleMusicas(musicasTocadas) { 
    let listaOrdenada = musicasTocadas.sort(function(a, b) { return a > b ? 1 : -1}).reverse();
    let resultado = []
    let max, min
    for(let i = 0; i < musicasTocadas.length; i++){
      if(musicasTocadas.length != 0){
        max = Math.max.apply(Math, listaOrdenada)
        min = Math.min.apply(Math, listaOrdenada)
        if(validaApenasUmaMusica(min, max)){
           resultado.push(max)
           return resultado
         }
        resultado.push(max, min)
        listaOrdenada.pop()
        listaOrdenada.shift()
        validaSobraMusica(resultado, listaOrdenada)
      }
    }
    return resultado
  }
  
  function validaApenasUmaMusica(min, max){
    if(min == max){
      return true
    }
    return false
  }
  
  function validaSobraMusica(resultado,listaOrdenada){
    if(listaOrdenada.length == 1){
      resultado.push(listaOrdenada[0])
      return resultado
    }
  }


  
  