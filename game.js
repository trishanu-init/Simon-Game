var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
$("h1").on("click",function nextSequence(){
  var n=Math.random();
  n=n*4;
  n=Math.floor(n);
var randomNumber=n;
console.log(randomNumber);

var randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
console.log(gamePattern);
$("#"+randomChosenColour).fadeOut().fadeIn();
$('document').ready(function() {
  const audio = new Audio("sounds/"+randomChosenColour+".mp3" );
  audio.play();
  });

while(gamePattern.length > 0) {
    gamePattern.pop();
}

});

$(".btn").click(function(){
 var userChosenColour=$(this).attr("id");
userClickedPattern.push(userChosenColour);
console.log(userClickedPattern);
$('document').ready(function() {
  const audio = new Audio("sounds/"+userChosenColour+".mp3" );
  audio.play();

});

$(".btn").click(function (){
  setTimeout(function() {
      $(this).addClass('pressed');
  },100);

});

});
