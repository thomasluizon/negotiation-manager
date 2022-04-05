import { Negotiation } from './negotiaton';

export class Negotiations {
   private negotiations: Array<Negotiation> = [];

   add(negotiation: Negotiation) {
      this.negotiations.push(negotiation);
   }

   showList(): Array<Negotiation> {
      return this.negotiations;
   }
}
