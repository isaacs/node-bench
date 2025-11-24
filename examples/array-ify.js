// testing converting arguments to an Array

function manualMap () {
  var l = arguments.length
  var arr = new Array(l)
  for (var i = 0; i < l; i ++) arr[i] = arguments[i]
  return arr
}

function manualMapArg (x) {
  var l = arguments.length
  var arr = new Array(l)
  for (var i = 0; i < l; i ++) arr[i] = arguments[i]
  return arr
}

function duff () {
  var l = arguments.length
  var arr = new Array(l)
  switch (l) {
    case 8: arr[7] = arguments[7]
    case 7: arr[6] = arguments[6]
    case 6: arr[5] = arguments[5]
    case 5: arr[4] = arguments[4]
    case 4: arr[3] = arguments[3]
    case 3: arr[2] = arguments[2]
    case 2: arr[1] = arguments[1]
    case 1: arr[0] = arguments[0]
  }
  return arr
}

function from () {
  return Array.from(arguments)
}

function arrayApplyProto () {
  return Array.apply(Object.create(Array.prototype), arguments)
}

function arrayApplyNull () {
  return arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)
}

function arrayApplyArg (x) {
  return arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)
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

function arrayProto () {
  arguments.__proto__ = Array.prototype
  return arguments
}

function splat (...args) {
  return args
}

exports.compare =
  { manualMap: function () {
      return [ manualMap(Math.random()), manualMap(Math.random(), Math.random()) ]
    }
  , splat: function () {
      return [ splat(Math.random()), splat(Math.random(), Math.random()) ]
    }
  , arrayProto: function () {
      return [ arrayProto(Math.random()), arrayProto(Math.random(), Math.random()) ]
    }
  , duff: function () {
      return [ duff(Math.random()), duff(Math.random(), Math.random()) ]
    }
  , arrayApplyNull: function () {
      return [ arrayApplyNull(Math.random()), arrayApplyNull(Math.random(), Math.random()) ]
    }
  , manualMapArg: function () {
      return [ manualMapArg(Math.random()), manualMapArg(Math.random(), Math.random()) ]
    }
  , arrayApplyArg: function () {
      return [ arrayApplyArg(Math.random()), arrayApplyArg(Math.random(), Math.random()) ]
    }
  , sliceCall: function () {
      return [ sliceCall(Math.random()), sliceCall(Math.random(), Math.random()) ]
    }
  , sliceCallArg: function () {
      return [ sliceCallArg(Math.random()), sliceCallArg(Math.random(), Math.random()) ]
    }
  , sliceZeroCall: function () {
      return [ sliceZeroCall(Math.random()), sliceZeroCall(Math.random(), Math.random()) ]
    }
  , sliceZeroCallArg: function () {
      return [ sliceZeroCallArg(Math.random()), sliceZeroCallArg(Math.random(), Math.random()) ]
    }
  , sliceApply: function () {
      return [ sliceApply(Math.random()), sliceApply(Math.random(), Math.random()) ]
    }
  , sliceApplyArg: function () {
      return [ sliceApplyArg(Math.random()), sliceApplyArg(Math.random(), Math.random()) ]
    }
  , sliceZeroApply: function () {
      return [ sliceZeroApply(Math.random()), sliceZeroApply(Math.random(), Math.random()) ]
    }
  , sliceZeroApplyArg: function () {
      return [ sliceZeroApplyArg(Math.random()), sliceZeroApplyArg(Math.random(), Math.random()) ]
    }
  }

exports.countPerLap = 2

require("../").runMain()
