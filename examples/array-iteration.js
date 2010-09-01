// testing iterating over an array various ways

var arr = []
  , i = 100000
  , j = 0
exports.countPerLap = i
while (i--) arr.push(i)
exports.compare =
  { "i < arr.length" : function () {
      j = 0
      for (var i = 0; i < arr.length; i ++) {
        j ++
      }
    }
  , "i < l" : function () {
      j = 0
      for (var i = 0, l = arr.length; i < l; i ++) {
        j ++
      }
    }
  , "arr.forEach" : function () {
      j = 0
      arr.forEach(function (i) { j ++ })
    }
  }
require("bench").runMain()

// [21:04:29] $ node examples/array-iteration.js 
// benchmarking /Users/isaacs/Documents/src/js/node-bench/examples/array-iteration.js
// Please be patient.
// Scores: (bigger is better)
// 
// i < l
// Raw:
//  > 278293.13543599256
//  > 278551.53203342616
//  > 271493.2126696833
//  > 278551.53203342616
//  > 278551.53203342616
// Average (mean) 277088.1888411909
// 
// i < arr.length
// Raw:
//  > 176678.44522968197
//  > 214285.7142857143
//  > 214438.88491779842
//  > 214285.7142857143
//  > 213827.51247327155
// Average (mean) 206703.25423843611
// 
// arr.forEach
// Raw:
//  > 40000
//  > 39904.229848363924
//  > 39936.10223642173
//  > 39968.02557953637
//  > 39952.05753096285
// Average (mean) 39952.083039056975
// 
// Winner: i < l
// Compared with next highest (i < arr.length), it's:
// 25.4% faster
// 1.34 times as fast
// 0 order(s) of magnitude faster
// 
// Compared with the slowest (arr.forEach), it's:
// 85.58% faster
// 6.94 times as fast
// 0 order(s) of magnitude faster
