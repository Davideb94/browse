$(document).ready(function(){

	browse();

});

function browse(){
	
	setBrowseButton();
	browseListen();
	
}

function	setBrowseButton(){
	
	var playButton = "<span><a><button class='browseButton'>BROWSE</button></a></span>";
	$( "._42nr" ).append(playButton);

}

function browseListen(){

	$( ".browseButton" ).on( 'click', function(){
	
		var port = chrome.extension.connect({name: "bridge"});
		port.postMessage("Request!");
		port.onMessage.addListener(function(msg) {
			
			console.log("message recieved: "+ msg);
			next();
			
		});
		
	});
	
}

function next(){

	var nextButton = document.getElementsByClassName("next")[0];
	nextButton.click();
	
}