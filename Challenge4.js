function calculaTopOcorrenciasDeQueries(texto,queries,k) {
  let listaQtd = []
  for(let i = 0; i < queries.length; i++){
    listaQtd.push({'termo' : queries[i], 'qtd' : texto.split(queries[i]).length - 1})
  } 
  
    listaQtd.sort((a, b) => {
      if (a.qtd < b.qtd) {
          return 1;
      }else if(a.qtd > b.qtd){
          return -1;
      }
    });
  
  let listaOrdenada = listaQtd.map((cdItem) => {
      return cdItem['termo'];
  });
  return listaOrdenada.slice(0, k);
}



