function calculaPorcentagemSorteio(assinante,minutosAssistidos) {
    let horasIndividuais = []
    let horasTotais = 0
    let probabilidades = []
    for(let i = 0; i < assinante.length; i++ ){
      if(assinante[i] == true){
         horasIndividuais.push(Math.ceil((minutosAssistidos[i]/60))*2)
      }else{
        horasIndividuais.push(Math.ceil(minutosAssistidos[i]/60))
      }
    }
    horasTotais = horasIndividuais.reduce((a, b) => a + b, 0)
    
    for(let j = 0; j < horasIndividuais.length; j++){
       probabilidades.push(Math.round((horasIndividuais[j] / horasTotais) * 100))
    }
    return probabilidades
}


  
  