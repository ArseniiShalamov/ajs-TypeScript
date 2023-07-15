import Purchase from "./Purchase";

export default class Busket {
    private _items: Purchase[] = [];

    add(item: Purchase) {
        this._items.push(item);
    }

    get items() : Purchase[] {
        return [...this._items];
    }

    totalCost() : number {
        let cost = 0;

        for (let item of this.items) {
            cost += item.price;
        }
        return cost;
    }

    discountPrice(discount : number) : number {
        let cost = this.totalCost();
        let costDiscount = cost - ((cost * discount) / 100);
        return costDiscount;
    }

    deleteItem(id : number) : void {
        const deleteIndex = this._items.findIndex(item => item.id === id);
        if (deleteIndex !== -1) {
            this._items.splice(deleteIndex, 1);
        }
    }
}