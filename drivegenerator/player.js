

function play()

{

	var qry=document.getElementById("vid").value;
	if(qry==null)

	{

		alert("Enter URL First!")

	}

	else

	{

		document.getElementById("player").src=qry;

	}

}
