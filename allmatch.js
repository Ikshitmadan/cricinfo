const request=require("request");
const cheerio=require("cheerio");
const scoreCardObj=require("./scorecard");

function getallmatcheslink(url)
{
    request(url,cb);
   
    function cb(err,request,html)
{

    if(err)
    {
        console.log("err");
    }
    else{
       
        extractlink(html);
    }
}



}
function extractlink(html)
{
    let $=cheerio.load(html)
   let scorecardselement= $("a[data-hover='Scorecard']");

   
   for(let i=0;i<scorecardselement.length;i++)
   {
       let link=$(scorecardselement[i]).attr("href");
       let full_link="https://www.espncricinfo.com"+link;
    //    console.log(full_link);
    scoreCardObj.ps(full_link);


   }



}
module.exports={
gALmatches:getallmatcheslink
}