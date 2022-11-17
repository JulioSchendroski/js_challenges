function menorStringMaior(name) {
    let resultado = name.split('')
    let maiorString = []
    let maiorStringOrdenada = []
    let maiorMenorString = []
    let aux
    
    if(name == ''){
      return "sem resposta"
    }
  
    for(let i = resultado.length -1; i >= 0; i--){
      if(resultado[i] > resultado[i-1]){
        aux = resultado[i]
        resultado[i] = resultado[i-1]
        resultado[i-1] = aux
        break
      }
      
    }
    maiorString = resultado
    
    for(let i = maiorString.length-1; i >= 0; i--){
      if(maiorString[i] < maiorString[i-1]){
        maiorStringOrdenada.push(maiorString.pop())
      }else if (maiorString[i] == maiorString[i-1] || maiorString[i] > maiorString[i-1]){
        break
      }
    }
    maiorString = maiorString.concat(maiorStringOrdenada)
    maiorMenorString = maiorString.join('')
    if(maiorMenorString == name){
      maiorMenorString = 'sem resposta'
    }
    return maiorMenorString
  }


  
  