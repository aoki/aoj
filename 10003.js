process.stdin.resume();
process.stdin.on('data', function (x) {
  var data = x.toString().replace(/\n/, '').split(' ');
  var a = parseInt(parseInt(data[0], 10));
  var b = parseInt(parseInt(data[1], 10));
  a === b ? console.log('a == b') : a < b ? console.log('a < b') : console.log('a > b');
});
process.stdin.on('end', function () { });
