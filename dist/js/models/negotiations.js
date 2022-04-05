export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    showList() {
        return this.negotiations;
    }
}
