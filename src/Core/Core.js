"use strict";

import "chromedriver";
import {
  Builder,
  By,
  Key,
  until
} from "selenium-webdriver";

const browser = "chrome";
const baseUrl = "http://epfc.local/";

class Core {
  constructor() {
    this.driver = new Builder().forBrowser(browser).build();
  }

  closeDriver() {
    this.driver.close();
  }

  async fillElementByCss(el, value) {
    try {
      await this.inspectElement(el).sendKeys(value);
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
      this.driver.wait(until.elementLocated(By.css(el)), 10000, 'Could not locate the child element within the time specified');
      return this.driver.findElement(By.css(el));
    } catch (e) {
      console.error(e);
    }
  }

  async setDelay(value) {
    try {
      return await this.driver.sleep(value * 1000);
    } catch (e) {
      console.error(e);
    }
  }

  setTimeout(value) {
    try {
      return jest.setTimeout(value * 1000);
    } catch (e) {
      console.error(e);
    }

  }

  async getBrowserUrl() {
    try {
      let $el;
      await this.driver.getCurrentUrl().then(function (currentUrl) {
        $el = currentUrl;
      });
      return $el;
    } catch (e) {
      console.log(e);
    }
  }

  async gotoPage(url) {
    try {
      await this.driver.get(`${baseUrl}${url}`); //${baseUrl}
      return true;
    } catch (e) {
      console.error(`Can not go to page '${url}'. ${e.message}`);
      return false;
    }
  }

}


export default Core;