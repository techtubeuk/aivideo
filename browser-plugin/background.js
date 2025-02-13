chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "analyze") {
    fetch("http://yourdomain.com/api/analyze?url=" + encodeURIComponent(request.url))
      .then(response => response.json())
      .then(data => {
        chrome.notifications.create({
          type: "basic",
          iconUrl: "icon.png",
          title: "Analysis Triggered",
          message: "Video analysis has been initiated."
        });
      })
      .catch(error => console.error("Error triggering analysis:", error));
  }
});