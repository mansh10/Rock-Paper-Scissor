let userScore=0;
let computerScore=0;
let rounds=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".scoreboard");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
let changeUser=document.getElementById("user-label");
let no_of_rounds=0;
function getComputerChoice(){
	const choices = ['r','p','s']
	const randomNumber=Math.floor(Math.random()*3);
	return choices[randomNumber];
}
function convertor(letter)
{
	if(letter==="r") return "Rock✊";
	if(letter==="p") return "Paper✋";
	return "Scissor✌";
}

/*function win(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = convertor(userChoice) + " Beats " + convertor(computerChoice) + " You WIN 🥳 ";
	document.getElementById(userChoice).classList.add('greenglow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('greenglow')},400);
}


function lose(userChoice, computerChoice){
    computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = convertor(userChoice) + " Beats " + convertor(computerChoice) + " You Loose 😔 ";
	document.getElementById(userChoice).classList.add('redglow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('redglow')},400);
}

function draw(userChoice, computerChoice){

	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML =  "Its a Draw 😐";
	document.getElementById(userChoice).classList.add('grayglow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('grayglow')},400);
}*/

function win(userChoice , computerChoice){
	
     userScore++;
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML = computerScore;
      result_p.innerHTML =  " Computer Choose " + convertor(computerChoice) + " .You win 👏"
      document.getElementById(userChoice).classList.add('greenglow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('greenglow')},1500);
    // result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + " .You win 👏"

 }
 function loose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =  " Computer Choose " + convertor(computerChoice) + " .You Lost 🥺"
    document.getElementById(userChoice).classList.add('redglow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('redglow')},1500);
    //result_p.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord(computerChoice) + " .You Lost 🥺"

    
    
}
function draw(userChoice, computerChoice){

    result_p.innerHTML =  " Computer Choose " + convertor(computerChoice) + " .Its a Tie 🤝"
     //result_p.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + " .Its a Tie 🤝"
document.getElementById(userChoice).classList.add('grayglow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('grayglow')},1500);
    
}



function game(userChoice)
{
	rounds++;
	if(rounds>=no_of_rounds){
		// console.log(userScore);
		
if(userScore>computerScore) {
	alert("You Win By " + userScore + " : " + computerScore)
}

else if(userScore<computerScore) {
	alert("You Loose By " + userScore + " : " + computerScore)
}
else {
	alert("Its a Draw By " + userScore + " : " + computerScore )
}



		userScore_span.innerHTML = 0;
		computerScore_span.innerHTML = 0;
		rounds=0;
		userScore=0;
		computerScore=0;
	}

else{
	
const computerChoice = getComputerChoice();
switch(userChoice + computerChoice)
{
	case "rs":
	case "pr":
	case "sp":
	win(userChoice, computerChoice);
	break;
	case "rp":
	case "ps":
	case "sr":
	loose(userChoice, computerChoice);
	break;
	case "rr":
	case "pp":
	case "ss":
	draw(userChoice, computerChoice);
	break;
}
}
}



function main(){ 

changeUser.innerHTML= window.prompt("Enter your Name to Continue","User").fontsize(4);
no_of_rounds=window.prompt("Enter No of Rounds You want to play","Note: Enter the Numrical Value Only");
rock_div.addEventListener('click', function()
{
	game("r");
})
paper_div.addEventListener('click', function()
{
	game("p");
})
scissor_div.addEventListener('click', function()
{
	game("s");
})
}
main();