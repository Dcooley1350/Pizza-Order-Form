// Business Logic for Bank Account

function Account (owner, balance) {
  this.owner = owner;
  this.balance = balance;
}

Account.prototype.deposit = function (amount) {
  this.balance += amount ;
}

Account.prototype.withdraw = function (amount) {
  this.balance -= amount ;
}

//Front End Logic
$(document).ready(function(){
  var newAccount;
  $('form#new-account').submit(function(event) {
    event.preventDefault();
    var owner = $("#new-owner").val();
    var initDeposit = parseInt($("#initial-deposit").val());
    $("#balance").html(`${initDeposit}`);
    $("#new-account").hide();
    $("#deposit-withdraw").show();
    $("#balance").show();
    newAccount = new Account(owner,initDeposit);
    $('span#alert-owner').text(newAccount.owner);
    alert("New Account Created : " + newAccount.owner);
  });



  $('form#deposit-withdraw').submit(function(event){
    event.preventDefault();
    var newDeposit = parseInt($("#deposit").val());
    var newWithdrawl = parseInt($("#withdraw").val());
    newAccount.deposit(newDeposit);
    newAccount.withdraw(newWithdrawl);
    $("#balance").html("The account balance is " + `${newAccount.balance}`)

  })
});
