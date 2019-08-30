// Business Logic for order

var Order = function (totalPrice,pizzas,method) {
  this.totalPrice = totalPrice;
  this.pizzas = pizzas;
  this.method = method;
};


Order.prototype.calcTotalPrice = function() {
  this.totalPrice = this.pizzas.foreach(function(total){
    this.pizzas.price += total;
    return(total);
  });
  if (this.method = "Delivery") {
    this.totalPrice + 5
  };
  else {
    this.totalPrice + 1
  };
};

Order.prototype.addPizza = function () {
  this.pizzas.push(newPizza);
};

Order.prototype.addMethod = function(
  this.method.push(deliveryMethod);
};

// Business Logic for Pizza

var Pizza = function (price,toppings,size) {
  this.price = price;
  this.toppings = toppings;
  this.size =  size;

};

Pizza.prototype.calcPrice = function() {
  if (this.size = "Bagel Bite") {
  return(10 + (this.toppings.length * .5));
  }
  else if (this.size = "Small") {
    return(15 + (this.toppings.length * .75));
  }
  else if (this.size = "Medium") {
    return(20 + (this.toppings.length *  1));
  }
  else if (this.size = "large") {
    return(25 + (this.toppings.length * 1.5));
  }
  else if (this.size = "'Murica") {
    return(30 + (this.toppings.length * 2));
  }
};


Pizza.prototype.buildPizza = function() {
  this.toppings.push(allToppings);
  this.price.push(pizzaPrice);
  this.size.push(pizzaSize);
};

//Front End Logic
