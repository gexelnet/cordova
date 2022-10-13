// This JavaScript file has an MIT licence.
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

mcp_class = function () {
  this.sequence = [];    // Will hold each sequence the player must match
  this.totalSteps = 5; //  Default Max steps before winning
  this.currentStep = 1; // Keep track of step player is on
};

mcp_class.prototype.initGameEvents = function () {      
  this.initControls();            
};

mcp_class.prototype.initControls = function () {
  var self = this;
  
  // Start Game resets game logic and begins computer stage
  $("#StartGame").click(function() {    
    
    // Grab total steps from dropdown
    self.totalSteps = $("#TotalSteps").val();
    
    // Build up fresh sequence to use
    self.initGameSequence();
    
    // Kick it off!
    self.startGame();    
  }); 
  
  // Clicking on tiles handles game logic
  $("#SequenceContainer li a").click(function(e) {
      e.preventDefault();
    
    // If computer is showing the sequence to play, don't do anything
    if(self.computerIsShowing) {
      return;
    }
    
    var clickId = parseInt($(this).attr("data-id"));
    
    self.UserInput.push(clickId);    
    
    // if user input doesn't match sequence, alert / end game   
    var index = self.UserInput.length -1
    if(self.UserInput[index] != self.sequence[index]) {
      
      return self.endGame(false);            
    }
    
    // Check if the user has beaten the game
    if(self.UserInput.length == self.sequence.length) {      
      return self.endGame(true);
    }
    
    // If we hit the last step, continue on to the next one       
    if(self.UserInput.length -1 == self.currentStep - 1) {
      self.currentStep++;
      //$("#StepCount").text(self.currentStep);
      self.UserInput = [];
      
      return self.playSequence(self.currentStep);
    }            
  });  
};

mcp_class.prototype.playSequence = function (iStep) {
  var self = this;
  
  // Play up to where the user is
  self.computerIsShowing = true;
  self.counter = 0;

  // Self invoking function calls iteslf every x seconds
  (function seqLoop (i) {          
    setTimeout(function () {   
      // Make the box active
      $("#box" + self.sequence[self.counter]).addClass("active");

      var $el = $("#box" + self.sequence[self.counter]);
            
      // Unactivate the box in x ms
      setTimeout(function() {
        $el.removeClass("active");
        self.counter++;
      }, 500);            

      // Continue playing sequence
      if (--i) { 
        seqLoop(i) 
      }
      // Done with loop, change to user input state
      else {
        self.computerIsShowing = false;
      }
      
    }, 1000)
  })(iStep);                       
};

mcp_class.prototype.startGame = function () {
  var self = this;
  
  // Reset variables on fresh game  
  self.currentStep = 1;
  self.UserInput = [];  
  
  // Reset Count
  //$("#StepCount").text(self.currentStep);
  
  // Play first sequence to get started
  self.playSequence(self.currentStep);          
};

mcp_class.prototype.endGame = function (bUserWon) {
 var self = this;
  
  self.UserInput = [];
  
  if(bUserWon) {
    
    //$("#StepCount").text("Winner!");
    
    alert("You Won!");   
    
    return true;
  }
  // User lost
  else {
    //$("#StepCount").text("Game over!");
   
    alert("You lose!");
      
    return false;
  }  
}

// Generates a new sequence of numbers the player must follow
mcp_class.prototype.initGameSequence = function () {
  var self = this;
  
  // total number of blocks - will be used to generate a random block for each sequence
  var iBlocks = $("#SequenceContainer > li").length;
  
  for(var x = 0; x < self.totalSteps; x++) {
    var seqNumber = Math.floor((Math.random()* (iBlocks)) + 1);
    this.sequence.push(seqNumber);
  }      
};

// Keep at the bottom
$(document).ready(function () {
    mcp = new mcp_class();
    mcp.initGameEvents();
});

}

