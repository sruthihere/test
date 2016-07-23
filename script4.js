document.querySelector("ul.player").addEventListener("click", function(e){
	var songName = e.target.getAttribute("data-src");
	var audioPlayer = document.querySelector("#player");



	if(audioPlayer){
		if(songName === audioPlayer.getAttribute("src")){
			if(audioPlayer.paused){
				audioPlayer.play();
				e.target.id="playing";
			} else {
				audioPlayer.pause();
				e.target.id="paused";
			}
		}else{
			audioPlayer.src = songName;
			audioPlayer.play();
			if(document.querySelector("#playing")){
				document.querySelector("#playing").id = "";
			} else {
				document.querySelector("#paused").id = "";
			}
			
			e.target.id = "playing";
		}


	} else {
		var audioElement = document.createElement("audio");
		audioElement.id="player";
		audioElement.src = songName;
		e.target.id="playing";
		document.body.appendChild(audioElement);
		audioElement.play();
		audioElement.addEventListener("ended", function(){
		audioElement.parentNode.removeChild(audioElement);
		e.target.id = "";
	}, false);
	
	}


}, false);