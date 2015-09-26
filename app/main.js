var port = null;

function processOperation(data, sender, response) {
    try {
	    connect();

        port.postMessage( data );
        port.onMessage.addListener(response);
    }
    catch( e ) {
        console.log(e.message);
    }
    return true;
}

chrome.runtime.onMessageExternal.addListener(processOperation);

function connect(){
	if(!port) {
		var application = 'io.github.ulymarins';

		if(!chrome.runtime) {
			chrome.runtime = chrome.extension;
		}

        port = chrome.runtime.connectNative(application);

        port.onDisconnect.addListener(function() {
          console.log('Could not load the extension.');
        });
	}
}
