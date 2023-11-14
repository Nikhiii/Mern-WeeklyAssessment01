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
    // Test Case: Check the "pagetop" section
    await page.goto("file:///C:/Users/nikhi/Desktop/HtmlCss/WEEKLY%20ASSESSMENT%201/portfolio/solution/portfolio/index.html");
    await page.setViewport({
        width: 1200,
        height: 800,
      });
    await page.waitForSelector("section",{timeout:2000});

    await page.waitForSelector("#pagetop",{timeout:2000});

    // Check if the "MERN Stack Developer" heading exists
    const heading = await page.$eval('#pagetop h2', (element) => element.textContent);
    if (heading.includes("MERN Stack Developer")) {
      console.log("TESTCASE:section_Pagetop_Heading:success");
    } else {
      console.log("TESTCASE:section_Pagetop_Heading:failure");
    }
    }catch(e){
        console.log("TESTCASE:section_Pagetop_Heading:failure")
    }


  const page1 = await browser.newPage();
  try {
    await page1.goto("file:///C:/Users/nikhi/Desktop/HtmlCss/WEEKLY%20ASSESSMENT%201/portfolio/solution/portfolio/index.html");
    await page1.setViewport({
      width: 1200,
      height: 800,
    });
    await page1.waitForSelector("section",{timeout:2000});
    // Check if the "Explore" link exists
    const exploreLink = await page1.waitForSelector('#pagetop a.cta');
    if (exploreLink) {
      console.log("TESTCASE:section_Pagetop_Explore_Link:success");
    } else {
      console.log("TESTCASE:section_Pagetop_Explore_Link:failure");
    }

  } catch (e) {
    console.log("TESTCASE:section_Pagetop_Explore_Link:failure");
  }

  const page2 = await browser.newPage();
  try {
    await page2.goto("file:///C:/Users/nikhi/Desktop/HtmlCss/WEEKLY%20ASSESSMENT%201/portfolio/solution/portfolio/index.html");
    await page2.setViewport({
      width: 1200,
      height: 800,
    });
    // Test Case: Check the "about" section

    // Wait for the "about" section
    await page2.waitForSelector("#about",{timeout:2000});

    // Check if the "About Me" heading exists
    const heading = await page2.$eval('#about h2', (element) => element.textContent);
    if (heading.includes("About Me")) {
        console.log("TESTCASE:section_About_Heading:success");
    } else {
        console.log("TESTCASE:section_About_Heading:failure");
    }
    } catch (e) {
        console.log("TESTCASE:section_About_Heading:failure");
    }


    const page3 = await browser.newPage();
    try {
      await page3.goto("file:///C:/Users/nikhi/Desktop/HtmlCss/WEEKLY%20ASSESSMENT%201/portfolio/solution/portfolio/index.html");
      await page3.setViewport({
        width: 1200,
        height: 800,
      });
       // Check if the profile image exists
    const profileImage = await page3.waitForSelector('#about img.profile-image',{timeout:2000});
    if (profileImage) {
      console.log("TESTCASE:section_About_Profile_Image:success");
    } else {
      console.log("TESTCASE:section_About_Profile_Image:failure");
    }
    } catch (e) {
      console.log("TESTCASE:section_About_Profile_Image:failure");
    }

    const page4 = await browser.newPage();
    try {
      await page4.goto("file:///C:/Users/nikhi/Desktop/HtmlCss/WEEKLY%20ASSESSMENT%201/portfolio/solution/portfolio/index.html");
      await page4.setViewport({
        width: 1200,
        height: 800,
    });

    // Wait for the "skills" section
    await page4.waitForSelector("#skills",{timeout:2000});

    // Check if the "My Skills" heading exists
    const heading = await page4.$eval('#skills h2', (element) => element.textContent);
    if (heading.includes("My Skills")) {
      console.log("TESTCASE:section_Skills_Heading:success");
    } else {
      console.log("TESTCASE:section_Skills_Heading:failure");
    }
    } catch (e) {
      console.log("TESTCASE:section_Skills_Heading:failure");
    }

    

    const page5 = await browser.newPage();
    try {
      await page5.goto("file:///C:/Users/nikhi/Desktop/HtmlCss/WEEKLY%20ASSESSMENT%201/portfolio/solution/portfolio/index.html");
      await page5.setViewport({
        width: 1200,
        height: 800,
    });

    // Wait for the "projects" section
    await page5.waitForSelector("#projects",{timeout:2000});

    // Check if the "My Projects" heading exists
    const heading = await page5.$eval('#projects h2', (element) => element.textContent);
    if (heading.includes("My Projects")) {
      console.log("TESTCASE:section_Projects_Heading:success");
    } else {
      console.log("TESTCASE:section_Projects_Heading:failure");
    }

    } catch (e) {
      console.log("TESTCASE:section_Projects_Heading:failure");
    }

    const page6 = await browser.newPage();
    try {
      await page6.goto("file:///C:/Users/nikhi/Desktop/HtmlCss/WEEKLY%20ASSESSMENT%201/portfolio/solution/portfolio/index.html");
      await page6.setViewport({
        width: 1200,
        height: 800,
    });

    // Wait for the "contact" section
    await page6.waitForSelector("#contact",{timeout:2000});

    // Check if the "Contact Me" heading exists
    const heading = await page6.$eval('#contact h2', (element) => element.textContent);
    if (heading.includes("Contact Me")) {
      console.log("TESTCASE:section_Contact_Heading:success");
    } else {
      console.log("TESTCASE:section_Contact_Heading:failure");
    }

    } catch (e) {
      console.log("TESTCASE:section_Contact_Heading:failure");
    }

    const page7 = await browser.newPage();
    try {
      await page7.goto("file:///C:/Users/nikhi/Desktop/HtmlCss/WEEKLY%20ASSESSMENT%201/portfolio/solution/portfolio/index.html");
      await page7.setViewport({
        width: 1200,
        height: 800,
    });

      // Check if the form elements exist
      const nameInput = await page7.waitForSelector('input#name',{timeout:2000});
      const emailInput = await page7.waitForSelector('input#email',{timeout:2000});
      const messageTextarea = await page7.waitForSelector('textarea#message',{timeout:2000});
      const submitButton = await page7.waitForSelector('input[type="submit"]',{timeout:2000});
  
      if (nameInput && emailInput && messageTextarea && submitButton) {
        console.log("TESTCASE:section_Contact_Form_Elements:success");
      } else {
        console.log("TESTCASE:section_Contact_Form_Elements:failure");
      }  

    } catch (e) {
      console.log("TESTCASE:section_Contact_Form_Elements:failure");
    }

    const page8 = await browser.newPage();
    try {
      await page8.goto("file:///C:/Users/nikhi/Desktop/HtmlCss/WEEKLY%20ASSESSMENT%201/portfolio/solution/portfolio/index.html");
      await page8.setViewport({
        width: 1200,
        height: 800,
    });

     // Wait for the "footer" section
    await page8.waitForSelector("footer",{timeout:2000});

    // Check if the content within the footer is as expected
    const footerText = await page8.$eval('footer p', (element) => element.textContent);
    if (footerText.includes("2023 Developed by Jane Smith. All rights reserved.")) {
      console.log("TESTCASE:section_Footer_Content:success");
    } else {
      console.log("TESTCASE:section_Footer_Content:failure");
    }

    } catch (e) {
      console.log("TESTCASE:section_Footer_Content:failure");
    }

   finally {
    await page.close();
    await page1.close();
    await page2.close();
    await page3.close();
    await page4.close();
    await page5.close();
    await page6.close();
    await page7.close();
    await page8.close();
    await browser.close();
  }
})();
