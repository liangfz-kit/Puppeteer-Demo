const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.xiangqianjinfu.com/index#/index');
  const dimensions = await page.evaluate(() => {
    let data = [];
    let elements = document.getElementsByClassName('carousel__item');
    for (var element of elements)
        data.push(element);
    return data;;
  });

  console.log('Dimensions:', dimensions);

  await browser.close();
})();