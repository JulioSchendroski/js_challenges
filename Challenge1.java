import java.util.List;
class Challenge1 {
    public static Integer ultimaParada(Integer combustivel,Integer consumo,List<Integer> postosDeGasolina) {
        int limite = combustivel * consumo;
        int indexPosto = 0;
        int aux = 0;
        int diff = 0;

        for(int i = 0; i < postosDeGasolina.size(); i++){
            aux = diff;
            diff = limite - postosDeGasolina.get(i); 
            if(postosDeGasolina.size() == 1){
                indexPosto = postosDeGasolina.get(i);
            }else if(diff < aux && diff > 0){
                indexPosto = postosDeGasolina.get(i);
            }
            if(postosDeGasolina.get(0) > limite){
                return -1;
            }
        }
        return indexPosto;
    }
}



