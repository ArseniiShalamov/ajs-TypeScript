import Purchase from "./Purchase";

export default class Busket {
    private _items: Purchase[] = [];

    add(item: Purchase) {
        this._items.push(item);
    }

    get items() : Purchase[] {
        return [...this._items];
    }

    totalCost(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }      

    discountPrice(discount : number) : number {
        let cost = this.totalCost();
        let costDiscount = cost - ((cost * discount) / 100);
        return costDiscount;
    }

    deleteItem(id : number) : void {
        this._items = this._items.filter((item: Purchase) => item.id !== id);
    }
}