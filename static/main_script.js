
var label = document.getElementById("ctr");
var labelvalue = label.textContent;
var number = 0;
var min=1; 
var max=101;
var guess;
function GuessNumber()
{
	
	if(labelvalue == "10")
	{
  
		number =Math.floor(Math.random() * (+max - +min)) + +min;
		var guess = document.getElementById("myForm").elements.namedItem("guess").value;
		if(guess == number)
		{
			document.getElementById("Hint").value = "The guessed number is correct. You Won !!";
		}
		else if(guess > number)
		{
			document.getElementById("Hint").value = "The number is less than what you guessed. Guess Again !!";
		}
		else
		{
			document.getElementById("Hint").value = "The number is greater than what you guessed. Guess Again !!";
		}
		label.value = (parseInt(labelvalue,10) - 1).toString();
	}
	else
	{
		var guess = document.getElementById("myForm").elements.namedItem("guess").value;
		if(guess == number)
		{
			document.getElementById("Hint").value = "The guessed number is correct. You Won !!";
		}
		else if(guess > number)
		{
			document.getElementById("Hint").value = "The number is less than what you guessed. Guess Again !!";
		}
		else
		{
			document.getElementById("Hint").value = "The number is greater than what you guessed. Guess Again !!";
		}
		label.value = (parseInt(labelvalue,10) - 1).toString();
	}
}
