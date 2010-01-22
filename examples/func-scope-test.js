#!/usr/bin/env node-bench

function fn () {
  return o
};

var o = {"foo":1};

function fnCall () {
  return fn.call(o,1,2,3);
};

function fnApply () {
  return fn.apply(o,[1,2,3]);
};

function fnDirect () {
  return fn(o,1,2,3);
};

exports.compare = {
  "fn()" : fnDirect,
  "fn.apply()" : fnApply,
  "fn.call()" : fnCall
};
