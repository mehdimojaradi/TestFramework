"use strict";

import "chromedriver";
import { By, until } from "selenium-webdriver";
import WebBrowserFactory from "./WebBrowserFactory";
import Profile from "./Profile";

class Core {
  constructor() {
    this.webBrowser = new WebBrowserFactory();
    this.driver = this.webBrowser.create(Profile.browser);
    jest.setTimeout(30000);
  }

  closeDriver() {
    this.driver.quit();
  }

  async fillElementByCss(el, value) {
    try {
      let $el = await this.inspectElement(el);
      await $el.clear();
      await $el.sendKeys(value);
    } catch (e) {
      console.error(e);
    }
  }

  async getElementText(el) {
    try {
      const $el = await this.inspectElement(el);
      return $el.getText();
    } catch (e) {
      console.log(e);
    }
  }

  async clickButton(el) {
    await this.inspectElement(el).click();
  }

  inspectElement(el) {
    try {
      return this.driver.findElement(By.css(el));
    } catch (e) {
      console.error(e);
    }
  }

  async waitForElement(el) {
    try {
      await this.driver.wait(
        until.elementLocated(By.css(el)),
        20000,
        `Could not locate the element "${el}"`
      );
    } catch (e) {
      console.error(e);
    }
  }

  async hasClass(el) {
    try {
      const $el = await this.driver.findElement(By.className(el));
      return await $el.isDisplayed();
    } catch (e) {
      return false;
    }
  }

  async IsDisplayed(el) {
    try {
      const $el = await this.inspectElement(el);
      return await $el.isDisplayed();
    } catch (e) {
      return false;
    }
  }

  async setDelay(sleep) {
    try {
      return await this.driver.sleep(sleep);
    } catch (e) {
      console.error(e);
    }
  }

  setJestTimeout(timeout) {
    try {
      return jest.setTimeout(timeout);
    } catch (e) {
      console.error(e);
    }
  }

  async getBrowserUrl() {
    try {
      let $el;
      await this.driver.getCurrentUrl().then(function(currentUrl) {
        $el = currentUrl;
      });
      return $el;
    } catch (e) {
      console.log(e);
    }
  }

  async gotoPage(url) {
    try {
      await this.driver.get(`${Profile.baseUrl}${url}`);
      return true;
    } catch (e) {
      console.error(`Can not go to page '${url}'. ${e.message}`);
      return false;
    }
  }

  async getSelectedValue(el, option) {
    try {
      const query = `document.querySelector('${el}').options[document.querySelector('${el}').selectedIndex].text = "${option}"`;
      await this.driver.executeScript(query);
    } catch (e) {
      console.log(e);
    }
  }
}

export default Core;
