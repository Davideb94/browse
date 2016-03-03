chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse){
		
		var milliseconds = 3000;
		setInterval(sendRequest, milliseconds);
		
    }
);
	
function sendRequest(){

	console.log('Hey, sendRequest is working!');
	//should call next() from lib.js

}