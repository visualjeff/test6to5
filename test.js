var assert = require("assert")

describe('ES6 functionality supported', function(){
  describe('const', function(){
    it('cofirm block supported', function(){
      const MAX_SIZE = 10;
      {const MAX_SIZE = 22 }
      assert.strictEqual(MAX_SIZE, 10);
    })
  })

  describe('const', function(){
    it('confirm const is supported', function(){
        const MAX_SIZE = 10;
        assert.strictEqual(MAX_SIZE, 10);
    })
  })

  describe('const', function(){
    it('confirm const redefine is an error', function(){
      try {
        Function ("const foo = 1; const foo = 2;")(); //IFFE - Immediately-Invoked Function Expression
      } catch(e) {
        return true;
      }
    })
  })

  describe('const', function(){
    it('confirm const temporal dead zone', function(){
      var passed = ( function() { try { qux; } catch(e) { return true; }}());
      const qux = 456;
      return passed;
    })
  })

  describe('const', function(){
    it('basic support (strict mode)', function(){
      "use strict";
      const foo = 123;
      assert.strictEqual(foo, 123);
    })
  })

  describe('const', function(){
    it('block scoped (strict mode)', function(){
      "use strict";
      const MAX_SIZE = 10;
      {const MAX_SIZE = 22 }
      assert.strictEqual(MAX_SIZE, 10);
    })
  })

  describe('const', function(){
    it('redefining a const (strict mode))', function(){
      "use strict";
      const baz = 1;
      try {
        Function ("use strict; const foo = 1; const foo = 2;")(); //IFFE - Immediately-Invoked Function Expression
      } catch(e) {
        return true;
      }
    })
  })

  describe('const', function(){
    it('confirm const temporal dead zone (strict mode)', function(){
      "use strict";
      var passed = ( function() { try { qux; } catch(e) { return true; }}());
      const qux = 456;
      return passed;
    })
  })

  //let provides true block scoping.
  describe('let', function(){
    it('basic support', function(){
      let foo = 123;
      assert.strictEqual(foo, 123);
    })
  })

  describe('let', function(){
    it('is block scoped', function(){
      let foo = 123;
      {let foo = 456}
      assert.strictEqual(foo, 123);
    })
  })

  describe('let', function(){
    it('for loop scoped', function(){
      let baz = 1;
      for (let baz = 0; false; false) {};
      assert.strictEqual(baz, 1);
    })
  })

  describe('let', function(){
    it('confirm let temporal dead zone', function(){
      var passed = ( function() { try { qux; } catch(e) { return true; }}()); //undefined qux causes a an error which returns true.
      let qux = 456;
      return passed;
    })
  })

  describe('let', function(){
    it('for loop iteration scoped', function(){
      let scopes = [];
      for (let i = 0; i < 2; i++) {
          scopes.push(function() { return i; });
      };
      let passed = (scopes[0]() === 0 && scopes[1]() === 1);
      //let passed = (assert.strictEqual(scopes[0](), 0) && assert.strictEqual(scopes[1](), 1));

      scopes = [];
      for (let i in {a: 1, b: 1}) {
        scopes.push(function() { return i; });
      };
      passed &= (scopes[0]() === 1 && scopes[1]() === 2);
      //passed &= (assert.strictEqual(scopes[0](), 1) && assert.strictEqual(scopes[1](), 2));
      return passed;
    })
  })

  describe('let', function(){
    it('basic support (strict mode)', function(){
      "use strict";
      let foo = 123;
      assert.strictEqual(foo, 123);
    })
  })

  describe('let', function(){
    it('is block scoped (strict mode)', function(){
      "use strict";
      let foo = 123;
      {let foo = 456}
      assert.strictEqual(foo, 123);
    })
  })

  describe('let', function(){
    it('for loop scoped (strict mode)', function(){
      "use strict";
      let baz = 1;
      for (let baz = 0; false; false) {};
      assert.strictEqual(baz, 1);
    })
  })

  describe('let', function(){
    it('confirm let temporal dead zone (strict mode)', function(){
      "use strict";
      var passed = ( function() { try { qux; } catch(e) { return true; }}());
      let qux = 456;
      return passed;
    })
  })

  describe('let', function(){
    it('for loop iteration scoped (strict mode)', function(){
      "use strict";
      let scopes = [];
      for (let i = 0; i < 2; i++) {
        scopes.push(function() { return i; });
      };
      let passed = (scopes[0]() === 0 && scopes[1]() === 1);
      //let passed = (assert.strictEqual(scopes[0](), 0) && assert.strictEqual(scopes[1](), 1));

      scopes = [];
      for (let i in {a: 1, b: 1}) {
        scopes.push(function() { return i; });
      };
      passed &= (scopes[0]() === 1 && scopes[1]() === 2);
      //passed &= (assert.strictEqual(scopes[0](), 1) && assert.strictEqual(scopes[1](), 2));
      return passed;
    })
  })

  describe('block-level function declarations', function(){
    it('block-level function declarations', function(){
      function f() { return 1; }
      {
        function f() { return 2;}
      }
      assert.strictEqual(f(), 1);
    })
  })

  describe('destructuring', function(){
    it('with arrays', function(){
      var [a, , [b], c] = [5, null, [6]];
      var d, e;
      [d,e] = [7,8];
      return (assert.strictEqual(a, 5) &&
      assert.strictEqual(b, 6) &&
      assert.strictEqual(c, undefined) &&
      assert.strictEqual(d, 7) &&
      assert.strictEqual(e, 8));
    })
  })

  describe('destructuring', function(){
    it('with strings', function(){
      var [a, b, c] = "ab";
      var d, e;
      [d, e] = "de";
      return (assert.strictEqual(a, a) &&
      assert.strictEqual(b, b) &&
      assert.strictEqual(c, undefined) &&
      assert.strictEqual(d, d) &&
      assert.strictEqual(e, e));
    })
  })

  describe('destructuring', function(){
    it('with astral plane strings', function(){
      var a;
      [a] = "🐄";
      assert.strictEqual(a, "🐄");
    })
  })

  describe('destructuring', function(){
    it('with generic tables', function(){
      var [a,b,c] = __createIterableObject(1,2);
      var d, e;
      [d, e] = __createIterableObject(3, 4);
      return (assert.strictEqual(a, 1) &&
        assert.strictEqual(b, 2) &&
        assert.strictEqual(c, undefined) &&
        assert.strictEqual(d, 3) &&
        assert.strictEqual(e, 4)
      );
    })
  })

  describe('destructuring', function(){
    it('with instanct of generic tables', function(){
      var [a,b,c] = Object.create(__createIterableObject(1,2));
      var d, e;
      [d, e] = Object.create(__createIterableObject(3, 4));
      return (assert.strictEqual(a, 1) &&
        assert.strictEqual(b, 2) &&
        assert.strictEqual(c, undefined) &&
        assert.strictEqual(d, 3) &&
        assert.strictEqual(e, 4)
      );
    })
  })

  describe('destructuring', function(){
    it('iterable destructuring expression', function(){
      var a, b, iterable = [1, 2];
      return assert.strictEqual([a,b] = iterable, iterable);
    })
  })

  describe('destructuring', function(){
    it('chained iterable deconstructoring', function(){
      var a,b,c,d;
      [a,b] = [c,d] = [1,2];
      return (assert.strictEqual(a,1) &&
      assert.strictEqual(b,2) &&
      assert.strictEqual(c,1) &&
      assert.strictEqual(d,2));
    })
  })

  describe('destructuring', function(){
    it('with objects', function(){
      var {c, x:d, e} = {c:7, x:8};
      var f, g;
      ({f,g} = {f:9, g:10});
      return (assert.strictEqual(c,7) &&
      assert.strictEqual(d,8) &&
      assert.strictEqual(e,undefined) &&
      assert.strictEqual(f,9) &&
      assert.strictEqual(g,10));
    })
  })

  describe('destructuring', function(){
    it('object.destructuring expression', function(){
      var a, b, obj = {a:1, b:2};
      return assert.strictEqual(({a,b} = obj),obj);
    })
  })

  describe('destructuring', function(){
    it('chained object distructuring', function(){
      var a,b,c,d;
      ({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
      return (assert.strictEqual(a,1) &&
        assert.strictEqual(b,2) &&
        assert.strictEqual(c,3) &&
        assert.strictEqual(d,4));
    })
  })

  describe('destructuring', function(){
    it('throws on null and undefined', function(){
      try{
        var {a} = null;
        return false;
      } catch(e) {};
      try {
        var {b} = undefined;
        return false;
      } catch(e) {};
      return true;
    })
  })

  describe('destructuring', function(){
    it('computed properties', function(){
      var qux = "corge";
      var { [qux]: grault } = { corge: "garply" };
      return assert.strictEqual(grault, "garply");
    })
  })

  describe('destructuring', function(){
    it('multiples in a single var statement', function(){
      var [a, b] = [5, 6], {c, d} = {c:7, d:8}
      return (assert.strictEqual(a,5) &&
        assert.strictEqual(b,6) &&
        assert.strictEqual(c,7) &&
        assert.strictEqual(d,8));
    })
  })

  describe('destructuring', function(){
    it('nested', function(){
      var [e, {x:f, g}] = [9, {x:10}];
      var {h, x:[i]} = {h:11, x:[12]}
      return (assert.strictEqual(e,9) &&
        assert.strictEqual(f,10) &&
        assert.strictEqual(g,undefined) &&
        assert.strictEqual(h,11) &&
        assert.strictEqual(i,12));
    })
  })

  describe('destructuring', function(){
    it('in parameters', function(){
      return (function({a, x:b, y:e}, [c,d]) {
        return (assert.strictEqual(a,1) &&
        assert.strictEqual(b,2) &&
        assert.strictEqual(c,3) &&
        assert.strictEqual(d,4) &&
        assert.strictEqual(e,undefined));
      } ({a:1, x:2},[3, 4]));
    })
  })

  describe('destructuring', function(){
    it('in parameters, function length property', function(){
      return assert.strictEqual(function({a, b},[c, d]){}.length,2);
    })
  })

  describe('destructuring', function(){
    it('in for in loop heads', function(){
      for (var [i, j, k] in { qux: 1 }) {
        return (assert.strictEqual(i,"q") &&
          assert.strictEqual(j,"u") &&
          assert.strictEqual(k,"x"));
      }
    })
  })

  describe('destructuring', function(){
    it('in for of loop heads', function(){
      for (var [i, j, k] of [[1, 2, 3]]) {
        return (assert.strictEqual(i,1) &&
          assert.strictEqual(j,2) &&
          assert.strictEqual(k,3));
      }
    })
  })

  describe('destructuring', function(){
    it('rest', function(){
      var [a, ...b] = [3, 4, 5];
      var [c, ...d] = [6];
      return (assert.strictEqual(a,3) &&
        b instanceof Array &&
        assert.strictEqual(b + "", "4,5") &&
        assert.strictEqual(c, 6) &&
        d instanceof Array &&
        assert.strictEqual(d.length, 0));
    })
  })

  describe('destructuring', function(){
    it('nested rest', function(){
      var a = [1, 2, 3], first, last;
      [first, ...[a[2], last]] = a;
      return (assert.strictEqual(first,1) &&
        assert.strictEqual(last, 3) &&
        assert.strictEqual((a+""), "1,2,2"));
    })
  })

  describe('destructuring', function(){
    it('defaults', function(){
      var {a = 1, b = 0, c = 3} = { b:2, c:undefined };
      return (assert.strictEqual(a,1) &&
        assert.strictEqual(b,2) &&
        assert.strictEqual(c,3));
    })
  })

  describe('destructuring', function(){
    it('defaults in parameters', function(){
      return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5, z:f}) {
        return (assert.strictEqual(a, 1) &&
          assert.strictEqual(b, 2) &&
          assert.strictEqual(c, 3) &&
          assert.strictEqual(d, 4) &&
          assert.strictEqual(e, 5) &&
          assert.strictEqual(f, undefined));
      }({b:2, c:undefined, x:4}));
    })
  })

  describe('destructuring', function(){
    it('defaults, let temporal dead zone', function(){
      var {a, b = 2} = { a:1 };
      try {
        eval("let {c = c} = {};");
        return false;
      } catch(e) {}
      try {
        eval("let {c = d, d} = {d:1};");
        return false;
      } catch(e) {}
      return (assert.strictEqual(a, 1) && assert.strictEqual(b, 2));
    })
  })

  describe('destructuring', function(){
    it('defaults in parameters, seperate scope', function(){
      return (function({a=function() {
        return typeof b === 'undefined';
      }}) {
        var b = 1;
        return a();
      }({}));
    })
  })

  describe('default parameters', function(){
    it('basic functionality', function(){
      return ( function(a = 1, b = 2) { return (assert.strictEqual(a, 3) && assert.strictEqual(b, 2)); }(3) );
    })
  })

  describe('default parameters', function(){
    it('explicit undefined defers to the default', function(){
      return ( function(a = 1, b = 2) { return (assert.strictEqual(a, 1) && assert.strictEqual(b, 3)); }(undefined, 3) );
    })
  })

  describe('default parameters', function(){
    it('defaults can refer to previous params', function(){
      return ( function(a, b = a) { return assert.strictEqual(b, 5); }(5) );
    })
  })

  describe('default parameters', function(){
    it('temporal dead zone', function(){
      return ( function(x = 1) {
        try {
          eval("function (a = a){}()");
          return false;
        } catch(e) {}
        try {
          eval("function (a = b, b){}()");
          return false
        } catch(e) {}
        return true;
      }());
    })
  })

  describe('default parameters', function(){
    it('seperate scope', function(){
      return function(a = function() {
        return assert.strictEqual(typeof b, 'undefined');
      }) {
        var b = 1;
        return a();
      }();
    })
  })

  describe('rest parameters', function(){
    it('basic functionality', function(){
      return function(foo, ...args) {
        return (args instanceof Array && assert.strictEqual(args + "", "bar,baz"));
      }("foo", "bar", "baz");
    })
  })

  describe('rest parameters', function(){
    it('function length property', function(){
      return (assert.strictEqual(function(a, ...b){}.length, 1) && assert.strictEqual(function(...c){}.length, 0));
    })
  })

  describe('rest parameters', function(){
    it('arguments object interaction', function(){
      return function(foo, ...args) {
        foo = "qux";
        return (assert.strictEqual(arguments.length, 3) &&
          (assert.strictEqual(arguments[0], "foo")) &&
          (assert.strictEqual(arguments[1], "bar")) &&
          (assert.strictEqual(arguments[2], "baz"))
        );
      }("foo", "bar", "baz");
    })
  })
});

describe('spread operator', function(){
  it('with arrays, in function calls', function(){
    return assert.strictEqual(Math.max(...[1,2,3]), 3);
  })
})

describe('spread operator', function(){
  it('with arrays, in array literals', function(){
    return assert.strictEqual([...[1,2,3]][2], 3);
  })
})

describe('spread operator', function(){
  it('with strings, in function calls', function(){
    return assert.strictEqual(Math.max(..."1234"), 4);
  })
})

describe('spread operator', function(){
  it('with strings, in array literals', function(){
    return assert.strictEqual(["a",..."bcd", "e"][3], "d");
  })
})

describe('spread operator', function(){
  it('with astral plane strings, in function calls', function(){
    return assert.strictEqual(Array(..."🐄")[0], "🐄");
  })
})

describe('spread operator', function(){
  it('with astral plane strings, in array literals', function(){
    return assert.strictEqual([..."🐄"][0], "🐄");
  })
})

describe('spread operator', function(){
  it('with generic iterables in calls', function(){
    var iterable = __createIterableObject(1,2,3);
    return assert.strictEqual(Math.max(...iterable), 3);
  })
})

describe('spread operator', function(){
  it('with generic iterables in arrays', function(){
    var iterable = __createIterableObject("b","c","d");
    return assert.strictEqual(["a",...iterable, "e"][3], "d");
  })
})

describe('spread operator', function(){
  it('with instance of iterables in calls', function(){
    var iterable = __createIterableObject(1,2,3);
    return assert.strictEqual(Math.max(...Object.create(iterable)), 3);
  })
})

describe('spread operator', function(){
  it('with instance of iterables in arrays', function(){
    var iterable = __createIterableObject("b","c","d");
    return assert.strictEqual(["a",...Object.create(iterable), "e"][3], "d");
  })
})

describe('object literal expressions', function(){
  it('computed properties', function(){
    var x = 'y';
    return assert.strictEqual(({[x]:1}).y, 1);
  })
})

describe('object literal expressions', function(){
  it('shorthand properties', function(){
    var a = 7, b = 8, c = {a, b};
    return (assert.strictEqual(c.a, 7) && assert.strictEqual(c.b, 8));
  })
})

describe('object literal expressions', function(){
  it('shorthand methods', function(){
    return assert.strictEqual(({ y() { return 2; } }).y(), 2);
  })
})

describe('object literal expressions', function(){
  it('computed shorthand methods', function(){
    var x = 'y';
    return assert.strictEqual(({ [x]() { return 2; } }).y(), 2);
  })
})

describe('object literal expressions', function(){
  it('computed accessors', function(){
    var x = 'y',
      valueSet,
      obj = {
        get [x] () { return 1 },
        set [x] (value) { valueSet = value }
      };
      obj.y = 'foo';
      return (assert.strictEqual(obj.y, 1) && assert.strictEqual(valueSet, 'foo'));
  })
})

describe('for..of loops', function(){
  it('with arrays', function(){
    var arr = [5];
    for (var item of arr)
      return assert.strictEqual(item, 5);
  })
})

describe('for..of loops', function(){
  it('with strings', function(){
    var str = "";
    for (var item of "foo") {
      str += item;
    }
    return assert.strictEqual(str, "foo");
  })
})

describe('for..of loops', function(){
  it('with astral plane strings', function(){
    var str = "";
    for (var item of "🐄") {
      str += item;
    }
    return assert.strictEqual(str, "🐄");
  })
})

describe('for..of loops', function(){
  it('with generic iterables', function(){
    var result = "";
    var iterable = __createIterableObject(1, 2, 3);
    for (var item of iterable) {
      result += item;
    }
    return assert.strictEqual(result, "123");
  })
})

describe('for..of loops', function(){
  it('with instances of generic iterables', function(){
    var result = "";
    var iterable = __createIterableObject(1, 2, 3);
    for (var item of Object.create(iterable)) {
      result += item;
    }
    return assert.strictEqual(result, "123");
  })
})

describe('octal and binary literals', function(){
  it('octal literals', function(){
    return (assert.strictEqual(0o10, 8) && assert.strictEqual(0O10, 8));
  })
})

describe('octal and binary literals', function(){
  it('binary literals', function(){
    return (assert.strictEqual(0b10, 2) && assert.strictEqual(0B10, 2));
  })
})

describe('octal and binary literals', function(){
  it('octal supported by Number()', function(){
    return assert.strictEqual(Number('0o1'), 1);
  })
})

describe('octal and binary literals', function(){
  it('binary support by Number()', function(){
    return assert.strictEqual(Number('0b1'), 1);
  })
})

describe('template strings', function(){
  it('basic functionality', function(){
    var a = "ba", b = "QUX";
    return `foo bar ${a + "z"} ${b.toLowerCase()}` === "foo bar\nbaz qux";
  })
})

describe('template strings', function(){
  it('tagged template strings', function(){
    var called = false;
    function fn(parts, a, b) {
      called = true;
      return (parts instanceof Array &&
        assert.strictEqual(parts[0], "foo") &&
        assert.strictEqual(parts[1], "bar\n") &&
        assert.strictEqual(parts[0].raw, "foo") &&
        assert.strictEqual(parts[1].raw, "bar\\n") &&
        assert.strictEqual(a, "123") &&
        assert.strictEqual(b, "456")
      )
      return fn `foo${123}bar\n${456}` && called;
    }
  })
})

describe('RegExp "u" & "y" flags', function(){
  it('"u" flag', function(){
    var re = new RegExp('\\w');
    var re2 = new RegExp('\\w', 'y');
    re.exec('xy');
    re2.exec('xy');
    return (assert.strictEqual(re.exec('xy')[0],'x') && assert.strictEqual(re2.exec('xy')[0],'y'));
  })
})

describe('RegExp "u" & "y" flags', function(){
  it('"y" flag', function(){
    return assert.strictEqual("🐄".match(/./u)[0].length, 2);
  })
})

describe('Unicode code point escapes', function(){
  it('basic functionality', function(){
    return assert.strictEqual('\u{1d306}','\ud834\udf06');
  })
})

describe('Arrow function', function(){
  it('0 parameters', function(){
    return assert.strictEqual((() => 5)(), 5);
  })
})

describe('Arrow function', function(){
  it('1 parameters, no brackets', function(){
    var b = x => x + "foo";
    return assert.strictEqual(b("fee fie foe "), "fee fie foe foo");
  })
})

describe('Arrow function', function(){
  it('multiple parameters', function(){
    var c = (v, w, x, y, z) => "" + v + w + x + y + z;
    return assert.strictEqual(c(6, 5, 4, 3, 2), "65432");
  })
})

describe('Arrow function', function(){
  it('lexical "this" binding', function(){
    var d = { x: "bar", y: function() { return z => this.x + z}}.y();
    var e = { x: "baz", y: d };
    return (assert.strictEqual(d("ley"), "barley") && assert.strictEqual(e.y("ley"), "barley"));
  })
})

describe('Arrow function', function(){
  it('"this" unchanged by call or apply', function(){
    var d = { x: "foo", y: function() { return z => this.x}};
    var e = { x: "bar"};
    return (assert.strictEqual(d.y().call(e), "foo") && assert.strictEqual(d.y().apply(e), "foo"));
  })
})

describe('Arrow function', function(){
  it("can't be bound, can be curried", function(){
    var d = { x: "bar", y: function() { return z => this.x + z}};
    var e = { x: "baz"};
    return (assert.strictEqual(d.y().bind(e, "ley")(), "barley"));
  })
})


function __createIterableObject(a, b, c) {
  if (typeof Symbol === "function" && Symbol.iterator) {
    var arr = [a, b, c, ,];
    var iterable = {
      next: function() {
        return { value: arr.shift(), done: arr.length <= 0 };
      },
    };
    iterable[Symbol.iterator] = function(){ return iterable; }
    return iterable;
  }
  else {
    return eval("(function*() { yield a; yield b; yield c; }())");
  }
};
