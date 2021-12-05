
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
});


test('draw btn', async () => {

    let button = await (await driver).findElement(By.id('draw'));
    await button.click();   
    await driver.sleep(2000) 
});

test('see all bot', async () => {

    let button = await (await driver).findElement(By.id('see-all'));
    
    await button.click();    
});
test ("add to duo button", async () => {
    await driver.sleep(2000)

    const addBtn = await driver.findElement(By.xpath("(//section/div)[2]"))
})



