const fs = require('fs');


let rawDataString = `
    Alien Atomizer	5500			4d6		45/365			2 lb.	Alien Power Module			20		p			3
    Alien Blaster	4000			4d6		30/240			2 lb.	Alien Power Module			10		p			3, 4, 76
    Laser Pistol	65			1d4+1		100/150			3 lb.	Small Energy Cell			30		p			1, 2, Tactics, 3, NV, 4, 76
  `;

let numberOfColumnsInData = 9;

function createArrayFromRawData(rawData) {

  // remove tabs and newlines and create an array
  rawData = rawData.split("\t").join("\n").split("\n");
  
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

  return processedData;
}

function splitArrayIntoSubArrays(num) {

  // all processed data in a single array, needing to be put into an array with sub arrays
  let singleArray = createArrayFromRawData(rawDataString);
  
  // the number of columns in the original data to create sub-arrays with
  const numberOfColumns = num;

  //hold the temporary array before adding to splitArrays
  let tempSubArray = [];

  // cycle through all elements of singleArray
  for(let i = 0; i < singleArray.length; i++) {

    // add the current element of singleArray to the tempSubArray
    tempSubArray.push(singleArray[i]);      

    // add tempSubArray to splitArrays every numberOfColumns
    if(tempSubArray.length == numberOfColumns) {
      //write each line to output.txt to be used for js arrays
      fs.appendFileSync('output.txt', "['" + tempSubArray[0] + "', '" + tempSubArray[1] + "', '" + tempSubArray[2] + "', '" + tempSubArray[3] + "', '" + tempSubArray[4] + "', '" + tempSubArray[5] + "', '" + tempSubArray[6] + "', '" + tempSubArray[7] + "', '" + tempSubArray[8] + "'],\n");
      tempSubArray = [];
    }

  }

}

function processDataQuickly () {
  
  //createArrayFromRawData(rawDataString);

  splitArrayIntoSubArrays(numberOfColumnsInData);

}

processDataQuickly();
