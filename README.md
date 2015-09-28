# chrome-native-messaging-java
A Chrome Extension interacting with the Native Messaging API/Message Passing, which calls a Java program, in order to access host information, as certificate store. All this proccess is just to simulate a Java Applet scenario, without NPAPI.

**tested only on Windows.**

This application fill the requirements below:

1. Web Application `(test-ui folder)`, which exchanges messages with a Chrome Extension via JSON `(app folder)`.
2. Chrome Extension exchanges messages with the Chrome Native Messaging API `(host-dist folder)`, which calls a `.bat` and it calls a Java program `(host-project folder)` to access the Windows Certificate Store in order to list all the availabe certificates or sign documents.
3. Install and uninstall host application.

###How to test:###

1. Change line 15 and 19 in app/manifest.json for your application url.
2. Create a folder `C:\ext`, copy all the files from `host-dist` and paste there.
3. Compile the `host-project` with 'mvn package' (Maven), copy the generated jar and paste in `C:\ext`
4. Run the install_host.bat from `installer` folder.
5. Put Chrome in Developer mode, drag the `app` folder and drop in the Chrome Extensions page, in your browser. More details [here](https://developer.chrome.com/extensions/getstarted#unpacked).
6. Open the index.html from `test-ui` and be happy.

Please let me know if I miss one step or if you have faced any issues trying this.
