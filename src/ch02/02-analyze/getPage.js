// load module
var client = require('cheerio-httpcli');

// download
var url = "http://jpub.tistory.com";
var param = {};

client.fetch(url, param, function(err, $, res) {
  // check errors
  if (err) {
    console.log("Error: ", err); return;
  }

  // displays downloaded data
  var body = $.html();
  console.log(body);
});
