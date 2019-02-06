class ChromeDriverManager extends DriverManager {

    chService;

     startService() {
        if (null == chService) {
            try {
                chService = new ChromeDriverService.Builder()
                    .usingDriverExecutable(new File("chromedriver.exe"))
                    .usingAnyFreePort()
                    .build();
                chService.start();
            } catch (e) {
                e.printStackTrace();
            }
        }
    }

    stopService() {
        if (null != chService && chService.isRunning())
            chService.stop();
    }

     createDriver() {
        capabilities = DesiredCapabilities.chrome();
        options = new ChromeOptions();
        options.addArguments("test-type");
        capabilities.setCapability(ChromeOptions.CAPABILITY, options);
        driver = new ChromeDriver(chService, capabilities);
    }

}