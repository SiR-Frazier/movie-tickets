// backend logic
function Ticket(title, time, age){
  this.title = title;
  this.time = time;
  this.age = age;
}
  var matineePrice= 10
  var nightPrice= 12

Ticket.prototype.time = function () {
    if (time==="10:00AM" || time==="4:00PM") {
      return matineePrice
    } else {
      return nightPrice
    }
  }

 Ticket.prototype.age = function (){
    if (parseInt(this.age)<18 || parseInt(this.age)>65) {
      return time()-=2;
    else {
      return time();
    }
  }

Ticket.prototype.movie = function (){

}

// frontend logic
$(document).ready(function(){
  $("form#ticket").submit(function(event){
    event.preventDefault();

    var inputtedTitle = $("input#title").val();
    var inputtedTime = $("input#time").val();
    var inputtedAge = $("input#age").val();
  });
});
