const fs = require('fs'); // pull in file system module

const index = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getDankmeme = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(index);
  response.end();
};

module.exports.getDankmeme = getDankmeme;
