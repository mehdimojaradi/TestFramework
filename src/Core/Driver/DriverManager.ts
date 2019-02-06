public abstract class DriverManager {

    protected driver;
    protected abstract startService();
    protected abstract stopService();
    protected abstract createDriver();

    public void quitDriver() {
        if (null != this.driver) {
            this.driver.quit();
            this.driver = null;
        }

    }

    public getDriver() {
        if (null == driver) {
            startService();
            createDriver();
        }
        return driver;
    }
}