var playVal; 
var moments = 0, sec = 0, min =0; 
var timer; 

var win = 0;
var isWin;
var flag=0;
var limit;
var reset;

var countPlay = 0;
	function setMove(coords)
 	 {
	if(playVal=="X" || playVal=="O")
	{
	 if(flag==0&&playVal=="X" || flag==1&&playVal=="O")
	 {
	countPlay++;
	document.getElementById(coords).innerHTML = playVal;
	checkWin();
	if(countPlay==9 && win!=3)
		{
			
			alert("I'ts a draw");
			window.location = "index.html";
			
		}
	flag==0 ? flag=1 : flag=0;
	
	
		
		}
	else
		document.getElementById("err").innerHTML = "Select symbol to play.";
	
	
		}
	else
	  document.getElementById("err").innerHTML = "Select symbol to play.";
	
	 }
 
 	function setCoords(play)
 		{
	
	 document.getElementById("err").innerHTML = "";
	
	playVal = play;
	status = play;
	
	
	
		}

	function checkWin()
	{
	 

		var xWin = checkXwin();
	  	 if(xWin)
	      	{
	
		alert("X won");
		window.location = "index.html";	
			
			}
			
	var oWin = checkOwin();
	   if(oWin)
	      {
		
		alert("O won");
		window.location = "index.html";	
			
			}			

	
}

	function checkXwin()
		{
 
 	win = 0;
 	
	isWin = false;
	
	//reset = 0;
	for(var i=10; i<=30;i+=10)
			{
		if(document.getElementById(i).innerHTML=="X")
				win++;
			}
	
	if(win!=3)
	{
	 win=0;
		for(var i=11; i<=31;i+=10)
			{
		if(document.getElementById(i).innerHTML=="X")
				win++;
				}
	}
		
			if(win!=3)
					{
	 win=0;
		for(var i=12; i<=32;i+=10)
			{
		if(document.getElementById(i).innerHTML=="X")
				win++;
			}
					}
			
			

	
			if(win!=3)
				{
			 win = 0;
			
			//reset = 0;
	for(var i=10; i<=12;i++)
			{
		if(document.getElementById(i).innerHTML=="X")
				win++;
				
			
			/*	if(i==12 && win != 3&& reset==0)
				   {
					
					win = 0;
					i = 20;
					limit = 22;
					reset++;
				
					
					
					}
				
				if(i==22 && win != 3 && reset==1)
				   {
					
					win = 0;
					i = 30;
					limit = 32;
					reset=0;
					
					}*/
				
			
			}
					}

		if(win!=3)
				{
	 win=0;
		for(var i=20; i<=22;i++)
			{
		if(document.getElementById(i).innerHTML=="X")
				win++;
			}
				}
		
			if(win!=3) {
			    win = 0;
		for(var i=30; i<=32;i++)
			{
		if(document.getElementById(i).innerHTML=="X")
				win++;
			}
				}



	
	if(win!=3)
		{
	 win=0;
		for(var i=10; i<=32;i+=11)
			{
		if(document.getElementById(i).innerHTML=="X")
				win++;
				
				/*if(i==32 && win !=3)
						win = 0;*/
			}
		}
	
	
	if(win!=3)
			{	
	 win=0;
	for(var i=12; i<=30;i+=9)
		{
		if(document.getElementById(i).innerHTML=="X")
				win++;
			
			if(i==30 && win !=3)
						win = 0;
		}
			}
	
	if(win==3)
	  isWin = true;
	
	return isWin;	
	}

	function checkOwin()
		{
 	win = 0;
 	status = "Checking O";
	
	isWin = false;
	//limit = 30;
	//reset = 0;
	for(var i=10; i<=30;i+=10)
			{
		if(document.getElementById(i).innerHTML=="O")
				win++;
		
			
	/*	if(i==30 && win != 3 && reset==0)
		 {
			i = 11;
			limit = 31;
			win = 0;
			reset++;
			
		}
		if(i==31 && win !=3 && reset==1)
		{
			i = 12;
			limit = 32;
			win = 0;
			reset=0;
			
		}*/
		
		
			}
	if(win!=3)
			{
	 win=0;
		for(var i=11; i<=31;i+=10)
		{
		if(document.getElementById(i).innerHTML=="O")
				win++;
		}
			}
	
	if(win!=3)
			{
	 win=0;
		for(var i=12; i<=32;i+=10)
		{
		if(document.getElementById(i).innerHTML=="O")
				win++;
		}
			}
	
	if(win!=3)
			{
			win = 0;
			
	for(var i=10; i<=12;i++)
		{
		if(document.getElementById(i).innerHTML=="O")
				win++;
				
			/*	if(i==12 && win != 3 && reset==0)
				   {
					
					win = 0;
					i = 20;
					limit = 22;
					reset++;
					
					
					}
				
				if(i==22 && win != 3 && reset==1)
				   {
					
					win = 0;
					i = 30;
					limit = 32;
					reset=0;
					
					
					}	*/
				
			
			}
				}

		if(win!=3)
		{
		 win=0;
		for(var i=10; i<=12;i++)
				{
		if(document.getElementById(i).innerHTML=="O")
				win++;
				}
		}
			
				if(win!=3)
					{
					 win=0;
		for(var i=20; i<=22;i++)
				{
		if(document.getElementById(i).innerHTML=="O")
				win++;
				}
					}
			
				if(win!=3)
					{
					 win=0;
		for(var i=30; i<=32;i++)
				{
		if(document.getElementById(i).innerHTML=="O")
				win++;
				}
					}




	if(win!=3)
	{
		win = 0;
	for(var i=10; i<=32;i+=11)
	{
		if(document.getElementById(i).innerHTML=="O")
				win++;
			
	}
	}
	
	
	if(win!=3)
	{
			win = 0;
	for(var i=12; i<=30;i+=9)
	{
		if(document.getElementById(i).innerHTML=="O")
				win++;
			
	}
	}
	
	
	
	
	
	if(win==3)
	  isWin = true;
	
return isWin;	
}

function startGame()
{
 	
 	 document.getElementById("err").innerHTML = "";
	document.getElementById("btnX").disabled = false;
	timer =setInterval("count()",100);
 	document.getElementById("btnPause").disabled = false;
 	document.getElementById("btnStart").disabled = true;
	
}

function pause()
{
	
	clearInterval(timer);
	document.getElementById("btnPause").disabled = true;
	document.getElementById("btnStart").value = "Resume";
 	document.getElementById("btnStart").disabled =false;
 		document.getElementById("btnX").disabled = true;
	document.getElementById("btnO").disabled = true;
}

	function count()
		{
		

		displayTime();
		moments++;
		if(moments==60)
		{
		moments = 0;
		sec++;
 		if(sec==60)
     		 {
		sec =0;
         	min++;
		
			}

		}
	
		}


	

	function displayTime()
	{
	if(min<10)
	{
  	 min = "0"+min.toString();
	}
    	if(sec<10)
		{

        sec = "0"+sec.toString();
		}
            if(moments<10)
			{
                moments = "0"+moments.toString();
			}

	document.getElementById("timer").innerHTML= min +":"+sec+":"+moments;
	if(min<10)
	min = parseInt(min.charAt(1));
	if(sec<10)
	sec = parseInt(sec.charAt(1));
	if(moments<10)
	moments = parseInt(moments.charAt(1));


	}


	function shuffleDisable()
	 {
		if(!document.getElementById("btnX").disabled)
		     {
			document.getElementById("btnX").disabled = true;
			document.getElementById("btnO").disabled = false;	
				
				
			}
		else if(!document.getElementById("btnO").disabled)
		  {
			document.getElementById("btnO").disabled = true;
			document.getElementById("btnX").disabled = false;
			
			
			
			}
		
		
	}
	

