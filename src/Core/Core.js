"use strict";

import "chromedriver";
import { Builder, By, Key, until } from "selenium-webdriver";
const browser = "chrome";
const baseUrl = "http://epfc.local/";

class Core {
  constructor(url = "") {
    this.driver = new Builder().forBrowser(browser).build();
    this.driver.get(`${baseUrl}${url}`);
  }

  fillElementByCss(el, value) {
    this.inspectElement(el).sendKeys(value);
  }

  clickButton(el) {
    this.inspectElement(el).click();
  }

  inspectElement(el) {
    return this.driver.findElement(By.css(el));
  }
}

export default Core;
