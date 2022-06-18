let url='https://www.worldometers.info/coronavirus/';
const request=require('request');  //module for request the data from server
const cheerio=require('cheerio');   //process and extract the html data
const chalk=require('chalk');    //for customising the text,!!use version 4.1.2 
console.log('before');
request(url,callback);    
//html data
function callback(error,response,html){
    if(error){
        console.log('there is an error');
    }
    else{
        // console.log(html);     //can store this data in a file using os module
        htmlHandler(html);
    }
}

function htmlHandler(html){
    let seltools=cheerio.load(html);
    // let h1s=seltools('h1');
    // console.log(h1s.length);
    let contentArr=seltools('#maincounter-wrap span');
    // for(let i=0;i<contentArr.length;i++){
    //     let data=seltools(contentArr[i]).text();
    //     console.log('data is ',data);
    // }
    //printing data and customising it with chalk module
    console.log(chalk.whiteBright('Active cases '),chalk.yellow(seltools(contentArr[0]).text()));
    console.log(chalk.whiteBright('deaths '),chalk.red(seltools(contentArr[1]).text()));
    console.log(chalk.bold('recovered '),chalk.bgGreenBright(seltools(contentArr[2]).text()));
}
console.log('after');