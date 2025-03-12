export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista() : ReadonlyArray<Negociacao> {
    //     return this.negociacoes;
    // }
    lista() {
        return this.negociacoes;
    }
}
