//as partes comentadas são aprendizado de como usar outras formas de escrita de código
export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
        // this._data = data;
        // this._quantidade = quantidade;
        // this._valor = valor;
    }
    get data() {
        const date = new Date(this._data.getTime());
        return date;
        // return this._data;
    }
    // get quantidade():number {
    //     return this._quantidade;
    // }
    // get valor():number {
    //     return this._valor;
    // }
    get volume() {
        return this.quantidade * this.valor;
    }
}
