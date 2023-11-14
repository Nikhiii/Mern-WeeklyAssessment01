const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    try{
      await page.goto('https://api.example.com/');
      await page.setViewport({
        width:1200,
        height:1200,
      })
      await page.waitForSelector('header');
      await page.waitForSelector('h1');
      await page.waitForSelector('nav');
      await page.waitForSelector('ul');
      await page.waitForSelector('li');
      const href1 = await page.evaluate(
        ()=> Array.from(
            document.querySelectorAll('a[href]#home'),
            a=> a.getAttribute('href')
        )
        );
      const href2 = await page.evaluate(
        ()=> Array.from(
            document.querySelectorAll('a[href]#products'),
            a=> a.getAttribute('href')
        )
        );
      const href3 = await page.evaluate(
        ()=> Array.from(
            document.querySelectorAll('a[href]#about'),
            a=> a.getAttribute('href')
        )
        );
      const href4 = await page.evaluate(
        ()=> Array.from(
            document.querySelectorAll('a[href]#contact'),
            a=> a.getAttribute('href')
        )
        );
      console.log('TESTCASE:testcase1:success');
    }
    catch(e){
      console.log('TESTCASE:testcase1:failure');
    }
    
    const page1 = await browser.newPage();
    try{
      await page1.goto('https://api.example.com/');
      await page1.setViewport({
        width:1200,
        height:800,
      })
      await page1.waitForSelector('section');
      await page1.waitForSelector('h2');
      
    const result1 = await page1.evaluate(()=>{
        let heading = document.querySelector("#hero");
        return heading.innerHTML;
    })
    const result2 = await page1.evaluate(()=>{
        let heading = document.querySelector("#products");
        return heading.innerHTML;
    })
      console.log('TESTCASE:testcase2:success');
    }
    catch(e){
      console.log('TESTCASE:testcase2:failure');
    } 

    const page2 = await browser.newPage();
    try{
      await page2.goto('https://api.example.com/');
      await page2.setViewport({
        width:1200,
        height:800,
      })
      await page2.waitForSelector('img');
      await page2.waitForSelector('h3');
      await page2.waitForSelector('p');

      
      console.log('TESTCASE:testcase3:success');
    }
    catch(e){
      console.log('TESTCASE:testcase3:failure');
    }

  const page3 = await browser.newPage();
  try{
    await page3.goto('https://api.example.com/');
    await page3.setViewport({
      width:1200,
      height:800,
    })
    const result1 = await page1.evaluate(()=>{
        let heading = document.querySelector("#about");
        return heading.innerHTML;
    })
    const result2 = await page1.evaluate(()=>{
        let heading = document.querySelector("#contact");
        return heading.innerHTML;
    })
    console.log('TESTCASE:testcase4:success');
  }
  catch(e){
    console.log('TESTCASE:testcase4:failure');
  }

  const page4 = await browser.newPage();
  try{
    await page4.goto('https://api.example.com/');
    await page4.setViewport({
      width:1200,
      height:800,
    })
    await page2.waitForSelector('footer');
    console.log('TESTCASE:testcase5:success');
  }
  catch(e){
    console.log('TESTCASE:testcase5:failure');
  }
  
  finally{
    await page.close();
    await page1.close();
    await page2.close();
    await page3.close();
    await page4.close();
    await browser.close();
  }
  
})();