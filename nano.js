var https = require('https');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');





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
              title:child.data.title, url:child.data.url
            })
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


// // // --------------------------------------------------------

function getHackernews() {
  return new Promise((resolve, reject) => {
      var url = 'https://news.ycombinator.com/';
      var request = https.get(url, function(response) {
        var chunks = [];
        response.on('data', function(chunk) {
          chunks.push(chunk);
        });
        response.on('end', function() {
          var titles = [];
          var html = iconv.decode(Buffer.concat(chunks), 'utf-8');
          var $ = cheerio.load(html, {decodeEntities: false});
          $('.itemlist .storylink').each(function (idx, element) {
            var $element = $(element);
            titles.push({
              title: $element.text(), url:$element.attr("href")
            })
          })
          console.log(titles); 
          resolve(titles); 
        });
      });
      request.on('error', function(err) {
      console.log(err);
      reject(err)
    })
  })
}

function getSlashdot() {
  return new Promise((resolve, reject) => {
      var url = 'https://slashdot.org/';
      var request = https.get(url, function(response) {
        var chunks = [];
        response.on('data', function(chunk) {
          chunks.push(chunk);
        });
        response.on('end', function() {
          var titles = [];
          var html = iconv.decode(Buffer.concat(chunks), 'utf-8');
          var $ = cheerio.load(html, {decodeEntities: false});
          $('.container .story-title').each(function (idx, element) {
            var $element = $(element);
            titles.push({
              title: $element.text(), url:$element.find("a").attr("href")
            })
          })   
          resolve(titles);    
        });
      });
      request.on('error', function(err) {
      console.log(err);
      reject(err)
    })
  })
}

function getMedium() {
  return new Promise((resolve, reject) => {
      var url = 'https://medium.com/topic/technology';
      var request = https.get(url, function(response) {
        var chunks = [];
        response.on('data', function(chunk) {
          chunks.push(chunk);
        });
        response.on('end', function() {
          var titles = [];
          var html = iconv.decode(Buffer.concat(chunks), 'utf-8');
          var $ = cheerio.load(html, {decodeEntities: false});
          $('#container .u-flex0.u-sizeFullWidth').each(function (idx, element) {
            var $element = $(element);
            titles.push({
              title: $element.text(), url:$element.find("a").attr("href")
            })
          })   
          resolve(titles);    
        });
      });
      request.on('error', function(err) {
      console.log(err);
      reject(err)
    })
  })
}




// function getSlashdot() {
//   return new Promise((resolve, reject) => {
//       var url = 'https://slashdot.org/';
//       var request = https.get(url, function(response) {
//         var chunks = [];
//         sres.on('end', function() {
//           var titles = [];
//           var html = iconv.decode(Buffer.concat(chunks), 'utf-8');
//           var $ = cheerio.load(html, {decodeEntities: false});
//           $('.container .story-title').each(function (idx, element) {
//             var $element = $(element);
//             titles.push({
//               title: $element.text(), url:$element.find("a").attr("href")
//             })
//           })       
//         });
//         resolve(titles);
//       });
//       request.on('error', function(err) {
//       console.log(err);
//       reject(err)
//     })
//   })
// }

// function getMedium() {
//   return new Promise((resolve, reject) => {
//       var url = 'https://medium.com/topic/technology';
//       var request = https.get(url, function(response) {
//         var chunks = [];
//         sres.on('data', function(chunk) {
//           chunks.push(chunk);
//         });
//         sres.on('end', function() {
//           var titles = [];
//           var html = iconv.decode(Buffer.concat(chunks), 'utf-8');
//           var $ = cheerio.load(html, {decodeEntities: false});
//           $('#container .u-flex0.u-sizeFullWidth').each(function (idx, element) {
//             var $element = $(element);
//             titles.push({
//               title: $element.text(), url:$element.find("a").attr("href")
//             })
//           })       
//         });
//         console.log(titles);
//         resolve(titles);
//       });
//       request.on('error', function(err) {
//       console.log(err);
//       reject(err)
//     })
//   })
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
//       $('.itemlist .storylink').each(function (idx, element) {
//         var $element = $(element);
//         titles.push({
//           title: $element.text(), url:$element.find("a").attr("href")
//         })
//       })   
//       console.log(titles);      
//     });
//   });
// }
// getHackernews();


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


exports.getReddit = getReddit;
exports.getSlashdot = getSlashdot;
exports.getMedium = getMedium;
exports.getHackernews = getHackernews;

