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
      getVidName();
      getChannelName();
      getTimeCurrent();
      getTimeDuration();
      const vidUrl = tab.url;
      console.log(vidUrl);
    });
  } else {
    console.log("NOT ON A VIDEO PAGE :(");
  }
});

function getVidName() {
  chrome.tabs.executeScript(
    {
      code: `document.querySelector('#container > h1 > yt-formatted-string').textContent`,
    },
    function (results) {
      console.log(results[0]);
    }
  );
}

function getChannelName() {
  chrome.tabs.executeScript(
    {
      code: `document.querySelector('#text > a').textContent`,
      //getChannelName: `document.querySelector('#text > a').textContent`,
    },
    function (results) {
      console.log(results[0]);
    }
  );
}

function getTimeCurrent() {
  chrome.tabs.executeScript(
    {
      code: `document.querySelector('#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > div > span.ytp-time-current').textContent`,
      //getChannelName: `document.querySelector('#text > a').textContent`,
    },
    function (results) {
      console.log(results[0]);
    }
  );
}

function getTimeDuration() {
  chrome.tabs.executeScript(
    {
      code: `document.querySelector('#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > div > span.ytp-time-duration').textContent`,
      //getChannelName: `document.querySelector('#text > a').textContent`,
    },
    function (results) {
      console.log(results[0]);
    }
  );
}
