// download
download("http://jpub.tistory.com/539", "spring.html", function() {
  console.log('ok, spring.');
});

download("http://jpub.tistory.com/537", "angular.html", function() {
  console.log('ok, angular.');
});

//URLのファイルをsavePathにダウンロードする
function download(url, savePath, callback) {
  var http = require('http');
  var fs = require('fs');
  var outFile = fs.createWriteStream(savePath);

  var req = http.get(url, function(res) {
    res.pipe(outFile);
    res.on('end', function() {
      outFile.close();
      callback();
    });
  });
};
