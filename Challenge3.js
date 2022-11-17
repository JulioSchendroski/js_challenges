function calculaNumeroDaSenha(senha) {
    let qtdZero, qtdUm, colunas = []
    let senhaBinaria = ''
    let senhaDecimal = 0
    for(let i = 0; i < 10; i++){
        let aux = ""
        for(let j = 0; j < senha.length; j++){
            aux = aux.concat(senha[j][i])
        }
      colunas.push(aux)
    }
  senhaBinaria = montaArraySenha(colunas)
  senhaDecimal = parseInt(senhaBinaria, 2)
  return senhaDecimal
}

function montaArraySenha(colunas){
  let senha = ''
  for(let i = 0; i < colunas.length; i++){
    let zero = 0;
    let um = 0;
    for(let j = 0; j < 10; j++){
      if(colunas[i][j] == '0'){
        zero += 1;
      }else if(colunas[i][j] == '1'){
        um += 1;
      }
    }
    if(zero > um){
      senha += '0';
    }else if(um > zero){
      senha += '1'
    }else{
      senha += '1'
    }
  }
  return senha
}