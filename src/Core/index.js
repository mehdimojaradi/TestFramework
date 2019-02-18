"use strict";

import "chromedriver";
import { By, until, Key } from "selenium-webdriver";
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
      await this.waitForElement(el);
      let $el = await this.inspectElement(el);
      await $el.sendKeys(value);
    } catch (e) {
      console.error(e);
    }
  }

  async pressEnter(el) {
    try {
      let $el = await this.inspectElement(el);
      await $el.sendKeys(Key.ENTER);
    } catch (e) {
      console.error(e);
    }
  }

  async getElementText(el) {
    try {
      await this.waitForElement(el);
      const $el = await this.inspectElement(el);
      return $el.getText();
    } catch (e) {
      console.log(e);
    }
  }

  async clickButton(el) {
    await this.waitForElement(el);
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

  async isElementHidden(el) {
    const $el = await this.isCurrentlyDisplayed(el);
    return !$el;
  }

  async isElementDisplayed(el) {
    await this.waitForElement(el);
    return await this.isCurrentlyDisplayed(el);
  }

  async isCurrentlyDisplayed(el) {
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

  async getSelectedValue(el, value) {
    try {
      await this.waitForElement(el);
      const query = `$('${el}').val(${value}).change()`;
      await this.driver.executeScript(query);
    } catch (e) {
      console.error(e);
    }
  }

  async selectFromDropdown(el, value) {
    const valueSelected = `${el} option[value='${value}']`;
    await this.waitForElement(el);
    await this.clickButton(el);
    await this.clickButton(valueSelected);
  }

  async extractFromJavaScript(javascriptExpression) {
    let javascriptResult = await this.driver.executeScript(
      javascriptExpression
    );
    return javascriptResult;
  }
}

export default Core;
