<!--
//This credit line must stay intact
//Status Scrolling script
//For this script, visit java-scripts.net 

myMsg = "Thanks For Visiting Venture Crew 2125's Site!                                     "

i=0

function scrollMsg() {
    frontPart = myMsg.substring(i,myMsg.length)
    backPart = myMsg.substring(0,i)
    window.status = frontPart + backPart

    if (i < myMsg.length) {
        i++
    }
    else {
        i = 0
    }

    setTimeout("scrollMsg()",50)

}

window.onload=scrollMsg
//-->