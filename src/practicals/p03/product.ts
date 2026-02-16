export class Product {
    readonly name: string = 'Unknown';
    protected price: number = 0;

    constructor(x: string , y: number) {
        this.name = x;
        this.price = y;
    }
    
    setPrice(z: number) {
        this.price = z;
    }

    getPrice() {
        return this.price;
    }
}

