/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qrImage from 'qr-image';
import inquirer from 'inquirer';
import fs from 'fs';
import input from '@inquirer/input';




function readLinksFromTxt(path){

    fs.readFile('URL.txt','utf8',(err,data) =>{

        if (err) throw err;
        createQrCode(data);
        

    });
}


function createQrCode(textInput){

    var qr_png = qrImage.image(textInput, {type: 'png'});

    qr_png.pipe(fs.createWriteStream("qrImage.png"));

}

//createQrCode("text");

function writeLinkToFile(textFromUser){

    fs.writeFile('URL.txt',textFromUser,(err) => {


        if (err) throw err;

    });

}



function main(){


    
    writeLinkToFile(answer);
    readLinksFromTxt("URL.txt");
    //readLinksFromTxt("URL.txt");

}

const answer = await input({ message: 'Enter the text which is you want to create a qr code from: ' });
main();
