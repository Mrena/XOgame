var playVal; 
var moments = 0, sec = 0, min =0; 
var timer; 


var win = 0;
var isWin;
var flag=0;
var spaces = new Array();
var clickEvent = $.Event("click");

var countPlay = 0;

 function init() {

            $("#road td").each(function () {
                spaces[parseInt($(this).attr("id"))] = 0;
            });
        }

        function reStart()
        {
            window.location = "index.html"
        }
	function setMove(coords)
 	 {
 	     
 	     
 	         if ((playVal == "X" || playVal == "O") && spaces[coords] == 0) {
 	             if (flag == 0 && playVal == "X" || flag == 1 && playVal == "O") {
 	                 countPlay++;
                     image = playVal == "X" ? "mazesX.jpg" : "mazesO.jpg";
 	                 $("#" + coords).html("<img src='images/"+image+"' alt='"+playVal+"' />");
 	                 checkWin();
 	                 if (countPlay == 9 && win != 3) {

 	                     $("#pop").html("It's a draw").show().focus();
 	                     pause();
 	                     setInterval("reStart()", 3000);

 	                 }
 	                 flag == 0 ? flag = 1 : flag = 0;
 	                 spaces[coords] = 1;
 	                 shuffleDisable();

 	             }
 	             else
 	                 $("#err").html("Select symbol to play.");


 	         }
 	         else
 	             $("#err").html("Select symbol to play.");

 	     
	
	 }
 
 	function setCoords(play)
 		{
	playVal = play;
	
		}

	function checkWin()
	{
	 

		var xWin = checkXwin();
	  	 if(xWin)
	      	{

	      	    
        $("#pop").html("X won").show().focus();
 	     pause();
 	     setInterval("reStart()", 3000);	
			
			}
			
	var oWin = checkOwin();
	   if(oWin)
	      {
		
		
         $("#pop").html("O won").show().focus();
         pause();
 	     setInterval("reStart()", 3000);
			
			}			

	
}

	function checkXwin()
		{
 
 	win = 0;
 	
	isWin = false;
	for(var i=10; i<=30;i+=10)
			{
		if($("#"+i+" img").attr("alt")=="X")
				win++;
			}
	
	if(win!=3)
	{
	 win=0;
		for(var i=11; i<=31;i+=10)
			{
		if($("#"+i+" img").attr("alt")=="X")
				win++;
				}
	}
		
			if(win!=3)
					{
	 win=0;
		for(var i=12; i<=32;i+=10)
			{
		if($("#"+i+" img").attr("alt")=="X")
				win++;
			}
					}
			
			

	
			if(win!=3)
				{
			 win = 0;
			
			
	for(var i=10; i<=12;i++)
			{
		if($("#"+i+" img").attr("alt")=="X")
				win++;
				
			
			}
					}

		if(win!=3)
				{
	 win=0;
		for(var i=20; i<=22;i++)
			{
		if($("#"+i+" img").attr("alt")=="X")
				win++;
			}
				}
		
			if(win!=3) {
			    win = 0;
		for(var i=30; i<=32;i++)
			{
		if($("#"+i+" img").attr("alt")=="X")
				win++;
			}
				}



	
	if(win!=3)
		{
	 win=0;
		for(var i=10; i<=32;i+=11)
			{
		if($("#"+i+" img").attr("alt")=="X")
				win++;
			
			}
		}
	
	
	if(win!=3)
			{	
	 win=0;
	for(var i=12; i<=30;i+=9)
		{
		if($("#"+i+" img").attr("alt")=="X")
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
	
	isWin = false;
	for(var i=10; i<=30;i+=10)
			{
		if($("#"+i+" img").attr("alt")=="O")
				win++;
			}
	if(win!=3)
			{
	 win=0;
		for(var i=11; i<=31;i+=10)
		{
		if($("#"+i+" img").attr("alt")=="O")
				win++;
		}
			}
	
	if(win!=3)
			{
	 win=0;
		for(var i=12; i<=32;i+=10)
		{
		if($("#"+i+" img").attr("alt")=="O")
				win++;
		}
			}
	
	if(win!=3)
			{
			win = 0;
			
	for(var i=10; i<=12;i++)
		{
		if($("#"+i+" img").attr("alt")=="O")
				win++;
				
				
			
			}
				}

		if(win!=3)
		{
		 win=0;
		for(var i=10; i<=12;i++)
				{
		if($("#"+i+" img").attr("alt")=="O")
				win++;
				}
		}
			
				if(win!=3)
					{
					 win=0;
		for(var i=20; i<=22;i++)
				{
		if($("#"+i+" img").attr("alt")=="O")
				win++;
				}
					}
			
				if(win!=3)
					{
					 win=0;
		for(var i=30; i<=32;i++)
				{
		if($("#"+i+" img").attr("alt")=="O")
				win++;
				}
					}




	if(win!=3)
	{
		win = 0;
	for(var i=10; i<=32;i+=11)
	{
		if($("#"+i+" img").attr("alt")=="O")
				win++;
			
	}
	}
	
	
	if(win!=3)
	{
			win = 0;
	for(var i=12; i<=30;i+=9)
	{
		if($("#"+i+" img").attr("alt")=="O")
				win++;
			
	}
	}
	
	
	
	
	
	if(win==3)
	  isWin = true;
	
return isWin;	
}

function startGame()
{
 	
 	$("#err").html("");
	$("#btnX").removeClass("ui-state-disabled");
	timer =setInterval("count()",100);
	$("#btnPause").removeClass("ui-state-disabled");
 	$("#btnStart").addClass("ui-state-disabled");
 	
	
}

function pause()
{
	
	clearInterval(timer);
	$("#btnPause").addClass("ui-state-disabled");
	$("#btnStart").val("Resume");
 	$("#btnStart").removeClass("ui-state-disabled");
    $("#btnX").addClass("ui-state-disabled");
	$("#btnO").addClass("ui-state-disabled");
	
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

	$("#timer").html(min +":"+sec+":"+moments);
	if(min<10)
	min = parseInt(min.charAt(1));
	if(sec<10)
	sec = parseInt(sec.charAt(1));
	if(moments<10)
	moments = parseInt(moments.charAt(1));


	}


	function shuffleDisable()
	 {
		if(!($("#btnX").attr("class")=="ui-state-disabled"))
		     {
			$("#btnX").addClass("ui-state-disabled");
			$("#btnO").removeClass("ui-state-disabled");	
				
				
			}
		else if(!($("#btnO").attr("class")=="ui-state-disabled"))
		  {
			$("#btnO").addClass("ui-state-disabled");
            
			$("#btnX").removeClass("ui-state-disabled");
			
			
			
			}
		
		
	}
	

