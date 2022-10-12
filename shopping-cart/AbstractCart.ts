interface goods {
    getName(): string;
    getPrice(): number;
    getNum(): number;
    increaseNum(): void;
    decreaseNUm(): void;
}
class AbstractCart {
    goodsList: goods[];
    constructor() {
        this.goodsList = [];
    };
    add(goods: goods): void {
        console.log(`添加一个商品: ${goods.getName()}, 数量: ${goods.getNum()}, 单价: ${goods.getPrice()}`)

        this.goodsList = this.goodsList.concat(goods);
        this.goodsList = [...new Set(this.goodsList)];
    }
    remove(goods: goods): void {
        console.log(`移除一个商品: ${goods.getName()}`)
        this.goodsList = this.goodsList.filter((g => g !== goods));
    }
    getTotalCost(): number {
        const totalCost = this.goodsList
            .map((goods => goods.getNum() * goods.getPrice()))
            .reduce((total, num) => total + num);
        console.log(`购物车总计${totalCost}元`);
        return totalCost;
    }
}

class Orange implements goods {
    name: string
    num: number
    price: number
    constructor(name: string, price: number) {
        this.name = name
        this.num = 1;
        this.price = price;
    }
    getName(): string {
        return this.name;
    }
    getPrice(): number {
        return this.price;
    }
    getNum(): number {
        return this.num;
    }
    increaseNum(): void {
        this.num++;
    }
    decreaseNUm(): void {
        this.num--;
    }
}

let cart = new AbstractCart();
let orange1: goods = new Orange("沙糖桔", 20);
let orange2: goods = new Orange("菊", 10);
let orange3: goods = new Orange("我也不知道什么橘", 5);
cart.add(orange1);
cart.add(orange2);
cart.add(orange3);
cart.getTotalCost();
cart.remove(orange1)
cart.getTotalCost();