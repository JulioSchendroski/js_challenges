function calculaTotalLeds(altura,largura) {
    let matrizPainel = [];
    let qtdLeds = 0;
    if (altura == '0' || largura == '0'){
        return 0;
    }else{
        for(let i = 0; i <= largura; i++){
        for(let j = 0; j <= altura; j++){
            matrizPainel.push(1)
        }
        }
    }
    qtdLeds = matrizPainel.length
    return qtdLeds;
}


  
  