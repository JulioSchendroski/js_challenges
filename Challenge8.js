function escolheTaxi(tf1,vqr1,tf2,vqr2) {
    let resultado = ''
    let dist = (-1 * ((tf1 - tf2) / (vqr1 - vqr2))).toPrecision(3)
    
    if(tf1 < tf2 && vqr1 < vqr2){
      resultado = 'Empresa 1'
    }else if(tf1 > tf2 && vqr1 > vqr2){
      resultado = 'Empresa 2'
    }else if ((tf1 && vqr1 == '1') && (tf2 && vqr2 == '1')){
      resultado = 'Tanto faz'
    }else{
        resultado = "Empresa 1 quando a distância < " + dist + ", Tanto faz quando a distância = " + dist + ", Empresa 2 quando a distância > " + dist + ""
    }
    return resultado
  }


  
  