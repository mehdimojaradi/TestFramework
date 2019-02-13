import { Builder } from "selenium-webdriver";

const screen = {
  width: 1280,
  height: 1024
};

class WebBrowserFactory {
  create(browserType) {
    switch (browserType) {
      case "chrome":
        return new Builder().forBrowser("chrome").build();
      case "chrome-headless":
        const chrome = require("selenium-webdriver/chrome");
        return new Builder()
          .forBrowser("chrome")
          .setChromeOptions(new chrome.Options().headless().windowSize(screen))
          .build();
      case "firefox":
        return new Builder().forBrowser("firefox").build();
      case "firefox-headless":
        const firefox = require("selenium-webdriver/firefox");
        return new Builder()
          .forBrowser("firefox")
          .setFirefoxOptions(
            new firefox.Options().headless().windowSize(screen)
          )
          .build();
    }
  }
}

export default WebBrowserFactory;
