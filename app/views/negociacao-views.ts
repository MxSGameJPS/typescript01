import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacaoViews extends View<Negociacoes> {  
  protected template(model: Negociacoes): string {
    return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody>
                    ${model
                      .lista()
                      .map((negociacao) => {
                        return `
                        <tr>
                            <td>
                                ${this.formatar(negociacao.data)}                             
                            </td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                        `;
                      })
                      .join("")}
                </tbody>
            </table>
        `;
  }

  protected formatar(data: Date) {
    return new Intl.DateTimeFormat().format(data);
  }
}


   // ${negociacao.data.getDate()}
   // /${negociacao.data.getMonth() + 1}
  // /${negociacao.data.getFullYear()}
