import { chromium } from "playwright";

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto("https://hollowknight.wiki/w/Category:Bosses_(Hollow_Knight)",{ waitUntil: 'domcontentloaded' });
    
    const products = await page.$$eval("tbody  > tr", (results) =>
        results
            .map((el) => {
                const image = el.querySelector("td > figure > a > img")?.getAttribute("src");
                
                return { image};
            })
            .filter((item) => item !== null)
    );
    
    console.log(products);
    await browser.close();
})();

