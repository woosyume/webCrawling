// URLのファイルをsavePathにダウンロードする。
var url = "https://woosyume.atlassian.net";
var savePath = "test.html";

var https = require('https');
var fs = require('fs');

var outFile = fs.createWriteStream(savePath);

https.get(url, function(response) {
  response.pipe(outFile);
  response.on('end', function() {
    outFile.close();
    console.log('response success');
  });
}); 
