var play = function(userInput){
    var numberParsed = parseInt(userInput);
  var numberRange = [];

 for (var i = 1; i <= numberParsed; i++) {
    if (i % 15 === 0) {
      numberRange.push("pingpong");

    } else if (i % 3 === 0) {
      numberRange.push("ping");
    } else if (i % 5 === 0) {
      numberRange.push("pong");
    } else {
      numberRange.push(i);
    }
  }

}
