var obj = { myMethod1: function () {}
          , myMethod2: function () {}
          , my_variable: 100
          }
var my_array = [obj]

exports.compare =
  { 'fast': function () {
      my_array[0].myMethod1()
      my_array[0].myMethod2()
      my_array[0].my_variable
    }

  , 'slow': function () {
      var o = my_array[0]
      o.myMethod1()
      o.myMethod2()
      o.my_variable
    }
  }

require('bench').runMain()

/*
$ node examples/array-methods.js 
benchmarking /Users/isaacs/dev/js/bench/examples/array-methods.js
Please be patient.
{ http_parser: '1.0',
  node: '0.8.1-pre',
  v8: '3.11.10.12',
  ares: '1.7.5-DEV',
  uv: '0.8',
  zlib: '1.2.3',
  openssl: '1.0.0f' }
Scores: (bigger is better)

slow
Raw:
 > 33051.94805194805
 > 38006.993006993005
 > 33950.04995004995
 > 31443.556443556445
 > 26876.123876123875
Average (mean) 32665.73426573426

fast
Raw:
 > 30330.66933066933
 > 27824.175824175825
 > 29443.556443556445
 > 23784.215784215783
 > 26287.71228771229
Average (mean) 27534.065934065933

Winner: slow
Compared with next highest (fast), it's:
15.71% faster
1.19 times as fast
0.07 order(s) of magnitude faster
*/
