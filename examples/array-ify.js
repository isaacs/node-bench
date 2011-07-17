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
  return Array.apply(null, arguments)
}

function arrayApplyArg (x) {
  return Array.apply(null, arguments)
}

function arrayCall () {
  return Array.call(null, arguments)
}

function arrayCallArg (x) {
  return Array.call(null, arguments)
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
      return manualMap(1,2,3,4,5,6,7,8,9,0)
    }
  , manualMapArg: function() {
      return manualMapArg(1,2,3,4,5,6,7,8,9,0)
    }
  , arrayApply: function() {
      return arrayApply(1,2,3,4,5,6,7,8,9,0)
    }
  , arrayApplyArg: function() {
      return arrayApplyArg(1,2,3,4,5,6,7,8,9,0)
    }
  , arrayCall: function() {
      return arrayCall(1,2,3,4,5,6,7,8,9,0)
    }
  , arrayCallArg: function() {
      return arrayCallArg(1,2,3,4,5,6,7,8,9,0)
    }
  , sliceCall: function() {
      return sliceCall(1,2,3,4,5,6,7,8,9,0)
    }
  , sliceCallArg: function() {
      return sliceCallArg(1,2,3,4,5,6,7,8,9,0)
    }
  , sliceZeroCall: function() {
      return sliceZeroCall(1,2,3,4,5,6,7,8,9,0)
    }
  , sliceZeroCallArg: function() {
      return sliceZeroCallArg(1,2,3,4,5,6,7,8,9,0)
    }
  , sliceApply: function() {
      return sliceApply(1,2,3,4,5,6,7,8,9,0)
    }
  , sliceApplyArg: function() {
      return sliceApplyArg(1,2,3,4,5,6,7,8,9,0)
    }
  , sliceZeroApply: function() {
      return sliceZeroApply(1,2,3,4,5,6,7,8,9,0)
    }
  , sliceZeroApplyArg: function() {
      return sliceZeroApplyArg(1,2,3,4,5,6,7,8,9,0)
    }
  }

require("../").runMain()

/*
benchmarking /Users/isaacs/dev-src/js/node-bench/examples/array-ify.js
Please be patient.
Scores: (bigger is better)

arrayCall
Raw:
 > 5918.081918081918
 > 5746.253746253747
 > 4681.318681318681
 > 5902.097902097902
 > 5949.050949050949
Average (mean) 5639.36063936064

arrayCallArg
Raw:
 > 6030.969030969031
 > 5064.935064935065
 > 5755.244755244756
 > 5182.817182817183
 > 5903.096903096903
Average (mean) 5587.4125874125875

sliceCall
Raw:
 > 5429.57042957043
 > 5375.624375624376
 > 5340.659340659341
 > 5496.5034965034965
 > 4968.031968031968
Average (mean) 5322.077922077922

sliceCallArg
Raw:
 > 5239.7602397602395
 > 5359.64035964036
 > 5357.642357642358
 > 5398.601398601399
 > 5072.927072927073
Average (mean) 5285.714285714285

sliceZeroCall
Raw:
 > 5553.4465534465535
 > 5338.661338661339
 > 5342.657342657342
 > 4795.204795204795
 > 5142.857142857143
Average (mean) 5234.565434565435

sliceZeroCallArg
Raw:
 > 5431.568431568431
 > 5367.632367632367
 > 4291.708291708292
 > 5346.6533466533465
 > 5464.535464535465
Average (mean) 5180.41958041958

arrayApply
Raw:
 > 4832.167832167832
 > 4873.126873126873
 > 4656.343656343656
 > 4287.712287712287
 > 4534.465534465535
Average (mean) 4636.763236763237

sliceApplyArg
Raw:
 > 5003.996003996004
 > 4893.106893106893
 > 4930.06993006993
 > 4518.481518481519
 > 3457.5424575424577
Average (mean) 4560.639360639361

arrayApplyArg
Raw:
 > 5000.999000999001
 > 4805.194805194805
 > 4809.190809190809
 > 3196.803196803197
 > 4927.072927072927
Average (mean) 4547.852147852148

sliceApply
Raw:
 > 4996.003996003996
 > 4050.949050949051
 > 4600.399600399601
 > 5046.953046953047
 > 3790.2097902097903
Average (mean) 4496.903096903096

sliceZeroApplyArg
Raw:
 > 4186.813186813187
 > 4186.813186813187
 > 4238.761238761239
 > 3416.5834165834167
 > 4245.754245754246
Average (mean) 4054.945054945055

sliceZeroApply
Raw:
 > 4419.580419580419
 > 3518.4815184815184
 > 4240.759240759241
 > 4274.725274725275
 > 3201.7982017982017
Average (mean) 3931.0689310689313

manualMap
Raw:
 > 683.6327345309381
 > 692.6147704590818
 > 693.3066933066933
 > 688.622754491018
 > 653.692614770459
Average (mean) 682.3739135116381

manualMapArg
Raw:
 > 662.3376623376623
 > 673.3266733266734
 > 673.3266733266734
 > 564.8702594810379
 > 666.6666666666666
Average (mean) 648.1055870277427

Winner: arrayCall
Compared with next highest (arrayCallArg), it's:
0.92% faster
1.01 times as fast
0 order(s) of magnitude faster

Compared with the slowest (manualMapArg), it's:
88.51% faster
8.7 times as fast
0.94 order(s) of magnitude faster
*/
