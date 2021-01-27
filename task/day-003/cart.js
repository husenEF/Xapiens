const Log = require("./Log");
const myLog = new Log();
class Cart {
  items = [];

  constructor() {
    this.total = 0;
    this.totalPrice = 0;
    this.items = [];
  }

  addItem(name, price, qty) {
    this.items.push({ name, price, qty, total: price * qty });
    console.log(`Success add item ${name} (${qty})`);
    return this;
  }

  removeItem(pos) {
    this.items = this.items.filter((e, i) => i !== pos);
    console.log(`succes remove item ${pos}`);
    return this;
  }
  getListItem() {
    // return this.items;
    console.log("total items:", this.items);
    return this;
  }

  getTotalPrice() {
    console.log("===total===");
    this.getListItem();
    const total = this.items.reduce((a, b) => a + b.total, 0);
    console.log("Total Price: " + total);
    return total;
  }
}

// const myCart = new Cart();
// myCart.addItem("sabun", 2500, 3).addItem("pasta", 3500, 2).getListItem();
// myCart.removeItem().getListItem();
// myCart.addItem("sampo", 7500, 1);
// myCart.getTotalPrice();
myLog.setalert("hh")
console.log(myLog.getAllMessage());
