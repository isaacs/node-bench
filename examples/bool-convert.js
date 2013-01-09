#!/usr/bin/env node

var obj = {}

exports.compare =
  { "!" : function() {
      var x = !obj
    }
  , "!!!" : function() {
      var x = !!!obj
    }
  }

require("../").runMain()
