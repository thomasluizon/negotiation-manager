import { Negotiations } from '../models/negotiations.js';
import { Negotiation } from '../models/negotiaton.js';

export class NegotiationController {
   private inputDate: HTMLInputElement;
   private inputAmount: HTMLInputElement;
   private inputPrice: HTMLInputElement;
   private negotiations = new Negotiations();

   constructor() {
      this.inputDate = document.querySelector('#date');
      this.inputAmount = document.querySelector('#amount');
      this.inputPrice = document.querySelector('#price');
   }

   add(): void {
      const negotiation = this.createNegotiation();
      this.negotiations.add(negotiation);
      console.log(this.negotiations.showList());
      this.cleanForm();
   }

   createNegotiation(): Negotiation {
      const regex = /-/g;

      const date = new Date(this.inputDate.value.replace(regex, ','));
      const amount = parseInt(this.inputAmount.value);
      const price = parseFloat(this.inputPrice.value);

      return new Negotiation(date, amount, price);
   }

   cleanForm(): void {
      this.inputDate.value = '';
      this.inputAmount.value = '';
      this.inputPrice.value = '';
      this.inputDate.focus();
   }
}
