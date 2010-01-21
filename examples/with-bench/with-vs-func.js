#!/usr/bin/env node ../node-bench

exports.compare = {
  "with(){}" : require("./func").test,
  "function(){}" : require("./with").test
};

