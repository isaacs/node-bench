#!/usr/bin/env node-bench

var p = [], l = [], pi = 0, li = 0, c = 100000;

exports.compare = {
  push : function () {
    if (pi === c) {
      p = [];
      pi = 0;
    }
    p.push(pi ++);
  },
  length : function () {
    if (li === c) {
      l = [];
      li = 0;
    }
    l[l.length] = li ++;
  }    
}
