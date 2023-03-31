WebDriver driver;

void setupChromeDriver() {
    System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver.exe");
    driver = new ChromeDriver();
    options();
}

void options() {
    driver.manage().window().maximize();
}