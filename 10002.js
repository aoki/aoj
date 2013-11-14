process.stdin.resume();
process.stdin.on('data', function (x) {
  var data = x.toString().replace(/\n/, '').split(' ');
  console.log(data[0]*data[1]+ ' ' + (data[0]*2+data[1]*2));
});
process.stdin.on('end', function () { });
