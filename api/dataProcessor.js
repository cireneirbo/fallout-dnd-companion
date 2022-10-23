function processDataQuickly () {
  let rawData = `
    Alien Atomizer	5500			4d6		45/365			2 lb.	Alien Power Module			20		p			3
    Alien Blaster	4000			4d6		30/240			2 lb.	Alien Power Module			10		p			3, 4, 76
    Laser Pistol	65			1d4+1		100/150			3 lb.	Small Energy Cell			30		p			1, 2, Tactics, 3, NV, 4, 76
  `;

  // remove tabs and newlines and create an array
  rawData = rawData.split("\t").join("\n").split("\n");
  
  // the number of columns in the original data to create sub-arrays with
  const numberOfColumns = 9;
  
  // an array to push trimmed elements of rawData to
  let trimmedData = [];

  // trim the whitespace of each element and push to trimmedData
  for(let i = 0; i < rawData.length; i++) {
     
    trimmedData.push(rawData[i].trim());
      
  }
  
  // remove the empty elements
  let processedData = trimmedData.filter(function(el) {
    return el != "";
  });

  console.log(processedData);

  for(let i = 0; i < processedData.length; i++) {
    
  }

}

processDataQuickly();
