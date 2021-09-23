const { Builder, Capabilities, By } = require("selenium-webdriver")
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const movie = "John Wick"

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
    
})

afterAll(async () => {
    await driver.quit()
})


test('should add a movie', async () => {
    let searchBar = await driver.findElement(By.name('input'))
    await searchBar.sendKeys("John Wick\n")
    await driver.sleep(500)
})

test("Should verify text", async () => {
    await driver.sleep(500)
    let movieTitle = await driver.findElement(By.xpath('//ul/li/span')).getText()
    expect(movieTitle).toEqual(movie)
    await driver.sleep(2000)
})

test("should cross off a movie", async () => {
    await driver.sleep(500)
    let button = await driver.findElement(By.xpath("//ul/li/span"))
    await button.click()
})

test("should remove the movie", async () => {
    await driver.sleep(500)
    let button = await driver.findElement(By.id("JohnWick"))
    await button.click()
    await driver.sleep(2000)
})

// test("Should return an interesting result", async () => {
//     await driver.get('http://google.com');
//     let searchBar = await driver.findElement(By.name('q'))
//     await searchBar.sendKeys('Never Gonna Give You Up\n')
//     let link = await driver.findElement(By.xpath(`//*[@id="kp-wp-tab-overview"]/div[1]/div/div/div/div/div/div/div[2]/h3/a/h3`))
//     await link.click()
//     await driver.sleep(10000)
//     let play = await driver.findElement(By.xpath(`//*[@id="movie_player"]/div[33]/div[2]/div[1]/button`))
//     await play.click()
//     await driver.sleep(26500)
// })
