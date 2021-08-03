const request = require("request-promise");
const cheerio = require("cheerio");

async function scrape() {
  const url = "https://allentown.craigslist.org/d/appliances/search/ppa?s=";
  for (let i = 0; i <= 360; i = i + 120) {
    const html = await request.get(url + i);
    const $ = await cheerio.load(html);
    $(".result-heading").each((index, element) =>
      console.log($(element).text())
    );
    console.log("At page number " + i);
  }
}

scrape();
