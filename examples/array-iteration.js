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

/*
[09:13:03] $ node array-iteration.js 
benchmarking /Users/isaacs/Dropbox/dev/js/node-bench/examples/array-iteration.js
Please be patient.
Scores: (bigger is better)

i < l
Raw:
 > 278293.13543599256
 > 276497.69585253455
 > 278293.13543599256
 > 278293.13543599256
 > 278293.13543599256
Average (mean) 277934.04751930095

i < arr.length
Raw:
 > 198807.15705765408
 > 212916.96238466998
 > 214132.76231263383
 > 214132.76231263383
 > 213523.13167259787
Average (mean) 210702.5551480379

arr.forEach
Raw:
 > 38759.68992248062
 > 38358.26620636747
 > 38580.246913580246
 > 38880.24883359254
 > 38940.80996884735
Average (mean) 38703.85236897365

Winner: i < l
Compared with next highest (i < arr.length), it's:
24.19% faster
1.32 times as fast
0.12 order(s) of magnitude faster

Compared with the slowest (arr.forEach), it's:
86.07% faster
7.18 times as fast
0.86 order(s) of magnitude faster
*/
