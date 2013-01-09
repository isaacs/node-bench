#!/usr/bin/env node --harmony_collections

exports.compare = {
  weakmap: weakmap,
  array: array
}

function weakmap () {
  keys.forEach(function (k, i, keys) {
    map[k].field ++
  })
}

function array () {
  keys.forEach(function (k, i, keys) {
    array[k.id].field ++
  })
}

var keys = new Array(1E4).join('.').split('.').map(function (_, i, __) {
  return { id: i }
}).sort(function (a, b) {
  // yes, yes, I know, it's not a true shuffle, but at least it's not sorted.
  return Math.random() < 0.5 ? 1 : -1
})

var array = new Array(keys.length)
keys.forEach(function (k) {
  array[k.id] = { field: 0 }
})

var map = new WeakMap()
keys.forEach(function (k) {
  map[k] = array[k.id]
})

require('bench').runMain()
