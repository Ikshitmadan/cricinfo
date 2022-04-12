const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const fs=require("fs");
const request=require("request");
const path=require("path");
const cheerio=require("cheerio");
const allMatchobj=require("./allmatch");
const iplpath=path.join(__dirname,"ipl");
dircreator(iplpath);
request(url,cb);

function cb(err,request,html)
{

    if(err)
    {
        console.log("err");
    }
    else{
       
        extract(html);
    }
}
function extract(html)
{

    let $=cheerio.load(html);
  let cl= $(".widget-items.cta-link");
 let link= $(cl).find("a").attr("href");
 let full_link="https://www.espncricinfo.com"+link;
//  console.log(full_link);

  getallmatcheslink(full_link);
 allMatchobj.gALmatches(full_link);
}

function dircreator(filePath)
{
    if(fs.existsSync(filePath)==false)
    {
        fs.mkdirSync(filePath)
    }

}