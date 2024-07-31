var gamePattern=[];
var level = 0;
var started = 0;
var buttonColours=["red", "blue", "green","yellow"];
var userClickedPattern=[];

function nextSquence(){
  userClickedPattern = [];
var randomNumber = Math.floor((Math.random()*4)) ;
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
playSound(randomChosenColour);
level++;
$("h1").text("level  " + level);
$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

$(".btn").on("click",function(){
        
        var userChoosenColor = this.id;
        userClickedPattern.push(userChoosenColor);
        playSound(userChoosenColor);
        animatePress(userChoosenColor);
       
        checkAnswer(userClickedPattern.length - 1);
   
       
})

function playSound(name){
   
    var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
   
   
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}

$(document).keypress(function(event){
    
    if(event.key==="a" && started===0){  
        setTimeout(() => { nextSquence();  }, 100);
        started = 1;
    }else{
      $("h1").text("Press A Key to Start");
    }   
    
})

function checkAnswer(currentLevel) {

    
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
     
      if (userClickedPattern.length === gamePattern.length){  
        setTimeout(() => { nextSquence();  }, 1000)
       }

    } else {

     
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();
      $("body").addClass("game-over");
      setTimeout(function(){
        $("body").removeClass("game-over");},200);
      $("h1").text("Game Over, Press Any Key To Restart");
        startOver();

    }

}
function startOver(){
  level = 0;
  started = 0;
  gamePattern.length = 0;
  
}


    



