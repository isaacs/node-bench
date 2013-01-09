// different ways to id objects
// use a req/res pair, since it's crazy deep and cyclical

var http = require('http')
var util = require('util')
var sreq, sres, creq, cres, test

http.createServer(function (q, s) {
  sreq = q
  sres = s
  sres.end('ok')
  this.close(function () { setTimeout(function () {
    start()
  }, 200) })
}).listen(1337, function () {
  creq = http.get({ port: 1337 })
  creq.on('response', function (s) { cres = s })
})

function start () {
  test = [sreq, sres, creq, cres]
  // test = sreq
  // sreq.sres = sres
  // sreq.creq = creq
  // sreq.cres = cres

  for (var i in exports.compare) {
    console.log(i)
    var hash = exports.compare[i]()
    console.log(hash)
    console.log(hash.length)
    console.log('')
  }

  require('bench').runMain()
}

function customWs (obj, md, d) {
  d = d || 0
  var to = typeof obj
  if (to === 'undefined' || to === 'function' || to === null) return ''
  if (d > md || !obj || to !== 'object') return ('' + obj).replace(/[\n ]+/g, '')

  if (Array.isArray(obj)) {
    return obj.map(function (i, _, __) {
      return customWs(i, md, d + 1)
    }).reduce(function (a, b) { return a + b }, '')
  }

  var keys = Object.keys(obj)
  return keys.map(function (k, _, __) {
    return k + ':' + customWs(obj[k], md, d + 1)
  }).reduce(function (a, b) { return a + b }, '')
}

function custom (obj, md, d) {
  d = d || 0
  var to = typeof obj
  if (to === 'undefined' || to === 'function' || to === null) return ''
  if (d > md || !obj || to !== 'object') return '' + obj

  if (Array.isArray(obj)) {
    return obj.map(function (i, _, __) {
      return custom(i, md, d + 1)
    }).reduce(function (a, b) { return a + b }, '')
  }

  var keys = Object.keys(obj)
  return keys.map(function (k, _, __) {
    return k + ':' + custom(obj[k], md, d + 1)
  }).reduce(function (a, b) { return a + b }, '')
}

function sparseFE2 (obj, maxDepth) {
  var seen = []
  var soFar = ''
  function ch (v, depth) {
    if (depth > maxDepth) return
    if (typeof v === 'function' || typeof v === 'undefined') return
    if (typeof v !== 'object' || !v) {
      soFar += v
      return
    }
    if (seen.indexOf(v) !== -1 || depth === maxDepth) return
    seen.push(v)
    soFar += '{'
    Object.keys(v).forEach(function (k, _, __) {
      // pseudo-private values.  skip those.
      if (k.charAt(0) === '_') return
      var to = typeof v[k]
      if (to === 'function' || to === 'undefined') return
      soFar += k + ':'
      ch(v[k], depth + 1)
    })
    soFar += '}'
  }
  ch(obj, 0)
  return soFar
}

function sparseFE (obj, maxDepth) {
  var seen = []
  var soFar = ''
  function ch (v, depth) {
    if (depth > maxDepth) return
    if (typeof v === 'function' || typeof v === 'undefined') return
    if (typeof v !== 'object' || !v) {
      soFar += v
      return
    }
    if (seen.indexOf(v) !== -1 || depth === maxDepth) return
    seen.push(v)
    soFar += '{'
    Object.keys(v).forEach(function (k, _, __) {
      // pseudo-private values.  skip those.
      if (k.charAt(0) === '_') return
      var to = typeof v[k]
      if (to === 'function' || to === 'undefined') return
      soFar += k
      ch(v[k], depth + 1)
    })
  }
  ch(obj, 0)
  return soFar
}

function sparse (obj, maxDepth) {
  var seen = []
  var soFar = ''
  function ch (v, depth) {
    if (depth > maxDepth) return
    if (typeof v === 'function' || typeof v === 'undefined') return
    if (typeof v !== 'object' || !v) {
      soFar += v
      return
    }
    if (seen.indexOf(v) !== -1 || depth === maxDepth) return
    seen.push(v)
    soFar += '{'
    for (var k in v) {
      // pseudo-private values.  skip those.
      if (k.charAt(0) === '_') continue
      var to = typeof v[k]
      if (to === 'function' || to === 'undefined') continue
      soFar += k
      ch(v[k], depth + 1)
    }
  }
  ch(obj, 0)
  return soFar
}

function noCommas (obj, maxDepth) {
  var seen = []
  var soFar = ''
  function ch (v, depth) {
    if (depth > maxDepth) return
    if (typeof v === 'function' || typeof v === 'undefined') return
    if (typeof v !== 'object' || !v) {
      soFar += v
      return
    }
    if (seen.indexOf(v) !== -1 || depth === maxDepth) return
    seen.push(v)
    soFar += '{'
    for (var k in v) {
      // pseudo-private values.  skip those.
      if (k.charAt(0) === '_') continue
      var to = typeof v[k]
      if (to === 'function' || to === 'undefined') continue
      soFar += k + ':'
      ch(v[k], depth + 1)
    }
    soFar += '}'
  }
  ch(obj, 0)
  return soFar
}


function flatten (obj, maxDepth) {
  var seen = []
  var soFar = ''
  function ch (v, depth) {
    if (depth > maxDepth) return
    if (typeof v === 'function' || typeof v === 'undefined') return
    if (typeof v !== 'object' || !v) {
      soFar += v
      return
    }
    if (seen.indexOf(v) !== -1 || depth === maxDepth) return
    seen.push(v)
    soFar += '{'
    for (var k in v) {
      // pseudo-private values.  skip those.
      if (k.charAt(0) === '_') continue
      var to = typeof v[k]
      if (to === 'function' || to === 'undefined') continue
      soFar += k + ':'
      ch(v[k], depth + 1)
      soFar += ','
    }
    soFar += '}'
  }
  ch(obj, 0)
  return soFar
}

exports.compare =
{
  // 'custom 2': function () {
  //   return custom(test, 2, 0)
  // },
  // 'customWs 2': function () {
  //   return customWs(test, 2, 0)
  // },
  'JSON.stringify (guarded)': function () {
    var seen = []
    return JSON.stringify(test, function (k, v) {
      if (typeof v !== 'object' || !v) return v
      if (seen.indexOf(v) !== -1) return undefined
      seen.push(v)
      return v
    })
  },

  'flatten 10': function () {
    return flatten(test, 10)
  },

  // 'flattenFE 10': function () {
  //   return flattenFE(test, 10)
  // },

  'noCommas 10': function () {
    return noCommas(test, 10)
  },

  'sparse 10': function () {
    return sparse(test, 10)
  },

  'sparseFE 10': function () {
    return sparseFE(test, 10)
  },

  'sparseFE2 10': function () {
    return sparseFE2(test, 10)
  },


  // 'util.inspect 1': function () {
  //   return util.inspect(test, false, 1, false)
  // },
  // 'util.inspect undefined': function () {
  //   util.inspect(test)
  // },
  // 'util.inspect 2': function () {
  //   util.inspect(test, false, 2, false)
  // },
  // 'util.inspect 3': function () {
  //   util.inspect(test, false, 3, false)
  // },
  // 'util.inspect 4': function () {
  //   util.inspect(test, false, 4, false)
  // },
  // 'util.inspect Infinity': function () {
  //   util.inspect(test, false, Infinity, false)
  // }
}

/** results
JSON.stringify (guarded)
[{"socket":{"_handle":null,"_pendingWriteReqs":0,"_flags":5,"_connectQueueSize":0,"destroyed":true,"errorEmitted":false,"bytesRead":64,"_bytesDispatched":120,"allowHalfOpen":true,"writable":false,"readable":false,"_paused":false,"server":{"_connections":0,"connections":0,"allowHalfOpen":true,"_handle":null,"_events":{},"httpAllowHalfOpen":false,"_connectionKey":"4:0.0.0.0:1337"},"_events":{"close":[null]},"_idleTimeout":-1,"_idleNext":null,"_idlePrev":null,"_idleStart":"2012-08-02T03:07:55.293Z","parser":null,"ondata":null,"onend":null,"_httpMessage":null,"_connecting":false,"_connectQueue":null},"httpVersion":"1.1","complete":true,"headers":{"host":"localhost:1337","connection":"keep-alive"},"trailers":{},"readable":false,"_paused":false,"_pendings":[],"_endEmitted":true,"url":"/","method":"GET","statusCode":null,"httpVersionMajor":1,"httpVersionMinor":1,"upgrade":false},{"output":[],"outputEncodings":[],"writable":true,"_last":false,"chunkedEncoding":true,"shouldKeepAlive":true,"useChunkedEncodingByDefault":true,"sendDate":true,"_hasBody":true,"_trailer":"","finished":true,"socket":null,"connection":null,"_events":{},"statusCode":200,"_header":"HTTP/1.1 200 OK\r\nDate: Thu, 02 Aug 2012 03:07:55 GMT\r\nConnection: keep-alive\r\nTransfer-Encoding: chunked\r\n\r\n","_headerSent":true},{"output":[],"outputEncodings":[],"writable":true,"_last":true,"chunkedEncoding":false,"shouldKeepAlive":true,"useChunkedEncodingByDefault":false,"sendDate":false,"_hasBody":true,"_trailer":"","finished":true,"agent":{"options":{},"requests":{},"sockets":{},"maxSockets":5,"_events":{}},"method":"GET","path":"/","_headers":{"host":"localhost:1337"},"_headerNames":{"host":"Host"},"_events":{},"_header":"GET / HTTP/1.1\r\nHost: localhost:1337\r\nConnection: keep-alive\r\n\r\n","_headerSent":true,"socket":{"_handle":null,"_pendingWriteReqs":0,"_flags":0,"_connectQueueSize":0,"destroyed":true,"errorEmitted":false,"bytesRead":120,"_bytesDispatched":64,"_connecting":false,"writable":false,"_events":{"close":[null]},"parser":null,"ondata":null,"onend":null,"_connectQueue":null,"readable":false,"_idleNext":null,"_idlePrev":null,"_idleTimeout":-1},"parser":null,"res":{"httpVersion":"1.1","complete":true,"headers":{"date":"Thu, 02 Aug 2012 03:07:55 GMT","connection":"keep-alive","transfer-encoding":"chunked"},"trailers":{},"readable":false,"_paused":false,"_pendings":[],"_endEmitted":true,"url":"","method":null,"statusCode":200,"httpVersionMajor":1,"httpVersionMinor":1,"upgrade":false,"_events":{}}},null]
2518

flatten 10
{0:{socket:{destroyed:true,errorEmitted:false,bytesRead:64,allowHalfOpen:true,writable:false,readable:false,server:{connections:0,allowHalfOpen:true,httpAllowHalfOpen:false,},parser:null,ondata:null,onend:null,bytesWritten:120,},connection:,httpVersion:1.1,complete:true,headers:{host:localhost:1337,connection:keep-alive,},trailers:{},readable:false,url:/,method:GET,statusCode:null,client:,httpVersionMajor:1,httpVersionMinor:1,upgrade:false,},1:{output:{},outputEncodings:{},writable:true,chunkedEncoding:true,shouldKeepAlive:true,useChunkedEncodingByDefault:true,sendDate:true,finished:true,socket:null,connection:null,statusCode:200,},2:{output:{},outputEncodings:{},writable:true,chunkedEncoding:false,shouldKeepAlive:true,useChunkedEncodingByDefault:false,sendDate:false,finished:true,agent:{options:{},requests:{},sockets:{},maxSockets:5,defaultPort:80,},method:GET,path:/,socket:{destroyed:true,errorEmitted:false,bytesRead:120,writable:false,parser:null,ondata:null,onend:null,readable:false,bytesWritten:64,},connection:,parser:null,res:{socket:,connection:,httpVersion:1.1,complete:true,headers:{date:Thu, 02 Aug 2012 03:07:55 GMT,connection:keep-alive,transfer-encoding:chunked,},trailers:{},readable:false,url:,method:null,statusCode:200,client:,httpVersionMajor:1,httpVersionMinor:1,upgrade:false,req:,},},3:,}
1325

noCommas 10
{0:{socket:{destroyed:trueerrorEmitted:falsebytesRead:64allowHalfOpen:truewritable:falsereadable:falseserver:{connections:0allowHalfOpen:truehttpAllowHalfOpen:false}parser:nullondata:nullonend:nullbytesWritten:120}connection:httpVersion:1.1complete:trueheaders:{host:localhost:1337connection:keep-alive}trailers:{}readable:falseurl:/method:GETstatusCode:nullclient:httpVersionMajor:1httpVersionMinor:1upgrade:false}1:{output:{}outputEncodings:{}writable:truechunkedEncoding:trueshouldKeepAlive:trueuseChunkedEncodingByDefault:truesendDate:truefinished:truesocket:nullconnection:nullstatusCode:200}2:{output:{}outputEncodings:{}writable:truechunkedEncoding:falseshouldKeepAlive:trueuseChunkedEncodingByDefault:falsesendDate:falsefinished:trueagent:{options:{}requests:{}sockets:{}maxSockets:5defaultPort:80}method:GETpath:/socket:{destroyed:trueerrorEmitted:falsebytesRead:120writable:falseparser:nullondata:nullonend:nullreadable:falsebytesWritten:64}connection:parser:nullres:{socket:connection:httpVersion:1.1complete:trueheaders:{date:Thu, 02 Aug 2012 03:07:55 GMTconnection:keep-alivetransfer-encoding:chunked}trailers:{}readable:falseurl:method:nullstatusCode:200client:httpVersionMajor:1httpVersionMinor:1upgrade:falsereq:}}3:}
1233

sparse 10
{0{socket{destroyedtrueerrorEmittedfalsebytesRead64allowHalfOpentruewritablefalsereadablefalseserver{connections0allowHalfOpentruehttpAllowHalfOpenfalseparsernullondatanullonendnullbytesWritten120connectionhttpVersion1.1completetrueheaders{hostlocalhost:1337connectionkeep-alivetrailers{readablefalseurl/methodGETstatusCodenullclienthttpVersionMajor1httpVersionMinor1upgradefalse1{output{outputEncodings{writabletruechunkedEncodingtrueshouldKeepAlivetrueuseChunkedEncodingByDefaulttruesendDatetruefinishedtruesocketnullconnectionnullstatusCode2002{output{outputEncodings{writabletruechunkedEncodingfalseshouldKeepAlivetrueuseChunkedEncodingByDefaultfalsesendDatefalsefinishedtrueagent{options{requests{sockets{maxSockets5defaultPort80methodGETpath/socket{destroyedtrueerrorEmittedfalsebytesRead120writablefalseparsernullondatanullonendnullreadablefalsebytesWritten64connectionparsernullres{socketconnectionhttpVersion1.1completetrueheaders{dateThu, 02 Aug 2012 03:07:55 GMTconnectionkeep-alivetransfer-encodingchunkedtrailers{readablefalseurlmethodnullstatusCode200clienthttpVersionMajor1httpVersionMinor1upgradefalsereq3
1121

sparseFE 10
{0{socket{destroyedtrueerrorEmittedfalsebytesRead64allowHalfOpentruewritablefalsereadablefalseserver{connections0allowHalfOpentruehttpAllowHalfOpenfalseparsernullondatanullonendnullconnectionhttpVersion1.1completetrueheaders{hostlocalhost:1337connectionkeep-alivetrailers{readablefalseurl/methodGETstatusCodenullclienthttpVersionMajor1httpVersionMinor1upgradefalse1{output{outputEncodings{writabletruechunkedEncodingtrueshouldKeepAlivetrueuseChunkedEncodingByDefaulttruesendDatetruefinishedtruesocketnullconnectionnullstatusCode2002{output{outputEncodings{writabletruechunkedEncodingfalseshouldKeepAlivetrueuseChunkedEncodingByDefaultfalsesendDatefalsefinishedtrueagent{options{requests{sockets{maxSockets5methodGETpath/socket{destroyedtrueerrorEmittedfalsebytesRead120writablefalseparsernullondatanullonendnullreadablefalseconnectionparsernullres{socketconnectionhttpVersion1.1completetrueheaders{dateThu, 02 Aug 2012 03:07:55 GMTconnectionkeep-alivetransfer-encodingchunkedtrailers{readablefalseurlmethodnullstatusCode200clienthttpVersionMajor1httpVersionMinor1upgradefalsereq3
1079

sparseFE2 10
{0:{socket:{destroyed:trueerrorEmitted:falsebytesRead:64allowHalfOpen:truewritable:falsereadable:falseserver:{connections:0allowHalfOpen:truehttpAllowHalfOpen:false}parser:nullondata:nullonend:null}connection:httpVersion:1.1complete:trueheaders:{host:localhost:1337connection:keep-alive}trailers:{}readable:falseurl:/method:GETstatusCode:nullclient:httpVersionMajor:1httpVersionMinor:1upgrade:false}1:{output:{}outputEncodings:{}writable:truechunkedEncoding:trueshouldKeepAlive:trueuseChunkedEncodingByDefault:truesendDate:truefinished:truesocket:nullconnection:nullstatusCode:200}2:{output:{}outputEncodings:{}writable:truechunkedEncoding:falseshouldKeepAlive:trueuseChunkedEncodingByDefault:falsesendDate:falsefinished:trueagent:{options:{}requests:{}sockets:{}maxSockets:5}method:GETpath:/socket:{destroyed:trueerrorEmitted:falsebytesRead:120writable:falseparser:nullondata:nullonend:nullreadable:false}connection:parser:nullres:{socket:connection:httpVersion:1.1complete:trueheaders:{date:Thu, 02 Aug 2012 03:07:55 GMTconnection:keep-alivetransfer-encoding:chunked}trailers:{}readable:falseurl:method:nullstatusCode:200client:httpVersionMajor:1httpVersionMinor:1upgrade:falsereq:}}3:}
1188

benchmarking /Users/isaacs/dev/js/bench/examples/util-inspect.js
Please be patient.
{ http_parser: '1.0',
  node: '0.8.5-pre',
  v8: '3.11.10.17',
  ares: '1.7.5-DEV',
  uv: '0.8',
  zlib: '1.2.3',
  openssl: '1.0.0f' }
Scores: (bigger is better)

sparseFE 10
Raw:
 > 27.750247770069375
 > 29.09796314258002
 > 28.74132804757185
 > 28.237585199610518
 > 28.04642166344294
Average (mean) 28.374709164654938

sparseFE2 10
Raw:
 > 26.65350444225074
 > 26.65350444225074
 > 26.29016553067186
 > 27.722772277227723
 > 26.812313803376366
Average (mean) 26.826452099155482

sparse 10
Raw:
 > 6.5481758652946676
 > 6.756756756756757
 > 6.653992395437262
 > 6.679389312977099
 > 6.74373795761079
Average (mean) 6.676410457615316

noCommas 10
Raw:
 > 6.542056074766355
 > 6.647673314339981
 > 6.416131989000917
 > 6.5913370998116765
 > 6.585136406396989
Average (mean) 6.5564669768631845

flatten 10
Raw:
 > 6.5359477124183005
 > 6.451612903225806
 > 6.5055762081784385
 > 6.445672191528545
 > 6.5481758652946676
Average (mean) 6.497396976129151

JSON.stringify (guarded)
Raw:
 > 4.962779156327543
 > 5.089058524173028
 > 5.05050505050505
 > 5
 > 5.150214592274678
Average (mean) 5.05051146465606

Winner: sparseFE 10
Compared with next highest (sparseFE2 10), it's:
5.46% faster
1.06 times as fast
0.02 order(s) of magnitude faster

Compared with the slowest (JSON.stringify (guarded)), it's:
82.2% faster
5.62 times as fast
0.75 order(s) of magnitude faster
**/
