// URLのファイルをsavePathにダウンロードする。
var url = "http://google.co.jp";
var savePath = "test.html";

var http = require('http');
var fs = require('fs');

var outFile = fs.createWriteStream(savePath);

http.get(url, function(response) {
  response.pipe(outFile);
  response.on('end', function() {
    outFile.close();
    console.log('response success');
  });
});
