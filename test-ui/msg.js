var extId = "knldjmfmopnpolahpmmgbagdohdnhkik";

function sendExtMessageCert() {
    chrome.runtime.sendMessage(extId, {type: "cert"},
      function(response) {

        if (!response.success)
          console.log("worked");

        if (response.success)
          alert('ok');

        document.getElementById('response').innerHTML += "<p>" + JSON.stringify(response) + "</p>";
      });
}

function sendExtMessageSign() {
    chrome.runtime.sendMessage(extId, {type: "sign", content: "<signedingoajdkasd>", thumbprint: "c914cafe6b7ec2d01a0c709ec4e7a4afa0081e67"},
      function(response) {
        if (!response.success)
          console.log("did not work");

        if (response.success)
          alert('ok');

        document.getElementById('response').innerHTML += "<p>" + JSON.stringify(response) + "</p>";
      });
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('sign-button').addEventListener(
      'click', sendExtMessageSign);
  document.getElementById('cert-button').addEventListener(
      'click', sendExtMessageCert);
});
