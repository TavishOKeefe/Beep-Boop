function numberToConvert(number){

  var range = [];
  for (var i = 0; i <= number; i++){
    range.push(i);
  }
  return range;
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
