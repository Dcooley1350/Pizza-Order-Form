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
  }
  else {
    this.totalPrice + 1
  };
};

Order.prototype.addPizza = function () {
  this.pizzas.push(newPizza);
};

Order.prototype.addMethod = function(){
  this.method.push(deliveryMethod);
};

// Business Logic for Pizza

var Pizza = function (size, toppings, style, price) {
  this.size =  size;
  this.toppings = toppings;
  this.style = style;
  this.price = price;
};

Pizza.prototype.calcPrice = function(){
  if (this.size == "Small") {
  return(10 + (this.toppings.length * .5))
  }
  else if (this.size == "Bagel Bite") {
    return(15 + (this.toppings.length * .75))
  }
  else if (this.size == "Medium") {
    return(20 + (this.toppings.length *  1))
  }
  else if (this.size == "large") {
    return(25 + (this.toppings.length * 1.5))
  }
  else if (this.size == "'Murica") {
    return(30 + (this.toppings.length * 2))
  }
};


//Front End Logic

Customer.prototype.display = function(newCustomer) {
  $("#display-first-name").text(this.firstName);
  $("#display-last-name").text(this.lastName);
  $("#display-phone").text(this.phoneNumber);
  $("#display-email").text(this.emailAddress);
  $("#display-address").text(this.physicalAddress);
};

Pizza.prototype.display = function (){
  $("#pizza-price").text(this.calcPrice());
  $("#pizza-size").text(this.size);
  $("#pizza-style").text(this.style);
  this.toppings.forEach(function(topping) {
    $("#pizza-toppings").append("<li>" + topping + "</li>");
  });
}


$(document).ready(function()  {
  //Form that collects customer info and stores it in customer object.
  $("form#customer-form").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var inputtedEmail = $("input#new-email").val();
    var inputtedPhysicalAddress = $("input#new-address").val();

    var newCustomer = new Customer(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail, inputtedPhysicalAddress);
    newCustomer.display();
    $("#hide-customer").hide();
    $(".customer-info").show();
    $("#hide-pizza").show();

  });
  //Form that collects pizza info and stores it in customer objects.
  $("form#pizza-info").submit(function(event) {
    var allToppings = []
    event.preventDefault();
    var newSize = $("#input-size").val();
    var style = $("#style").val();;
    console.log(newSize)
    $("input:checkbox[name=meat-toppings]:checked").each(function(){
      var meatToppings = $(this).val();
      allToppings.push(meatToppings);
    });
    $("input:checkbox[name=veggie-toppings]:checked").each(function(){
      var veggieToppings = $(this).val();
      allToppings.push(veggieToppings);
    });
    var newPizza = new Pizza(newSize, allToppings, style)
    console.log(newPizza.size)
   console.log(newPizza.size)
   newPizza.display()
   console.log(newPizza.size)


    var method = $("#method").val();
    $(".pizza-show").show();
    $("#method-return").text(`${method}`);
    $(".method-show").show();

  });
});
