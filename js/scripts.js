function numberToConvert(number){
  if (number % 3 === 0){
    return "I'm sorry, Dave. I'm afraid I cant do that."
  }
}






// User Interface Logic

$(document).ready(function(){
  $("#talking").submit(function(event){
    event.preventDefault();

  var inputNumber = parseInt($("input#number").val());
  var convertedNumber = numberToConvert(inputNumber);

  $("#results").text(convertedNumber);

  });
});
