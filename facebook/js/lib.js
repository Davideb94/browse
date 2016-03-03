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
	
	var port = chrome.extension.connect({name: "bridge"});

	$( ".browseButton" ).on( 'click', function(){
	
		port.postMessage("Start browsing");
		port.onMessage.addListener(function(msg) {
			
			console.log("message recieved: "+ msg);
			next();
			
		});
		
	});
	
	$(".stage").on( 'click', function(){
		
		document.location.reload();
		port.postMessage("Stop browsing");
		
	});
	
	$("._418x").on( 'click', function(){

		port.postMessage("Stop browsing");
		
	});
	
	//Should find a way to send "stop browsing" also when pushing exit or on the blurred container
	
}

function next(){

	var nextButton = document.getElementsByClassName("next")[0];
	nextButton.click();
	
}