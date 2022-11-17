import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

class Challenge2 {
    public static List<Integer> retornaMenorEMaiorValorDeVendas(List<List<Integer>> tickets) {
      List<Integer> vendas = new ArrayList<Integer>();
      List<Integer> menorMaior = new ArrayList<Integer>();

      for(int i = 0; i < tickets.size(); i++){
          vendas.addAll(tickets.get(i));
          ValidarLista(vendas, i);
        }
        menorMaior.add(Collections.min(vendas));
        menorMaior.add(Collections.max(vendas));
      

      return menorMaior;
  }
  
    public static void ValidarLista(List<Integer> lista, int i){
        if(lista.contains(0)){
            lista.removeAll(Collections.singleton(0));
        }
        lista.removeIf(value -> value < 20);
        lista.removeIf(value -> value > 500);
    }
}



