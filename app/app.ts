import { NegociacaoController } from "./controllers/nogociacao-controller.js";
import { NegociacaoViews } from './views/negociacao-views.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona()
});



