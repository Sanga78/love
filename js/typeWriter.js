
let i = 0;
let text1 = "Hey dear ❤️❤️.";
let text2 = "I promise I will always love you💕, support you,be there for you 🥰🥰, be a shoulder for you to lean on😌 ,I'm gonna be your voice of reason and be here for you, if you ever doubt anything or yourself😍. You will always have a piece of my heart and and I will make sure you feel loved ans appreciated💘❤️"
let speed = 50;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 50);
//};
