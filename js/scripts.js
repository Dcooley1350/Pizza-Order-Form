// Business Logic for User.

var Customer = function (firstName, lastName, phoneNumber, emailAddress, physicalAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress;
  this.physicalAddress = physicalAddress;
}


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

var Pizza = function (price, toppings, size, style) {
  this.price = price;
  this.toppings = toppings;
  this.size =  size;
  this.style = style;
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


// Pizza.prototype.buildPizza = function() {
//   this.toppings.push(allToppings);
//   this.price.push(pizzaPrice);
//   this.size.push(pizzaSize);
//   this.style.push(pizzaStle);
// };

//Front End Logic
Customer.prototype.display = function(newCustomer) {
  $("#display-first-name").text(this.firstName);
  $("#display-last-name").text(this.lastName});
  $("#display-phone").text(this.phoneNumber});
  $("#display-email").text(this.emailAddress);
  $("#display-address").text(this.physicalAddress);
};


$(document).ready(function()  {
  //Form that collects customer info and stores it in customer object.
  $("form#customer-info").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var inputtedEmail = $("input#new-email").val();
    var inputtedPhysicalAddress = $("input#new-address").val();

    var newCustomer = new Customer(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail, inputtedPhysicalAddress);

    newCustomer.display()
    $("#customer-info").hide();
    $(".change-info").show();

  });
  //Form that collects pizza info and stores it in customer objects.
  $("form#pizza-info").submit(function(event) {
    var allToppings = []
    event.preventDefault();
    var size = $("#size").val();
    var style = $("#style").val();;
    $("input:checkbox[name=meat-toppings]:checked").each(function(){
      var meatToppings = $(this).val();
      allToppings.push(meatToppings);
    });
    $("input:checkbox[name=veggie-toppings]:checked").each(function(){
      var veggieToppings = $(this).val();
      allToppings.push(veggieToppings);
    });
    var newPizza = new Pizza(size, allToppings, style)
    var method = $("#method").val();

  });
});
