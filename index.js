const express = require("express");
const app = express();
const getReddit = require('./nano.js').getReddit
// const getHackerNews = require('./nano.js').getHackernews
// const getMedium = require('./nano.js').getMedium
// const getSlashdot = require('./nano.js').getSlashdot



app.get("/", function(req, res) {
    res.sendfile('./public/index.html')
});


app.get("/links/:website",function(req,res){

  const q = getReddit();

  else if(req.params.website == "hackernews"){
    const q = getHackernews();
  }
  else if(req.params.website == "medium"){
    const q = getMedium();
  }
  else if(req.params.website == "slashdot"){
    const q = getSlashdot();
  }

  q.then((data) => {
    res.send(data);
  });
})



app.use(express.static('public'))

app.listen(3000, function() {
 console.log("Listening on " + 3000);
});