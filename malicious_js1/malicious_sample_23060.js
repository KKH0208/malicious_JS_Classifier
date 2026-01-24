var timerID;
    var flag = false;
    var speed = 55;

    function scroll(){
        window.scrollBy( 0, 1 );
    }

				function scrollSpeed() {
					var obj = document.scroll_change.scroll;
			var index = obj.selectedIndex;
	
			switch ( index ) {
				case 0:
				speed = 5;
				break;
	
				case 1:
				speed = 10;
				break;
	
				case 2:
				speed = 20;
				break;
	
				case 3:
				speed = 25;
				break;
	
				case 4:
				speed = 30;
				break;
	
				case 5:
				speed = 35;
				break;
	
				case 6:
				speed = 40;
				break;
	
				case 7:
				speed = 45;
				break;
	
				case 8:
				speed = 50;
				break;
	
				case 9:
				speed = 55;
				break;
	
				case 10:
				speed = 60;
				break;
	
				case 11:
				speed = 65;
				break;
	
				case 12:
				speed = 70;
				break;
	
				case 13:
				speed = 75;
				break;
	
				case 14:
				speed = 80;
				break;
	
				case 15:
				speed = 85;
				break;
	
				case 16:
				speed = 90;
				break;
	
				case 17:
				speed = 95;
				break;
	
				case 18:
				speed = 100;
				break;
	
				case 19:
				speed = 120;
				break;
			}
			
		autoscroll(true);
     }


		function autoscroll (auto) {
        if (auto == undefined) {
            auto = false;
        }
		if ( flag == false ) {
	    		timerID = setInterval( "scroll()", speed );
	    		flag = true;
	    	} else {
				if (auto == true) {
                    clearInterval(timerID);
                    timerID = setInterval( "scroll()", speed );
                } else {
                    clearInterval(timerID);
                    flag = false;
                }
			}
		}