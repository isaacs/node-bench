function StrField () {
  this.a = '';
  this.b = '';
  this.c = '';
}

function NullField () {
  this.a = null;
  this.b = null;
  this.c = null;
}

function UndefField () {
  this.a = undefined;
  this.b = undefined;
  this.c = undefined;
}

function NoField () {
}

function test (Class) { return function () {
  var o = new Class();
  o.a = 'some value';
  o.b = 'some other value';
  if (o.c || Math.random() > 0.5) {
    o.c = 'yet another value';
  }
}}

exports.compare = {
  StrField: test(StrField),
  NullField: test(NullField),
  UndefField: test(UndefField),
  //NoField: test(NoField),
  //Object: test(Object),
  //NoClass: function () {
  //  var o = {}
  //  o.a = 'some value';
  //  o.b = 'some other value';
  //  if (o.c || Math.random() > 0.5) {
  //    o.c = 'yet another value';
  //  }
  //}
}

require('bench').runMain()
