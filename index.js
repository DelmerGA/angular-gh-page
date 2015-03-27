var ncp = require('ncp').ncp;
var path = require('path');


var dest = path.resolve('../')
var source = path.join(__dirname);

//ncp.filter = function () {
// console.log(arguments);
// return true;
//}
  
  // /index\.js/
var options = {};
var rel = function (file) {
  return new RegExp(path.join(__dirname, file).replace(/\//g, "\\/"));
};
var indexFile = rel('index\\.js');
var gitFldr = rel('\\.git');
var gitIgnore = rel('\\.gitignore');

options.filter = function filter() {
 
}



ncp(source, dest, options, function (){

});
