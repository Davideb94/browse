chrome.extension.onConnect.addListener(function(port) {
	
	var milliseconds = 3000;
	var interval = 'init';
	console.log(interval);
	
	console.log("Connected .....");
	port.onMessage.addListener(function(msg) {
		
		if(msg == "Start browsing"){
			console.log("message recieved: " + msg);
			port.postMessage("Browse it like there's no tomorrow!!!");
			interval = setInterval(function sendRequest(){

				port.postMessage("Browse it like there's no tomorrow!!!");

			}, milliseconds);
			console.log(interval);
		}
		else if(msg == "Stop browsing"){
			console.log("message recieved: " + msg);
			clearInterval(interval);
			console.log(interval);
		}
		else{
			console.log("There's something wrong in the message received from lib.js");	
		}
	
	});
	
});