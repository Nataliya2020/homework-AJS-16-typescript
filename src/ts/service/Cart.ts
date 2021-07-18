import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  totalCostWithoutDiscount(): number {
   return  this._items.reduce((acc, item) => acc + item.price, 0);
  }

  totalDiscountedPrice(discount: number): number {
      return  this.totalCostWithoutDiscount() - discount;
  }

  delete(id: number): Buyable[] {
    const objectToDeletethis = this._items.findIndex(item => item.id === id);
     this._items.splice(objectToDeletethis, 1);
    return this._items;
  }
}


