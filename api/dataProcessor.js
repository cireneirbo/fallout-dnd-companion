function processDataQuickly () {
  const rawData = `
    Alien Atomizer	5500			4d6		45/365			2 lb.	Alien Power Module			20		p			3
    Alien Blaster	4000			4d6		30/240			2 lb.	Alien Power Module			10		p			3, 4, 76
    Laser Pistol	65			1d4+1		100/150			3 lb.	Small Energy Cell			30		p			1, 2, Tactics, 3, NV, 4, 76
  `;
  
  let processedData = rawData.split("\t");
  const numberOfColumns = 9;
  //console.log(processedData);
  // processedData = processedData.join(",");
  // console.log(processedData);
  // processedData = processedData.split(",");
  // console.log(processedData);
  let newData = [];
  for(let i = 0; i < processedData.length; i++) {
    //if(processedData[i].includes("")) {
      newData.push(processedData[i].trim());
      //console.log(newData)
    //}
  }
  console.log(newData)
}

processDataQuickly();
