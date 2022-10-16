const axios = require("axios"); 
const cheerio = require("cheerio"); 
 
async function main() {
  const equipmentURLsToScrape = [
    "https://www.dandwiki.com/wiki/Armor_(5e_fallout_Campaign_Setting)",
  ];

  const armors = [
    ["Name", "Cost(Caps)", "AC bonus", "Damage Type", "Weight", "Additional Properties"],
  ];

   

  for(let i = 0; i < equipmentURLsToScrape.length; i++) {
    // grab html data
    const pageHTML = await axios.get(equipmentURLsToScrape[i]);

    // prepare cheerio with data
    const $ = cheerio.load(pageHTML.data); 

    const stats = [];
    // retrieving the equipment data 
		$("table.5e td").each((index, element) => { 
      
			const armor = $(element).html(); 
			armors.push(armor); 
		}); 

    // logging the crawling results 
	  console.log([...armors]); 

    // do dark business here!
  }
}

 
// running the main() function 
main() 
	.then(() => { 
		// successful ending 
		process.exit(0); 
	}) 
	.catch((e) => { 
		// logging the error message 
		console.error(e); 
 
		// unsuccessful ending 
		process.exit(1); 
	});
