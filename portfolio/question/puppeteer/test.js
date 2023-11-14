const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      "--headless",
      "--disable-gpu",
      "--remote-debugging-port=9222",
      "--no-sandbox",
      "--disable-setuid-sandbox",
    ],
  });
  const page = await browser.newPage();
  try {
    await page.goto("https://api.example.com/");
    await page.setViewport({
      width: 1200,
      height: 800,
    });
    await page.waitForSelector("section");
    await page.waitForSelector("h2");
    await page.waitForSelector("p");

    console.log("TESTCASE:Basic_tags:success");
  } catch (e) {
    console.log("TESTCASE:Basic_tags:failure");
  }

  const page1 = await browser.newPage();
  try {
    await page1.goto("https://api.example.com/");
    await page1.setViewport({
      width: 1200,
      height: 800,
    });

    await page1.waitForSelector("img");
    await page1.waitForSelector("form");
    await page1.waitForSelector("footer");

    console.log("TESTCASE:Basic_tags:success");
  } catch (e) {
    console.log("TESTCASE:Basic_tags:failure");
  }

  const page2 = await browser.newPage();
  try {
    await page2.goto("https://api.example.com/");
    await page2.setViewport({
      width: 1200,
      height: 800,
    });
    const result1 = await page2.evaluate(() => {
      let heading = document.querySelector("#pagetop");
      return heading.innerHTML;
    });
    const result3 = await page2.evaluate(() => {
      let heading = document.querySelector("#about");
      return heading.innerHTML;
    });
    const result4 = await page2.evaluate(() => {
      let heading = document.querySelector("#skills");
      return heading.innerHTML;
    });
    const result5 = await page2.evaluate(() => {
      let heading = document.querySelector(".skill");
      return heading.innerHTML;
    });
    const result6 = await page2.evaluate(() => {
      let heading = document.querySelector("#name");
      return heading.innerHTML;
    });
    console.log("TESTCASE:Id_Class_names:success");
  } catch (e) {
    console.log("TESTCASE:Id_Class_names:failure");
  }

   finally {
    await page.close();
    await page1.close();
    await page2.close();
    await browser.close();
  }
})();
