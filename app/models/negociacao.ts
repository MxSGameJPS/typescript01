//as partes comentadas são aprendizado de como usar outras formas de escrita de código

export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number) {
        // this._data = data;
        // this._quantidade = quantidade;
        // this._valor = valor;
    }

    get data():Date {
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

    get volume():number {
        return this.quantidade * this.valor;
    }
}