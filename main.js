chrome.extension.onConnect.addListener(function(port) {
	
	console.log("Connected .....");
	port.onMessage.addListener(function(msg) {
		
		if(msg == "Start browsing"){
			console.log("message recieved: " + msg);
			var milliseconds = 3000;
			setInterval(function sendRequest(){

				port.postMessage("Browse it like there's no tomorrow!!!");

			}, milliseconds);
		}
		else if(msg == "Stop browsing"){
			console.log("message recieved: " + msg);
		}
		else{
			console.log("There's something wrong in the message received from lib.js");	
		}
	
	});
	
});