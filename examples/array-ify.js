// testing converting arguments to an Array

function manualMap () {
  var arr = []
  for (var i = 0, l = arguments.length; i < l; i ++) {
    if (arguments.hasOwnProperty(i)) arr[i] = arguments[i]
  }
  return arr
}

function manualMapArg (x) {
  var arr = []
  for (var i = 0, l = arguments.length; i < l; i ++) {
    if (arguments.hasOwnProperty(i)) arr[i] = arguments[i]
  }
  return arr
}

function arrayApply () {
  return Array.apply(arguments)
}

function arrayApplyArg (x) {
  return Array.apply(arguments)
}

function arrayCall () {
  return Array.call(arguments)
}

function arrayCallArg (x) {
  return Array.call(arguments)
}

function sliceCall () {
  return Array.prototype.slice.call(arguments)
}

function sliceCallArg (x) {
  return Array.prototype.slice.call(arguments)
}

function sliceZeroCall () {
  return Array.prototype.slice.call(arguments, 0)
}

function sliceZeroCallArg (x) {
  return Array.prototype.slice.call(arguments, 0)
}

function sliceApply () {
  return Array.prototype.slice.apply(arguments)
}

function sliceApplyArg (x) {
  return Array.prototype.slice.apply(arguments)
}

function sliceZeroApply () {
  return Array.prototype.slice.apply(arguments, [0])
}

function sliceZeroApplyArg (x) {
  return Array.prototype.slice.apply(arguments, [0])
}

exports.compare =
  { manualMap: function () {
      return manualMap(Math.random())
    }
  , manualMapArg: function() {
      return manualMapArg(Math.random())
    }
  , arrayApply: function() {
      return arrayApply(Math.random())
    }
  , arrayApplyArg: function() {
      return arrayApplyArg(Math.random())
    }
  , arrayCall: function() {
      return arrayCall(Math.random())
    }
  , arrayCallArg: function() {
      return arrayCallArg(Math.random())
    }
  , sliceCall: function() {
      return sliceCall(Math.random())
    }
  , sliceCallArg: function() {
      return sliceCallArg(Math.random())
    }
  , sliceZeroCall: function() {
      return sliceZeroCall(Math.random())
    }
  , sliceZeroCallArg: function() {
      return sliceZeroCallArg(Math.random())
    }
  , sliceApply: function() {
      return sliceApply(Math.random())
    }
  , sliceApplyArg: function() {
      return sliceApplyArg(Math.random())
    }
  , sliceZeroApply: function() {
      return sliceZeroApply(Math.random())
    }
  , sliceZeroApplyArg: function() {
      return sliceZeroApplyArg(Math.random())
    }
  }

require("../").runMain()

/*
$ node examples/array-ify.js
benchmarking /Users/isaacs/dev-src/js/node-bench/examples/array-ify.js
Please be patient.
{ node: '0.5.2-pre',
  v8: '3.4.12.1',
  ares: '1.7.4',
  uv: '0.1',
  openssl: '0.9.8l' }
Scores: (bigger is better)

arrayCall
Raw:
 > 5387.6123876123875
 > 4906.093906093906
 > 4772.227772227772
 > 2906.0939060939063
 > 3707.2927072927073
Average (mean) 4335.864135864136

arrayApply
Raw:
 > 4458.541458541458
 > 4525.474525474526
 > 3622.377622377622
 > 2825.615763546798
 > 4403.596403596403
Average (mean) 3967.121154707361

sliceCall
Raw:
 > 3061.9380619380618
 > 3413.5864135864135
 > 3179.82017982018
 > 3669.3306693306695
 > 3676.3236763236764
Average (mean) 3400.1998001998

sliceZeroCall
Raw:
 > 3418.581418581419
 > 3557.4425574425572
 > 3567.4325674325673
 > 2532.4675324675327
 > 2079.92007992008
Average (mean) 3031.1688311688317

sliceApply
Raw:
 > 3025.974025974026
 > 2964.035964035964
 > 3133.866133866134
 > 2106.6799601196412
 > 2940.05994005994
Average (mean) 2834.1232048111415

sliceZeroApply
Raw:
 > 2593.4065934065934
 > 2741.774675972084
 > 2733.2667332667334
 > 2108.891108891109
 > 2559.5238095238096
Average (mean) 2547.3725842120657

manualMap
Raw:
 > 986.013986013986
 > 898.1018981018981
 > 891.1088911088912
 > 884.1158841158841
 > 770.2297702297702
Average (mean) 885.9140859140858

arrayCallArg
Raw:
 > 451.54845154845157
 > 442.89970208540217
 > 419.22695738354804
 > 375.1243781094527
 > 411.5884115884116
Average (mean) 420.0775801430532

arrayApplyArg
Raw:
 > 369.2614770459082
 > 442.11576846307383
 > 423.1536926147705
 > 386.839481555334
 > 430.56943056943055
Average (mean) 410.3879700497035

sliceZeroCallArg
Raw:
 > 131.0824230387289
 > 127.363184079602
 > 121.63509471585245
 > 113.32007952286283
 > 118.52589641434263
Average (mean) 122.38533555427776

sliceApplyArg
Raw:
 > 126.49402390438247
 > 123.87612387612387
 > 118.40796019900498
 > 93.812375249501
 > 112.10317460317461
Average (mean) 114.93873156643738

sliceZeroApplyArg
Raw:
 > 125.62313060817547
 > 122.1449851042701
 > 105.41871921182266
 > 97.70687936191426
 > 119.64107676969093
Average (mean) 114.1069582111747

sliceCallArg
Raw:
 > 122.38805970149254
 > 125.3731343283582
 > 120.87912087912088
 > 104.58167330677291
 > 93.53233830845771
Average (mean) 113.35086530484045

manualMapArg
Raw:
 > 128.48605577689244
 > 122.26640159045725
 > 121.63509471585245
 > 82.25966303270565
 > 106.36182902584493
Average (mean) 112.20180882835055

Winner: arrayCall
Compared with next highest (arrayApply), it's:
8.5% faster
1.09 times as fast
0.04 order(s) of magnitude faster

Compared with the slowest (manualMapArg), it's:
97.41% faster
38.64 times as fast
1.59 order(s) of magnitude faster

*/
