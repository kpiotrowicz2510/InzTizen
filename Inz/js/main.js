window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
    //var mainPage = document.querySelector('#main');

    //mainPage.addEventListener("click", function() {
      //  var contentText = document.querySelector('#content-text');

        //contentText.innerHTML = (contentText.innerHTML === "Basic") ? "Tizen" : "Basic";
    //});
    
    var listener = {
    onprogress: function(id, receivedSize, totalSize) {
        console.log('Received with id: ' + id + ', ' + receivedSize + '/' + totalSize);
      },
      onpaused: function(id) {
        console.log('Paused with id: ' + id);
      },
      oncanceled: function(id) {
        console.log('Canceled with id: ' + id);
      },
      oncompleted: function(id, fullPath) {
        console.log('Completed with id: ' + id + ', full path: ' + fullPath);
      },
      onfailed: function(id, error) {
        console.log('Failed with id: ' + id + ', error name: ' + error.name);
      }
    };
    var contentText = document.querySelector('#content-text');
    webapis.motion.start("HRM", onchangedCB);
    contentText.innerHTML = "start";
    //var wifi_capability = tizen.systeminfo.getCapability("http://tizen.org/feature/network.wifi");
    // var wifiDownloadRequest = new tizen.DownloadRequest("http://download.tizen.org/tools/README.txt", "documents", null, "WIFI");
    //contentText.innerHTML = "req";
    //if (wifi_capability === true) {
       // var downlodId_wifi = tizen.download.start(wifiDownloadRequest, listener);
    //} else {
        // If you call tizen.download.start(), NotSupportedError will be thrown.
    //    console.log("This device doesn't support Download API through Wi-Fi.");
    //}
        contentText.innerHTML = "reqs";
    function onchangedCB(hr){
    	var wifiDownloadRequest = new tizen.DownloadRequest("http://192.168.0.18:5000/Home/SetHr/"+hr.heartRate, "documents", null, "WIFI");
        contentText.innerHTML = hr.heartRate+"";
        //if (wifi_capability === true) {
            var downlodId_wifi = tizen.download.start(wifiDownloadRequest, listener);
    //	contentText.innerHTML = "hr:"+hr.heartRate + "int:"+hr.rRInterval;
    }
};