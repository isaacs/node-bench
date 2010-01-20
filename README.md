# node bench

A little utility for doing side-by-side benchmarks in [nodejs](http://nodejs.org).

This is not for benchmarking your HTTP servers.  Use [ab](http://httpd.apache.org/docs/2.0/programs/ab.html) for that.

## Usage

Write your script like this:

  exports.compare = {
    "function wrapper" : function () {
      var x = (function (a) {
        return a;
      })("foo");
    },
    "with(){} wrapper" : function () {
      var x;
      with ({a : "foo"}) {
        x = a;
      }
    }
    "no wrapper" : function () {
      var a = "foo";
      var x = a;
    }
  };

Then, you can either give it a shebang pointing at `node-bench`, or run node-bench against it.

  $ node-bench my-test-script.js

It'll output the scores in processes/second, so a higher score is always better.

You can also export `time`, `count`, and `comparecount` to change the behavior slightly.

Your test script is just a plain old commonjs module, so it can include other things, update require.paths, whatever setup you need to do.  Generally, it's a good idea to do this stuff in the module itself, rather than in the comparison functions, so that you can better isolate the units that you want to test.

## Fields

Export the following fields from your benchmark script.

`compare` - The hash of functions that will be compared.  The output will use the object key as the title.  They're called without any arguments, in the default scope.  It's assumed that you should know how to make this do whatever you need it to.

`time` - How long (in ms) to run the tests for.  A higher value will result in more accurate tests that take longer to run.  Default: `1000`

`count` - How many function calls to do per iteration.  This should be some fairly big number, but if you have operations that take pretty long, you might want to reduce it.  Default: `1000`

`compareCount` - How many times to do the test runs.  This should be some fairly small number.  Tests are run multiple times in varying order to average out the variation due to calling one function first, a primed cache, garbage collection, etc.  Higher value = more accurate, slower tests.  Default: `8`
