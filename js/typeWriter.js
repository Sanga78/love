
let i = 0;
let text1 = "Hey dear ❤️❤️.";
let text2 = "I promise I'm gonna love you, I'm gonna be there for you I'm gonna show up for you I'm gonna be the shoulder for you to cry on,I'm gonna be your voice of reason,If you ever doubt yourself I'm gonna be here to make sure you feel loved,that you are appreciated ,that you will always hold a part of my heart"
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
