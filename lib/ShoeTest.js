


class Shoes  {
    constructor(color, size, brand, price) {
        this.color = color;
        this.size = size;
        this.brand = brand;
        this.price = price;
    }

    // methods
    onSale() {
        this.price = this.price / 2;
    }
}

const myShoes = new Shoes("blue", 9, "Nike", 100);
const myShoes2 = new Shoes("red", 10, "Addidas", 90);

console.log(myShoes)

myShoes.onSale();

console.log(myShoes)
