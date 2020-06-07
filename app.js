function doInCurrentTab(tabCallback) {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabArray) {
    tabCallback(tabArray[0]);
  });
}

doInCurrentTab((tab) => {
  console.log(tab);
  if (tab.url.includes("https://www.youtube.com/watch?v=")) {
    console.log("ON A VIDEO PAGE! :)");
    const addBtn = document.querySelector(".add-video-btn");
    addBtn.classList.remove("hide");
    addBtn.addEventListener("click", () => {
      const vidUrl = tab.url;
      const vidName = tab.title.slice(0, tab.title.length - 10);
      console.log(vidUrl, vidName);
    });
  } else {
    console.log("NOT ON A VIDEO PAGE :(");
  }
});
