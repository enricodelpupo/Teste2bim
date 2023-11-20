import Usuario from "./usuario";
import Leilao from "./leilao";

class Lance{
    comprador: Usuario;
    leilao: Leilao;
    valor: DoubleRange;

    constructor(comprador: Usuario, leilao: Leilao, valor: DoubleRange){
        this.comprador = comprador;
        this.leilao = leilao;
        this.valor = valor;
    }

}