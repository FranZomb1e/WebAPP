var https = require('https');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');

// $("#Reddit").click(function(){
//   title = [];
//   getRedditPosts();
  
// })

// $("#Hacknews").click(function(){
//   title = [];
//   getHacknews();

// })

// $("#Medium").click(function(){
//   title = [];
//   getMedium();
  
// })

// $("#Slahdot").click(function(){
//   title = [];
//   getSlashdot();
  
// })




function getReddit() {
  return new Promise((resolve, reject) => {
    var url = "https://www.reddit.com/r/all/new/.json?limit=10";
    var request = https.get(url, function(response) {
      var json = '';
      response.on('data', function(chunk) {
        json += chunk;
      });

      response.on('end', function() {
        var redditResponse = JSON.parse(json);
        var titles = [];
        redditResponse.data.children.forEach(function(child) {
          if(child.data.domain !== 'self.node') {
            titles.push({
              titile:child.data.title, url:child.data.url
            })
            // console.log('-------------------------------');
            // console.log('Author : ' + child.data.author);
            // console.log('Domain : ' + child.data.domain);
            // console.log('Title : ' + child.data.title);
            // console.log('URL : ' + child.data.url);
          
            // document.getElementByTagName("article").innerHTML = result;

          }
        });
        resolve(titles);
      })
    });
    request.on('error', function(err) {
      console.log(err);
      reject(err)
    });
  })
}


// // --------------------------------------------------------

// function getHacknews() {

//   var url = 'https://news.ycombinator.com/';

//   fetch(url)
//     .then(
//       function(response){
//         if(response.status !== 200){
//           console.log(response.text());
//         }
//       },
//       (err) => {
//         console.error(err)
//       }
//   )
//   }

//     sres.on('end', function() {
//       var titles = [];

//       var html = iconv.decode(Buffer.concat(chunks), 'utf-8');
//       var $ = cheerio.load(html, {decodeEntities: false});
//       $('.itemlist .storylink').each(function (idx, element) {
//         var $element = $(element);
//         titles.push({
//           title: $element.text(), url:$element.attr("href")
//         })
//       })
//       console.log(titles);     

//     });
//   });
// }


// function getHackernews() {
//   var iconv = require('iconv-lite');
//   var url = 'https://news.ycombinator.com/';

//   https.get(url, function(sres) {
//     var chunks = [];
//     sres.on('data', function(chunk) {
//       chunks.push(chunk);
//     });
//     sres.on('end', function() {
//       var titles = [];

//       var html = iconv.decode(Buffer.concat(chunks), 'utf-8');
//       var $ = cheerio.load(html, {decodeEntities: false});
//       $('.itemlist .story-title').each(function (idx, element) {
//         var $element = $(element);
//         titles.push({
//           title: $element.text(), url:$element.find("a").attr("href")
//         })

//       })       
//     });
//   });
// }


// function getSlashdot() {
//   var iconv = require('iconv-lite');
//   var url = 'https://slashdot.org/';

//   https.get(url, function(sres) {
//     var chunks = [];
//     sres.on('data', function(chunk) {
//       chunks.push(chunk);
//     });
//     sres.on('end', function() {
//       var titles = [];

//       var html = iconv.decode(Buffer.concat(chunks), 'utf-8');
//       var $ = cheerio.load(html, {decodeEntities: false});
//       $('.container .story-title').each(function (idx, element) {
//         var $element = $(element);
//         titles.push({
//           title: $element.text(), url:$element.find("a").attr("href")
//         })

//       })       
//     });
//   });
// }


// function getMedium(){
//   var iconv = require('iconv-lite');
//   var url = 'https://medium.com/topic/technology';

//   https.get(url, function(sres) {
//     var chunks = [];
//     sres.on('data', function(chunk) {
//       chunks.push(chunk);
//     });
//     // chunks里面存储着网页的 html 内容，将它zhuan ma传给 cheerio.load 之后
//     // 就可以得到一个实现了 jQuery 接口的变量，将它命名为 `$`
//     // 剩下就都是 jQuery 的内容了
//     sres.on('end', function() {
//        var titles = [];

//       var html = iconv.decode(Buffer.concat(chunks), 'utf-8');
//       var $ = cheerio.load(html, {decodeEntities: false});
//       $('#container .u-flex0.u-sizeFullWidth').each(function (idx, element) {
//         var $element = $(element);
//         titles.push({
//           title: $element.text(), url:$element.find("a").attr("href")
//         })

//       })    
//     });
//   });
// }

// exports.getMedium = getMedium;
exports.getReddit = getReddit;
// exports.getSlashdot = getSlashdot;
// exports.getMedium = getMedium;
