var my_array = [0,1,2,3,4,5,6,7,8,9]
function myMethod() {
  return my_array.length
}

exports.compare =
  { 'fast': function () {
      var l1 = my_array.length
      for(var i = 0; i < l1; i++){}
      var l2 = myMethod()
      for(var i = 0; i < l2; i++){}
    }

  , 'slow': function () {
      for(var i = 0; i < my_array.length; i++){}
      for(var i = 0; i < myMethod(); i++){}
    }
  }

require('bench').runMain()

/*
$ node examples/loops.js
benchmarking /Users/isaacs/dev/js/bench/examples/loops.js
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
 > 20431.56843156843
 > 21830.16983016983
 > 32549.45054945055
 > 30196.803196803197
 > 31270.72927072927
Average (mean) 27255.74425574426

fast
Raw:
 > 19841.158841158842
 > 22827.172827172828
 > 30527.472527472528
 > 30394.605394605394
 > 29260.73926073926
Average (mean) 26570.229770229773

Winner: slow
Compared with next highest (fast), it's:
2.52% faster
1.03 times as fast
0.01 order(s) of magnitude faster
*/
