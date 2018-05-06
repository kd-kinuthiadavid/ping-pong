

//Business Logic


function play(userInput){
  var storedArray = [];

  for (var i = 1; i <= userInput; i++) {
    if ((i%3) === 0) {
      storedArray.push("ping");
    }else if ((i%5) === 0 ){
      storedArray.push("pong");
    }else if ((i%15) === 0){
      storedArray.push("pingpong");
    }else {
      storedArray.push(i);
    }
  }
  // alert(storedArray);
  return storedArray;
}



//User Interface Logic

$(document).ready(function(){
  $("form#myFormId").submit(function(event){
    // event.preventDefault();
    $("#answers").empty();
    var userInput = parseInt($("input#userNumber").val());
    var storedArray = play(userInput);
    storedArray.forEach(function(output){

      $("#answers").append("<li>" + output + "</li>");
      event.preventDefault();
    });

  });
});
