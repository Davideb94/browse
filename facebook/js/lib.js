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
	
		chrome.extension.sendRequest({ msg: "browse it!!!" });
		next(); //Actually the main.js should call this function... from the sendRequest
		
	});
	
}

function next(){

	var nextButton = document.getElementsByClassName("next")[0];
	nextButton.click();
	
}