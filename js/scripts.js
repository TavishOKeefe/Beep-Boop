function numberToConvert(number){

  var range = [];
  var converted = [];
  for (var i = 0; i <= number; i++){
    range.push(i);
    // if (number % 3 === 0){
    //   range.push("Sorry");
    // } else if (number === 1 || 10 || 11 || 21 || 31 || 41){
    //   range.push("Boop");
    // } else if (number === 0 || 20 || 30 || 40 || 50){
    //   range.push("Beep");
    // }
  }
  range.forEach(function(divisiblyByThree){
    if (divisiblyByThree % 3 === 0){
      converted.push("sorry");
    // } else if (divisiblyByThree === 10 || 11 || 21 || 31 || 41){
    //   converted.push("Boop");
    // } else if (divisiblyByThree === 20 || 30 || 40 || 50){
    //   converted.push("Beep");
    } else {
      converted.push(divisiblyByThree);
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
