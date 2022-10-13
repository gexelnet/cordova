// This JavaScript file has an MIT licence.
// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

document.getElementById("mySubmit").addEventListener("click", checkAnswer);
 

//Define global variables
 count = 0,  
      zCount = 0, 
      yCount = 0, 
      sumPoints = 0, 
      aQuestion = "", 
      allQuest = "", 
      aChoices = "", 
      bChoices = "", 
      allQuestions = "", 
      finishedDoc = "",
      someValue = "";

allQuestions = [
		{
		question: "What is the last name of Homer? Hint: He appears in a animated TV series.",
		choices: ["James", "Jones", "Simpson", "Smith"], 
		correctAnswer: 2
	},
		{
		question: "Where do you send letters?",
		choices: ["At the post office", "At the supermarket", "At the church", "At the school"], 
		correctAnswer: 0
	},
		{
		question: "Which of the following animals is the dog's worst enemy?",
		choices: ["The horse", "The cat", "The bird", "The dolphin"], 
		correctAnswer: 1
	},
		{
		question: "Which of the following animals is the fastest?",
		choices: ["The mouse", "The cat", "The dog", "The horse"], 
		correctAnswer: 3
	}
];

renderQuestions(); //render first question

}



function renderQuestions() {
	aQuestion = document.getElementById("thisQuestion");
	aChoices = document.getElementsByTagName("label");
	bChoices = document.getElementsByTagName("input");
	if(count < allQuestions.length){
		allQuest = allQuestions[count].question;
		count++;
	}
	else{
		alert("You have a total of " + sumPoints + "/4" + " correct answers!");
		finished();
		return;
	}
	aQuestion.innerHTML = allQuest;
	//render the choices and structure
	for(var i = 0; i < allQuestions.length; i++){		
	
		aChoices[i].innerHTML = allQuestions[zCount].choices[i];
	    
	}
	zCount++;


}

function checkAnswer() {

	someValue = allQuestions[yCount].correctAnswer;
	if(bChoices[someValue].checked === true){
		alert("That's correct!");
		sumPoints += 1;
	}
	else{
		alert("No, incorrect answer!");
	}
	yCount++;
	renderQuestions();
}

function finished(){
	finishedDoc = document.getElementById("thisCont");
	finishedDoc.innerHTML = "<h1 align=\"center\">Finished!<\/h1><p><input type=\"submit\" value=\"Restart\" id=\"restart\" class=\"styleButton\"><\/p>";

document.getElementById("restart").addEventListener("click", refresh);
}




function refresh(){
    
    window.location.reload(false);
    
}