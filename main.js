chrome.extension.onConnect.addListener(function(port) {
	
	console.log("Connected .....");
	port.onMessage.addListener(function(msg) {
		
		console.log("message recieved: "+ msg);
		var milliseconds = 3000;
		setInterval(function sendRequest(){

			port.postMessage("Browse it like there's no tomorrow!!!");

		}, milliseconds);
		
	});
	
});