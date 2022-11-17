function checaNumeroEscondido(numero,numeroOculto) {
    if(numero.toString().includes(numeroOculto)){
      return numero.toString().includes(numeroOculto)
    }else if (!numero.toString().includes(numeroOculto)){
      return numero.toString().split('').reverse().join('').includes(numeroOculto)
    }
}



