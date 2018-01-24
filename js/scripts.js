// backend logic
function Ticket(title, time, age){
  this.title = title;
  this.time = time;
  this.age = age;
}

function inputTicket() {
var inputtedTitle = $("#title").val();
var inputtedTime = $("#time").val();
var inputtedAge = parseInt($("input#age").val());
var newTicket = new Ticket(inputtedTitle, inputtedTime, inputtedAge);

return newTicket
}

Ticket.prototype.price = function(){
var cost = 0;
if (this.title === "The Shape of Water"){
  cost=15;
} else {
  cost=12;
}
if (this.time==="10:00AM" || this.time==="4:00PM"){
  cost=cost-2
} else {
  cost;
}
if (this.age < 18 || this.age > 65){
  cost=cost-2
} else {
  cost;
}
  return cost;
}

// frontend logic
$(document).ready(function(){
  $("form#ticket").submit(function(event){
    event.preventDefault();
    var ticket = inputTicket();

    $(".ticket-entry").text("Your ticket is $" + ticket.price());
  });
});
