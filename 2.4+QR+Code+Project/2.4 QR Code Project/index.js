/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
  .prompt([
    {
      name: 'URL', // The key name to store the answer
      message: 'Please enter the url you are looking for:', // The question to ask the user
    },
  ])
  .then((answers) => {
    // Access the user's input from the answers object
    const url = answers.URL;
    var qr_svg = qr.image(url);
   qr_svg.pipe(fs.createWriteStream('qr_img.png'));

   fs.writeFile('URL.txt', url, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 
  })
  .catch((error) => {
    console.error('Error:', error);
  });