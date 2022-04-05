import { Negotiations } from '../models/negotiations.js';
import { Negotiation } from '../models/negotiaton.js';
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.inputDate = document.querySelector('#date');
        this.inputAmount = document.querySelector('#amount');
        this.inputPrice = document.querySelector('#price');
    }
    add() {
        const negotiation = this.createNegotiation();
        this.negotiations.add(negotiation);
        console.log(this.negotiations.showList());
        this.cleanForm();
    }
    createNegotiation() {
        const regex = /-/g;
        const date = new Date(this.inputDate.value.replace(regex, ','));
        const amount = parseInt(this.inputAmount.value);
        const price = parseFloat(this.inputPrice.value);
        return new Negotiation(date, amount, price);
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputPrice.value = '';
        this.inputDate.focus();
    }
}
