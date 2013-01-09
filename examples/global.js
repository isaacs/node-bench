//gvar = {i: 0}
//var parentRef = gvar

var parent = {i: 0}

exports.compare =
  { 'local parent': function () {
      var local = parent
      for(var i = 0; i < 1E5; i ++) {
        local.i = i
      }
    }
  , 'parent': function () {
      var local = parent
      for(var i = 0; i < 1E5; i ++) {
        parent.i = i
      }
    }
  }

require('bench').runMain()

/*
benchmarking /Users/isaacs/dev/js/bench/examples/global.js
Please be patient.
{ http_parser: '1.0',
  node: '0.8.1-pre',
  v8: '3.11.10.12',
  ares: '1.7.5-DEV',
  uv: '0.8',
  zlib: '1.2.3',
  openssl: '1.0.0f' }
Scores: (bigger is better)

parent global
Raw:
 > 10.700389105058365
 > 10.597302504816955
 > 10.679611650485437
 > 10.76320939334638
 > 10.700389105058365
Average (mean) 10.6881803517531

local global
Raw:
 > 10.731707317073171
 > 10.638297872340425
 > 10.71080817916261
 > 10.617760617760618
 > 10.679611650485437
Average (mean) 10.675637127364453

local parent
Raw:
 > 10.76320939334638
 > 10.576923076923077
 > 10.721247563352826
 > 10.617760617760618
 > 10.576923076923077
Average (mean) 10.651212745661194

parent
Raw:
 > 10.638297872340425
 > 10.587102983638113
 > 10.566762728146013
 > 10.566762728146013
 > 10.679611650485437
Average (mean) 10.607707592551202

global
Raw:
 > 10.526315789473685
 > 10.648596321393999
 > 10.628019323671497
 > 10.53639846743295
 > 9.784735812133073
Average (mean) 10.42481314282104

Winner: parent global
Compared with next highest (local global), it's:
0.12% faster
1 times as fast
0 order(s) of magnitude faster

Compared with the slowest (global), it's:
2.46% faster
1.03 times as fast
0.01 order(s) of magnitude faster
*/
