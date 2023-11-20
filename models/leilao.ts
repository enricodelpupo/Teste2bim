import Usuario from "./usuario";

class Leilao{
    produto: String;
    preco: DoubleRange;
    datalimite: Date;
    dono: Usuario;
    listaDeLances: String;

    constructor(produto: String, preco: DoubleRange, datalimite: Date, dono: Usuario, listaDeLances: String){
        this.produto = produto;
        this.preco = preco;
        this.datalimite = datalimite;
        this.dono = dono;
        this.listaDeLances = listaDeLances;
    }
}

export default Leilao;