function ReduceChances()
{
	var value = document.getElementById("ctr").innerHTML;
	value = value - 1;
	document.getElementById("ctr").innerHTML = value;
	return value;
}

function submitgame()
{
	var min=1; 
	var max=101;
	var number =Math.floor(Math.random() * (+max - +min)) + +min;
	var value = document.getElementById("ctr").innerHTML;
	var cancel;
	while( value > 0)
	{
		var val = prompt('Guess the Number?');
		if(val == null || val == "")
		{
			cancel = true;
			break;
		}
		if(val == number)
		{
			alert('Congrats!! you won');
			value = value -1;
			break;
		}
		else if(val < number)
		{
			alert('Number is greater than your guessed value, try again');
		}
		else
		{
			alert('Number is lesser than your guessed value, try again');
		}
		value = ReduceChances();
	}
	if(cancel == true)
	{
		document.getElementById("ctr").innerHTML = "The Game is fun, please try once";
	}
	else if(value > 0)
	{
		document.getElementById("ctr").innerHTML = "Chances left:" + value + " , Congrats!! you won";
	}
	else
	{
		document.getElementById("ctr").innerHTML = "Chances left:" + value + " ,Alas!! All the chances got finished";
	}
}