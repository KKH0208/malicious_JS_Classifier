/* 元のURL: https://sharethrough.com */

                      const code = `(function () { 
const second = 1000,
	minute = second * 60,
	hour = minute * 60,
	day = hour * 24;

let today = new Date(),
	dd = String(today.getDate()).padStart(2, "0"),
	mm = String(today.getMonth() + 1).padStart(2, "0"),
	yyyy = today.getFullYear(),
	nextYear = yyyy + 1,
	dayMonth = "09/30/",
	birthday = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;
if (today &gt; birthday) {
	birthday = dayMonth + nextYear;
} 

const countDown = new Date(birthday).getTime(),
	x = setInterval(function() {
		const now = new Date().getTime(),
			distance = countDown - now;

		document.getElementById("days").innerText = Math.floor(distance / day);
		document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
		document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
		document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

		if (distance &lt; 0) {
			document.getElementById("headline").innerText = "It's my birthday!";
			document.getElementById("countdown").style.display = "none";
			document.getElementById("content").style.display = "block";
			clearInterval(x);
		}
	}, 0);
}());`;

                      const lines = code.split('\n');
                      let lineIndex = 0;
                      let charIndex = 0;
                      const speed = 5; // Speed of typing (in milliseconds)

                      function typeWriter() {
                        const pre = document.getElementById('typewriter');
                        const currentLine = lines[lineIndex];
                        const currentChar = currentLine.charAt(charIndex);

                        if (currentChar === "&lt;") {
                          // Handle HTML tags in the code
                          const closingIndex = currentLine.indexOf("&gt;", charIndex);
                          pre.innerHTML += currentLine.substring(charIndex, closingIndex + 4);
                          charIndex = closingIndex + 4;
                        } else {
                          pre.innerHTML += currentChar;
                          charIndex++;
                        }

                        if (charIndex < currentLine.length) {
                          setTimeout(typeWriter, speed);
                        } else {
                          pre.innerHTML += "<br>"; // Add line break
                          lineIndex++;
                          charIndex = 0;
                          if (lineIndex < lines.length) {
                            setTimeout(typeWriter, speed);
                          }
                        }
                      }

                      // Start typing when the page loads
                      window.onload = typeWriter;
                    

