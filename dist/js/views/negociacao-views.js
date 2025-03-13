export class NegociacaoViews {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
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
                                ${new Intl.DateTimeFormat().format(negociacao.data)}                             
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
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
// ${negociacao.data.getDate()}
// /${negociacao.data.getMonth() + 1}
// /${negociacao.data.getFullYear()}
