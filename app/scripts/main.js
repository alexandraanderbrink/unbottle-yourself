var utils = require('./utils');

// for example:
// var $ = require('../bower_components/jquery/dist/jquery');

utils.addHelperClasses();

utils.log('is mobile',utils.isMobile);
utils.log('is smartphone',utils.isSmartphone);




function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + hour + ':' + min + ':' + sec ;
  return time;
  console.log(time);
}



