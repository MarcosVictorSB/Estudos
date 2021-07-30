class Negocicacoes {
    constructor() {
        this._negociacao = [];
    }
    adiciona(negociacao) {
        this._negociacao.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacao);
    }
}
