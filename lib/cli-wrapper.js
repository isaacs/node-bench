var path = require("path"),
  url = require("url");

var args = process.ARGV.slice(0);

for (
  var arg = args.shift();
  arg !== __filename && path.basename(arg) !== "node-bench";
  arg = args.shift()
);

// strip the extension.
var test = url.resolve(process.cwd()+"/", path.join(
    path.dirname(args[0]),
    path.basename(args[0], path.extname(args[0]))
  )),
  bench = require("./bench");

process.stdio.write("benchmarking "+test+"\nPlease be patient.\n");
test = require(test);

(test.done || bench.show)(bench.compare(
  test.compare,
  test.compareCount || bench.COMPARE_COUNT,
  test.time || bench.TIME,
  test.countPerLap || bench.COUNT_PER_LAP
));
