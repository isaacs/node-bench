
// run 500 times so that we can abstract out the overhead of promise creation.
var count = 500;

exports.countPerLap = count;
exports.compare = {
  nextTick : function () {
    var p = new process.Promise(), i = 0;
    process.nextTick(function () {
      if (i ++ > count) p.emitSuccess();
      else process.nextTick(arguments.callee);
    });
    return p;
  },
  setTimeout : function () {
    var p = new process.Promise(), i = 0;
    setTimeout(function () {
      if (i ++ > count) p.emitSuccess();
      else setTimeout(arguments.callee);
    });
    return p;
  }
}
