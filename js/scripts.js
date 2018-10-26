function numberToConvert(number){

  var range = [];
  var converted = [];
  for (var i = 0; i <= number; i++){
    if (number < 100){
      range.push(i);
    } else {
      return "Please enter a number that is less than 100";
    }

  }
  range.forEach(function(changeNumber){
    if (changeNumber === 0){
      converted.push("Beep!");
    }
    else if (changeNumber % 3 === 0){
      converted.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else if (changeNumber % 10 === 1){
      converted.push("Boop!");
    }
    else if (changeNumber % 10 === 0){
      converted.push("Beep!");
    }
    else if (changeNumber < 20 && changeNumber > 10){
      converted.push("Boop!");
    }
    else {
      converted.push(changeNumber);
    }
  });


  return converted;
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
