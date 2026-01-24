function screenDimensionsMember() {
            var browser = navigator.userAgent.toLowerCase();
            if (browser.indexOf('safari/') != -1) {
                //document.getElementById("previewDiv").style.left = "25%";
                //document.getElementById("previewDiv").style.top = "25%";

                LeftPosition = (screen.width) ? (screen.width - 370) / 2 : 100;
                heightPosition = (screen.height) ? (screen.height - 500) / 2 : 100;

                document.getElementById("previewDivMember").style.left = LeftPosition + "px";
                document.getElementById("previewDivMember").style.top = heightPosition + "px";
            }
            else {
                LeftPosition = (screen.width) ? (screen.width - 370) / 2 : 100;
                heightPosition = (screen.height) ? (screen.height - 500) / 2 : 100;

                document.getElementById("previewDivMember").style.left = LeftPosition + "px";
                document.getElementById("previewDivMember").style.top = heightPosition + "px";
            }
        }