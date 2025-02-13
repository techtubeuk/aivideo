(function() {
  if (document.querySelector("video")) {
    let btn = document.createElement("button");
    btn.innerText = "Analyze Video";
    btn.style.position = "fixed";
    btn.style.top = "10px";
    btn.style.right = "10px";
    btn.style.zIndex = "10000";
    btn.onclick = function() {
      let videoUrl = window.location.href;
      chrome.runtime.sendMessage({action: "analyze", url: videoUrl});
    };
    document.body.appendChild(btn);
  }
})();