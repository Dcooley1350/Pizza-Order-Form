// Business Logic for order

var Order = function (totalPrice,pizzas,method) {
  this.totalPrice = totalPrice;
  this.pizzas = pizzas;
  this.method = method;
};

Order.prototype.compileOrder = function() {
  this.pizzas.push()//write loop for adding pizzas here.
};
Order.prototype.calcTotalPrice = function() {
    this.totalPrice= 
  }

// Business Logic for Pizza

var Pizza = function (price,toppings,size) {
  this.price = price;
  this.toppings = toppings;
  this.size =  size;
}

Pizza.prototype.calcPrice =

//Front End Logic
