// Check if the user is ready to play
confirm("I am ready to play!");

age = prompt("What's your age?");

if(age < 13)
	{
		console.log("You are allowed to play, but we take no responsibility.");
	}
else
	{
	console.log("Play on!");
	}
	
console.log("You are walking downtown when you see an old man calling you over.")

var userAnswer= prompt(" Do you walk towards him? Yes/No.");

if(userAnswer === "yes")
	{
		console.log("You follow the old man into a dark alley. Turns out hes a 3,000 year old wizard and he kills you. Sorry!")
	}
else
	{
		console.log("Congratulations! You avoided a 3,000 year old wizard who wants to kill everybody! You win!!");
	}

var feedback= prompt("Rate this game on a scale from 1-10! 10 being the highest...")

if(feedback >= 8)
	{
		console.log("You are too kind and I love you forever!");
	}
else
	{
		console.log("I worked 5 hard minutes on this game and thats what you give me!?! Just you wait, I will find you and I will kill you!");
	}
