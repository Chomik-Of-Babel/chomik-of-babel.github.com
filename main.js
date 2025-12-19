document.getElementById("main").innerHTML=LocalFileData("pi.fart").toString();
function LocalFileData(path) {
  this.arrayBuffer = (() => {
    var buffer = require('fs').readFileSync(path);
    var arrayBuffer = buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
    return [arrayBuffer];
  })();

  this.name = require('path').basename(path);

  this.type = require('mime-types').lookup(require('path').extname(path)) || undefined;
}
