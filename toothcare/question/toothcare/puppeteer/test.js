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
    await page.waitForSelector("nav");
    await page.waitForSelector("ul");
    await page.waitForSelector("a");

    console.log("TESTCASE:HTML_tags:success");
  } catch (e) {
    console.log("TESTCASE:HTML_tags:failure");
  }

  const page1 = await browser.newPage();
  try {
    await page1.goto("https://api.example.com/");
    await page1.setViewport({
      width: 1200,
      height: 800,
    });

    await page1.waitForSelector("img");
    await page1.waitForSelector("h1");
    await page1.waitForSelector("footer");

    console.log("TESTCASE:HTML_tags:success");
  } catch (e) {
    console.log("TESTCASE:HTML_tags:failure");
  }

  const page2 = await browser.newPage();
  try {
    await page2.goto("https://api.example.com/");
    await page2.setViewport({
      width: 1200,
      height: 800,
    });
    const result1 = await page2.evaluate(() => {
      let heading = document.querySelector("#home");
      return heading.innerHTML;
    });
    const result3 = await page2.evaluate(() => {
      let heading = document.querySelector("#services");
      return heading.innerHTML;
    });
    const result4 = await page2.evaluate(() => {
      let heading = document.querySelector(".service");
      return heading.innerHTML;
    });
    const result5 = await page2.evaluate(() => {
      let heading = document.querySelector("#btn-1");
      return heading.innerHTML;
    });
    const result6 = await page2.evaluate(() => {
      let heading = document.querySelector("#btn-2");
      return heading.innerHTML;
    });
    console.log("TESTCASE:CSS_Id_Class_names:success");
  } catch (e) {
    console.log("TESTCASE:CSS_Id_Class_names:failure");
  } finally {
    await page.close();
    await page1.close();
    await page2.close();
    await browser.close();
  }
})();
