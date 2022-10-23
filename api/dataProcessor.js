function processDataQuickly () {
  let rawData = `
    Alien Atomizer	5500			4d6		45/365			2 lb.	Alien Power Module			20		p			3
    Alien Blaster	4000			4d6		30/240			2 lb.	Alien Power Module			10		p			3, 4, 76
    Laser Pistol	65			1d4+1		100/150			3 lb.	Small Energy Cell			30		p			1, 2, Tactics, 3, NV, 4, 76
  `;
  
  rawData = rawData.split("\t").join("\n").split("\n");
  console.log(rawData);
  const numberOfColumns = 9;
  //console.log(processedData);
  // processedData = processedData.join(",");
  // console.log(processedData);
  // processedData = processedData.split(",");
  // console.log(processedData);
  let trimmedData = [];
  
  for(let i = 0; i < rawData.length; i++) {
    
    //if(!processedData[i].trim().includes('')) {
      trimmedData.push(rawData[i].trim());
      //console.log(newData)
    //}
  }
  console.log(trimmedData);
  let processedData = trimmedData.filter(function(el) {
    return el != "";
  });
  // processedData = processedData.join("\n").split("\n");
  console.log(processedData);

}

processDataQuickly();
