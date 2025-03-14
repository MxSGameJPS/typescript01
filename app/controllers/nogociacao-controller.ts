import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoViews } from "../views/negociacao-views.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacaoViews("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacoesView.update( this.negociacoes );
  }

  public adiciona():void {
    const negocicao = this.criaNegociacao();
    if (negocicao.data.getDay() > 0 && negocicao.data.getDay() < 6) { 
    this.negociacoes.adiciona(negocicao);    
    this.limpaFormulario();
    this.atualizaView();
    } else {
      this.mensagemView.update("Negociação deve ser feita em dias úteis");
    }
  }


  private criaNegociacao():Negociacao {
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ","));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }

  private limpaFormulario():void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private atualizaView():void {
    this.negociacoesView.update( this.negociacoes );
    this.mensagemView.update("Negociação adicionada com sucesso!");
  }
}
