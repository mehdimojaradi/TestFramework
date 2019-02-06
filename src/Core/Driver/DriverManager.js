 class DriverManager {
    driver;
    startService();
    stopService();
    createDriver();

    quitDriver() {
        if (null != driver) {
            driver.quit();
            driver = null;
        }

    }

    getDriver() {
        if (null == driver) {
            startService();
            createDriver();
        }
        return driver;
    }
}

export default DriverManager;