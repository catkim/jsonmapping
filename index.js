const fs = require("fs"); 

const fileContents = fs.readFileSync("har file goes here");
const jsonContents = JSON.parse(fileContents); 
const resources = jsonContents.log.entries.map(entry => entry._resourceType);
const getResources = jsonContents.log.entries.forEach(element => {
    if(element._resourceType == 'image')
    console.log(element.request.url + '\r');
});

