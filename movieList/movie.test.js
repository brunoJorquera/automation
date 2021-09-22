const { Builder, Capabilities, By } = require("selenium-webdriver")
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
    
})

afterAll(async () => {
    await driver.quit()
})


test('Show movie page??', async () => {
    let searchBar = await driver.findElement(By.name('input'))
    await searchBar.sendKeys("John Wick\n")
    let button = await driver.findElement(By.name("button"))
    await button.click()
    await driver.sleep(2000)
})
