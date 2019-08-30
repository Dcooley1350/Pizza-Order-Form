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
  };

// Business Logic for Pizza

var Pizza = function (price,toppings,size) {
  this.price = price;
  this.toppings = toppings;
  this.size =  size;
};

Pizza.prototype.calcPrice = function() {
  if (this.size = "Bagel Bite") {
  return(10 + (this.toppings.length * .5))
  }
  else if (this.size = "Small") {
    return(15 + (this.toppings.length * .75))
  }
  else if (this.size = "Medium") {
    return(20 + (this.toppings.length *  1))
  }
  else if (this.size = "large") {
    return(25 + (this.toppings.length * 1.5))
  }
  else if (this.size = "'Murica") {
    return(30 + (this.toppings.length * 2))
  }
};

//Front End Logic
