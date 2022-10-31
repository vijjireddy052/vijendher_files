import { chromium } from "playwright";
 describe('Launch Browser',() => {

    test('open code', async () => {
        const browser = await chromium.launch({
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://playwright.dev/')
        await browser.close()
    })
 })