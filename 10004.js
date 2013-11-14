process.stdin.resume();
process.stdin.on('data', function (x) {
  console.log(x.toString().replace(/\n/, '').split(' ').map(function(y){return parseInt(y, 10)}).sort(function(a, b){return a-b;}).join(' '));
});
process.stdin.on('end', function () { });
