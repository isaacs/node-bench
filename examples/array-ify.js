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
      return manualMap(Math.random(), Math.random(), Math.random(), Math.random())
    }
  , manualMapArg: function() {
      return manualMapArg(Math.random(), Math.random(), Math.random(), Math.random())
    }
  , arrayApply: function() {
      return arrayApply(Math.random(), Math.random(), Math.random(), Math.random())
    }
  , arrayApplyArg: function() {
      return arrayApplyArg(Math.random(), Math.random(), Math.random(), Math.random())
    }
  , arrayCall: function() {
      return arrayCall(Math.random(), Math.random(), Math.random(), Math.random())
    }
  , arrayCallArg: function() {
      return arrayCallArg(Math.random(), Math.random(), Math.random(), Math.random())
    }
  , sliceCall: function() {
      return sliceCall(Math.random(), Math.random(), Math.random(), Math.random())
    }
  , sliceCallArg: function() {
      return sliceCallArg(Math.random(), Math.random(), Math.random(), Math.random())
    }
  , sliceZeroCall: function() {
      return sliceZeroCall(Math.random(), Math.random(), Math.random(), Math.random())
    }
  , sliceZeroCallArg: function() {
      return sliceZeroCallArg(Math.random(), Math.random(), Math.random(), Math.random())
    }
  , sliceApply: function() {
      return sliceApply(Math.random(), Math.random(), Math.random(), Math.random())
    }
  , sliceApplyArg: function() {
      return sliceApplyArg(Math.random(), Math.random(), Math.random(), Math.random())
    }
  , sliceZeroApply: function() {
      return sliceZeroApply(Math.random(), Math.random(), Math.random(), Math.random())
    }
  , sliceZeroApplyArg: function() {
      return sliceZeroApplyArg(Math.random(), Math.random(), Math.random(), Math.random())
    }
  }

require("../").runMain()

/*

////
// First, using node 0.4.9, current stable
////

$ node examples/array-ify.js
benchmarking /Users/isaacs/dev-src/js/node-bench/examples/array-ify.js
Please be patient.
{ node: '0.4.9',
  v8: '3.1.8.25',
  ares: '1.7.4',
  ev: '4.4',
  openssl: '0.9.8l' }
Scores: (bigger is better)

arrayApply
Raw:
 > 4811.188811188811
 > 4846.153846153846
 > 4843.156843156843
 > 4824.175824175824
 > 4777.222777222777
Average (mean) 4820.379620379621

arrayApplyArg
Raw:
 > 4683.316683316683
 > 4799.200799200799
 > 4639.36063936064
 > 4754.245754245754
 > 4652.347652347652
Average (mean) 4705.694305694306

sliceCallArg
Raw:
 > 4466.533466533467
 > 4502.497502497503
 > 4478.5214785214785
 > 4468.531468531469
 > 4415.584415584415
Average (mean) 4466.333666333667

sliceZeroCallArg
Raw:
 > 4543.456543456544
 > 4481.518481518481
 > 4503.4965034965035
 > 4262.737262737262
 > 4375.624375624376
Average (mean) 4433.366633366632

sliceCall
Raw:
 > 4505.494505494506
 > 4485.514485514485
 > 4340.659340659341
 > 4409.59040959041
 > 4187.812187812187
Average (mean) 4385.814185814187

arrayCallArg
Raw:
 > 4436.563436563437
 > 4373.626373626374
 > 4388.611388611389
 > 4313.686313686314
 > 4377.622377622378
Average (mean) 4378.021978021979

sliceZeroCall
Raw:
 > 4526.473526473526
 > 4143.856143856144
 > 4484.515484515485
 > 4215.784215784216
 > 4389.61038961039
Average (mean) 4352.047952047951

arrayCall
Raw:
 > 4482.517482517483
 > 4339.66033966034
 > 4395.604395604396
 > 4208.791208791209
 > 4254.745254745255
Average (mean) 4336.263736263737

sliceApplyArg
Raw:
 > 4161.838161838162
 > 4142.857142857143
 > 4105.894105894105
 > 4091.908091908092
 > 4107.892107892108
Average (mean) 4122.077922077922

sliceApply
Raw:
 > 4107.892107892108
 > 4078.921078921079
 > 4044.9550449550447
 > 3452.5474525474524
 > 3902.097902097902
Average (mean) 3917.2827172827174

sliceZeroApply
Raw:
 > 3865.1348651348653
 > 3796.203796203796
 > 3842.157842157842
 > 3789.2107892107892
 > 3508.4915084915083
Average (mean) 3760.23976023976

sliceZeroApplyArg
Raw:
 > 3818.181818181818
 > 3824.1758241758243
 > 3817.182817182817
 > 3797.2027972027972
 > 3463.5364635364635
Average (mean) 3744.0559440559437

manualMap
Raw:
 > 1350.6493506493507
 > 1386.6133866133866
 > 1382.6173826173826
 > 1383.6163836163837
 > 1368.6313686313686
Average (mean) 1374.4255744255747

manualMapArg
Raw:
 > 1345.6543456543457
 > 1343.6563436563436
 > 1343.6563436563436
 > 1333.6663336663337
 > 1343.6563436563436
Average (mean) 1342.057942057942

Winner: arrayApply
Compared with next highest (arrayApplyArg), it's:
2.38% faster
1.02 times as fast
0.01 order(s) of magnitude faster

Compared with the slowest (manualMapArg), it's:
72.16% faster
3.59 times as fast
0.56 order(s) of magnitude faster

////
// Now with crankshaft, node master
////

benchmarking /Users/isaacs/dev-src/js/node-bench/examples/array-ify.js
Please be patient.
{ node: '0.5.2-pre',
  v8: '3.4.12.1',
  ares: '1.7.4',
  uv: '0.1',
  openssl: '0.9.8l' }
Scores: (bigger is better)

arrayApply
Raw:
 > 7719.2807192807195
 > 7851.1488511488515
 > 7419.580419580419
 > 6841.158841158841
 > 4435.129740518962
Average (mean) 6853.259714337558

arrayApplyArg
Raw:
 > 6442.557442557442
 > 5976.166832174777
 > 6257.742257742258
 > 6822.177822177822
 > 5379.62037962038
Average (mean) 6175.652946854536

sliceZeroApply
Raw:
 > 2344.655344655345
 > 1992.007992007992
 > 1471.5284715284715
 > 2244.755244755245
 > 1734.0637450199204
Average (mean) 1957.4021595933948

arrayCall
Raw:
 > 2296.111665004985
 > 1717.2827172827174
 > 2033.966033966034
 > 1719.840478564307
 > 1358.8469184890655
Average (mean) 1825.2095626614216

sliceCall
Raw:
 > 1558.4415584415585
 > 1613.3866133866134
 > 1856.430707876371
 > 1306.6933066933068
 > 2017.982017982018
Average (mean) 1670.5868408759736

sliceZeroCall
Raw:
 > 1862.1378621378622
 > 1616.7664670658683
 > 1920.0799200799202
 > 1183.8161838161839
 > 1742.2577422577422
Average (mean) 1665.0116350715155

sliceApply
Raw:
 > 1554.4455544455545
 > 1078.921078921079
 > 1133.8661338661339
 > 1404.5954045954045
 > 1074.925074925075
Average (mean) 1249.3506493506495

manualMap
Raw:
 > 800.1998001998002
 > 859.1408591408591
 > 835.1648351648352
 > 830.1698301698302
 > 826.1738261738262
Average (mean) 830.1698301698301

arrayCallArg
Raw:
 > 422.1556886227545
 > 413.5864135864136
 > 424.57542457542456
 > 417.33067729083666
 > 410.5894105894106
Average (mean) 417.64752293296806

sliceZeroCallArg
Raw:
 > 137.45019920318725
 > 128.7425149700599
 > 126.87312687312688
 > 127.72277227722772
 > 124.75442043222004
Average (mean) 129.10860675116436

sliceZeroApplyArg
Raw:
 > 126.49402390438247
 > 122.1449851042701
 > 123.87612387612387
 > 123.87612387612387
 > 126.59470068694799
Average (mean) 124.59719148956965

sliceCallArg
Raw:
 > 126.49402390438247
 > 122.50996015936255
 > 125.62313060817547
 > 113.32007952286283
 > 124.2544731610338
Average (mean) 122.44033347116343

sliceApplyArg
Raw:
 > 123.50597609561753
 > 124.37810945273633
 > 124.87512487512487
 > 89.82035928143712
 > 115.42288557213931
Average (mean) 115.60049105541103

manualMapArg
Raw:
 > 113.32007952286283
 > 108.34990059642148
 > 108.16125860373648
 > 109.67098703888335
 > 107.67696909272183
Average (mean) 109.43583897092519

Winner: arrayApply
Compared with next highest (arrayApplyArg), it's:
9.89% faster
1.11 times as fast
0.05 order(s) of magnitude faster

Compared with the slowest (manualMapArg), it's:
98.4% faster
62.62 times as fast
1.8 order(s) of magnitude faster


*/
