const axios = require("axios"); 
const cheerio = require("cheerio"); 
 

async function getArmors(URL) {

  // define equipment arrays with first index having each category for the array indexes
  const armorSets = [
    ["Name", "Cost(Caps)", "AC bonus", "Damage Type", "Weight", "Additional Properties"],
  ];

  // grab html data
  const pageHTML = await axios.get(URL);

  // prepare cheerio with data
  const $ = cheerio.load(pageHTML.data); 

  // hold temp data for each armor set
  let stats = [];

  // retrieving the equipment data 
  $("table.5e td").each((index, element) => { 
    
    const armor = $(element).text(); 
    if(stats.length < 6) {
      // add stat to the sub-array
      stats.push(armor);
    } else {
      // push contents to armor and begin an empty array
      armorSets.push(stats);
      stats = [];
      stats.push(armor);
      
    }
    
  }); 
  

  return armorSets;
}

async function getPowerArmors(URL) {

  // define equipment arrays with first index having each category for the array indexes
  const powerArmorSets = [
    ["Name", "Radiation", "Price", "AC", "Carry Weight"],
  ];

  // grab html data
  const pageHTML = await axios.get(URL);

  // prepare cheerio with data
  const $ = cheerio.load(pageHTML.data); 

  // hold temp data for each armor set
  let stats = [];

  // retrieving the equipment data 
  $("table.5e td").each((index, element) => { 
    
    const powerArmor = $(element).text(); 
    if(stats.length < 6) {
      // add stat to the sub-array
      stats.push(powerArmor);
    } else {
      // push contents to armor and begin an empty array
      powerArmorSets.push(stats);
      stats = [];
      stats.push(powerArmor);
      
    }
    
  }); 
  

  return armorSets;
}

async function main() {

  const armorURLToScrape = "https://www.dandwiki.com/wiki/Armor_(5e_fallout_Campaign_Setting)";

  const armors = await getArmors(armorURLToScrape);

   

    // logging the crawling results 
	  console.log([...armors]); 

    // do dark business here!
  
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
