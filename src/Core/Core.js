"use strict";

import "chromedriver";
import { Builder, By, Key, until } from "selenium-webdriver";
import { resolve } from "url";
import { rejects } from "assert";

const browser = "chrome";
const baseUrl = "http://epfc.local/";

class Core {
  constructor(url="") {
    this.driver = new Builder().forBrowser(browser).build();
    this.gotoPage(url);
  }
  
  async gotoPage(url) {
    this.driver.get(`${baseUrl}${url}`);
  }

  inspectElement(el) {
    return this.driver.findElement(By.css(el));
  }

  fillElementByCss(el, value) {
    this.inspectElement(el).sendKeys(value);
  }

  async getElementText (el) {
    try {
      const $el = await this.inspectElement(el);
      return $el.getText();
    }
    catch (e) {
      console.log (e);
    }
  }

  clickButton(el) {
    this.inspectElement(el).click();
  }

  getTimeout(timeout) {
     this.driver.sleep(timeout);
  }

  async waitUntilElementIsVisible (el) {
    try {
      await this.driver.wait(until.elementLocated(By.css(el), 2000, 'messssssage'));
    } catch (e) {
      console.log(e);
    }
  } 
  
}
export default Core;