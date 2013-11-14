process.stdin.resume();
process.stdin.on('data', function (x) {
  console.log(Math.pow(x,3));
});
process.stdin.on('end', function () {
});
