var assert = require("assert")

describe('ES6 functionality supported', function() {
    describe('const', function() {
        it('cofirm block supported', function() {
            const MAX_SIZE = 10; {
                const MAX_SIZE = 22
            }
            assert.strictEqual(MAX_SIZE, 10);
        })
    })

    describe('const', function() {
        it('confirm const is supported', function() {
            const MAX_SIZE = 10;
            assert.strictEqual(MAX_SIZE, 10);
        })
    })

    describe('const', function() {
        it('confirm const redefine is an error', function() {
            try {
                Function("const foo = 1; const foo = 2;")(); //IFFE - Immediately-Invoked Function Expression
            } catch (e) {
                return true;
            }
        })
    })

    describe('const', function() {
        it('confirm const temporal dead zone', function() {
            var passed = (function() {
                try {
                    qux;
                } catch (e) {
                    return true;
                }
            }());
            const qux = 456;
            return passed;
        })
    })

    describe('const', function() {
        it('basic support (strict mode)', function() {
            "use strict";
            const foo = 123;
            assert.strictEqual(foo, 123);
        })
    })

    describe('const', function() {
        it('block scoped (strict mode)', function() {
            "use strict";
            const MAX_SIZE = 10; {
                const MAX_SIZE = 22
            }
            assert.strictEqual(MAX_SIZE, 10);
        })
    })

    describe('const', function() {
        it('redefining a const (strict mode))', function() {
            "use strict";
            const baz = 1;
            try {
                Function("use strict; const foo = 1; const foo = 2;")(); //IFFE - Immediately-Invoked Function Expression
            } catch (e) {
                return true;
            }
        })
    })

    describe('const', function() {
        it('confirm const temporal dead zone (strict mode)', function() {
            "use strict";
            var passed = (function() {
                try {
                    qux;
                } catch (e) {
                    return true;
                }
            }());
            const qux = 456;
            return passed;
        })
    })

    //let provides true block scoping.
    describe('let', function() {
        it('basic support', function() {
            let foo = 123;
            assert.strictEqual(foo, 123);
        })
    })

    describe('let', function() {
        it('is block scoped', function() {
            let foo = 123; {
                let foo = 456
            }
            assert.strictEqual(foo, 123);
        })
    })

    describe('let', function() {
        it('for loop scoped', function() {
            let baz = 1;
            for (let baz = 0; false; false) {};
            assert.strictEqual(baz, 1);
        })
    })

    describe('let', function() {
        it('confirm let temporal dead zone', function() {
            var passed = (function() {
                try {
                    qux;
                } catch (e) {
                    return true;
                }
            }()); //undefined qux causes a an error which returns true.
            let qux = 456;
            return passed;
        })
    })

    describe('let', function() {
        it('for loop iteration scoped', function() {
            let scopes = [];
            for (let i = 0; i < 2; i++) {
                scopes.push(function() {
                    return i;
                });
            };
            let passed = (scopes[0]() === 0 && scopes[1]() === 1);
            //let passed = (assert.strictEqual(scopes[0](), 0) && assert.strictEqual(scopes[1](), 1));

            scopes = [];
            for (let i in {
                a: 1,
                b: 1
            }) {
                scopes.push(function() {
                    return i;
                });
            };
            passed &= (scopes[0]() === 1 && scopes[1]() === 2);
            //passed &= (assert.strictEqual(scopes[0](), 1) && assert.strictEqual(scopes[1](), 2));
            return passed;
        })
    })

    describe('let', function() {
        it('basic support (strict mode)', function() {
            "use strict";
            let foo = 123;
            assert.strictEqual(foo, 123);
        })
    })

    describe('let', function() {
        it('is block scoped (strict mode)', function() {
            "use strict";
            let foo = 123; {
                let foo = 456
            }
            assert.strictEqual(foo, 123);
        })
    })

    describe('let', function() {
        it('for loop scoped (strict mode)', function() {
            "use strict";
            let baz = 1;
            for (let baz = 0; false; false) {};
            assert.strictEqual(baz, 1);
        })
    })

    describe('let', function() {
        it('confirm let temporal dead zone (strict mode)', function() {
            "use strict";
            var passed = (function() {
                try {
                    qux;
                } catch (e) {
                    return true;
                }
            }());
            let qux = 456;
            return passed;
        })
    })

    describe('let', function() {
        it('for loop iteration scoped (strict mode)', function() {
            "use strict";
            let scopes = [];
            for (let i = 0; i < 2; i++) {
                scopes.push(function() {
                    return i;
                });
            };
            let passed = (scopes[0]() === 0 && scopes[1]() === 1);
            //let passed = (assert.strictEqual(scopes[0](), 0) && assert.strictEqual(scopes[1](), 1));

            scopes = [];
            for (let i in {
                a: 1,
                b: 1
            }) {
                scopes.push(function() {
                    return i;
                });
            };
            passed &= (scopes[0]() === 1 && scopes[1]() === 2);
            //passed &= (assert.strictEqual(scopes[0](), 1) && assert.strictEqual(scopes[1](), 2));
            return passed;
        })
    })

    describe('block-level function declarations', function() {
        it('block-level function declarations', function() {
            function f() {
                return 1;
            } {
                function f() {
                    return 2;
                }
            }
            assert.strictEqual(f(), 1);
        })
    })

    describe('destructuring', function() {
        it('with arrays', function() {
            var [a, , [b], c] = [5, null, [6]];
            var d, e;
            [d, e] = [7, 8];
            return (assert.strictEqual(a, 5) &&
                assert.strictEqual(b, 6) &&
                assert.strictEqual(c, undefined) &&
                assert.strictEqual(d, 7) &&
                assert.strictEqual(e, 8));
        })
    })

    describe('destructuring', function() {
        it('with strings', function() {
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

    describe('destructuring', function() {
        it('with astral plane strings', function() {
            var a;
            [a] = "🐄";
            assert.strictEqual(a, "🐄");
        })
    })

    describe('destructuring', function() {
        it('with generic tables', function() {
            var [a, b, c] = __createIterableObject(1, 2);
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

    describe('destructuring', function() {
        it('with instanct of generic tables', function() {
            var [a, b, c] = Object.create(__createIterableObject(1, 2));
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

    describe('destructuring', function() {
        it('iterable destructuring expression', function() {
            var a, b, iterable = [1, 2];
            return assert.strictEqual([a, b] = iterable, iterable);
        })
    })

    describe('destructuring', function() {
        it('chained iterable deconstructoring', function() {
            var a, b, c, d;
            [a, b] = [c, d] = [1, 2];
            return (assert.strictEqual(a, 1) &&
                assert.strictEqual(b, 2) &&
                assert.strictEqual(c, 1) &&
                assert.strictEqual(d, 2));
        })
    })

    describe('destructuring', function() {
        it('with objects', function() {
            var {
                c, x: d, e
            } = {
                c: 7,
                x: 8
            };
            var f, g;
            ({
                f, g
            } = {
                f: 9,
                g: 10
            });
            return (assert.strictEqual(c, 7) &&
                assert.strictEqual(d, 8) &&
                assert.strictEqual(e, undefined) &&
                assert.strictEqual(f, 9) &&
                assert.strictEqual(g, 10));
        })
    })

    describe('destructuring', function() {
        it('object.destructuring expression', function() {
            var a, b, obj = {
                a: 1,
                b: 2
            };
            return assert.strictEqual(({
                a, b
            } = obj), obj);
        })
    })

    describe('destructuring', function() {
        it('chained object distructuring', function() {
            var a, b, c, d;
            ({
                a, b
            } = {
                c, d
            } = {
                a: 1,
                b: 2,
                c: 3,
                d: 4
            });
            return (assert.strictEqual(a, 1) &&
                assert.strictEqual(b, 2) &&
                assert.strictEqual(c, 3) &&
                assert.strictEqual(d, 4));
        })
    })

    describe('destructuring', function() {
        it('throws on null and undefined', function() {
            try {
                var {
                    a
                } = null;
                return false;
            } catch (e) {};
            try {
                var {
                    b
                } = undefined;
                return false;
            } catch (e) {};
            return true;
        })
    })

    describe('destructuring', function() {
        it('computed properties', function() {
            var qux = "corge";
            var {
                [qux]: grault
            } = {
                corge: "garply"
            };
            return assert.strictEqual(grault, "garply");
        })
    })

    describe('destructuring', function() {
        it('multiples in a single var statement', function() {
            var [a, b] = [5, 6], {
                c, d
            } = {
                c: 7,
                d: 8
            }
            return (assert.strictEqual(a, 5) &&
                assert.strictEqual(b, 6) &&
                assert.strictEqual(c, 7) &&
                assert.strictEqual(d, 8));
        })
    })

    describe('destructuring', function() {
        it('nested', function() {
            var [e, {
                x: f,
                g
            }] = [9, {
                x: 10
            }];
            var {
                h, x: [i]
            } = {
                h: 11,
                x: [12]
            }
            return (assert.strictEqual(e, 9) &&
                assert.strictEqual(f, 10) &&
                assert.strictEqual(g, undefined) &&
                assert.strictEqual(h, 11) &&
                assert.strictEqual(i, 12));
        })
    })

    describe('destructuring', function() {
        it('in parameters', function() {
            return (function({
                a, x: b, y: e
            }, [c, d]) {
                return (assert.strictEqual(a, 1) &&
                    assert.strictEqual(b, 2) &&
                    assert.strictEqual(c, 3) &&
                    assert.strictEqual(d, 4) &&
                    assert.strictEqual(e, undefined));
            }({
                a: 1,
                x: 2
            }, [3, 4]));
        })
    })

    describe('destructuring', function() {
        it('in parameters, function length property', function() {
            return assert.strictEqual(function({
                a, b
            }, [c, d]) {}.length, 2);
        })
    })

    describe('destructuring', function() {
        it('in for in loop heads', function() {
            for (var [i, j, k] in {
                qux: 1
            }) {
                return (assert.strictEqual(i, "q") &&
                    assert.strictEqual(j, "u") &&
                    assert.strictEqual(k, "x"));
            }
        })
    })

    describe('destructuring', function() {
        it('in for of loop heads', function() {
            for (var [i, j, k] of[[1, 2, 3]]) {
                return (assert.strictEqual(i, 1) &&
                    assert.strictEqual(j, 2) &&
                    assert.strictEqual(k, 3));
            }
        })
    })

    describe('destructuring', function() {
        it('rest', function() {
            var [a, ...b] = [3, 4, 5];
            var [c, ...d] = [6];
            return (assert.strictEqual(a, 3) &&
                b instanceof Array &&
                assert.strictEqual(b + "", "4,5") &&
                assert.strictEqual(c, 6) &&
                d instanceof Array &&
                assert.strictEqual(d.length, 0));
        })
    })

    describe('destructuring', function() {
        it('nested rest', function() {
            var a = [1, 2, 3],
                first, last;
            [first, ...[a[2], last]] = a;
            return (assert.strictEqual(first, 1) &&
                assert.strictEqual(last, 3) &&
                assert.strictEqual((a + ""), "1,2,2"));
        })
    })

    describe('destructuring', function() {
        it('defaults', function() {
            var {
                a = 1, b = 0, c = 3
            } = {
                b: 2,
                c: undefined
            };
            return (assert.strictEqual(a, 1) &&
                assert.strictEqual(b, 2) &&
                assert.strictEqual(c, 3));
        })
    })

    describe('destructuring', function() {
        it('defaults in parameters', function() {
            return (function({
                a = 1, b = 0, c = 3, x: d = 0, y: e = 5, z: f
            }) {
                return (assert.strictEqual(a, 1) &&
                    assert.strictEqual(b, 2) &&
                    assert.strictEqual(c, 3) &&
                    assert.strictEqual(d, 4) &&
                    assert.strictEqual(e, 5) &&
                    assert.strictEqual(f, undefined));
            }({
                b: 2,
                c: undefined,
                x: 4
            }));
        })
    })

    describe('destructuring', function() {
        it('defaults, let temporal dead zone', function() {
            var {
                a, b = 2
            } = {
                a: 1
            };
            try {
                eval("let {c = c} = {};");
                return false;
            } catch (e) {}
            try {
                eval("let {c = d, d} = {d:1};");
                return false;
            } catch (e) {}
            return (assert.strictEqual(a, 1) && assert.strictEqual(b, 2));
        })
    })

    describe('destructuring', function() {
        it('defaults in parameters, seperate scope', function() {
            return (function({
                a = function() {
                    return typeof b === 'undefined';
                }
            }) {
                var b = 1;
                return a();
            }({}));
        })
    })

    describe('default parameters', function() {
        it('basic functionality', function() {
            return (function(a = 1, b = 2) {
                return (assert.strictEqual(a, 3) && assert.strictEqual(b, 2));
            }(3));
        })
    })

    describe('default parameters', function() {
        it('explicit undefined defers to the default', function() {
            return (function(a = 1, b = 2) {
                return (assert.strictEqual(a, 1) && assert.strictEqual(b, 3));
            }(undefined, 3));
        })
    })

    describe('default parameters', function() {
        it('defaults can refer to previous params', function() {
            return (function(a, b = a) {
                return assert.strictEqual(b, 5);
            }(5));
        })
    })

    describe('default parameters', function() {
        it('temporal dead zone', function() {
            return (function(x = 1) {
                try {
                    eval("function (a = a){}()");
                    return false;
                } catch (e) {}
                try {
                    eval("function (a = b, b){}()");
                    return false
                } catch (e) {}
                return true;
            }());
        })
    })

    describe('default parameters', function() {
        it('seperate scope', function() {
            return function(a = function() {
                return assert.strictEqual(typeof b, 'undefined');
            }) {
                var b = 1;
                return a();
            }();
        })
    })

    describe('rest parameters', function() {
        it('basic functionality', function() {
            return function(foo, ...args) {
                return (args instanceof Array && assert.strictEqual(args + "", "bar,baz"));
            }("foo", "bar", "baz");
        })
    })

    describe('rest parameters', function() {
        it('function length property', function() {
            return (assert.strictEqual(function(a, ...b) {}.length, 1) && assert.strictEqual(function(...c) {}.length, 0));
        })
    })

    describe('rest parameters', function() {
        it('arguments object interaction', function() {
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

describe('spread operator', function() {
    it('with arrays, in function calls', function() {
        return assert.strictEqual(Math.max(...[1, 2, 3]), 3);
    })
})

describe('spread operator', function() {
    it('with arrays, in array literals', function() {
        return assert.strictEqual([...[1, 2, 3]][2], 3);
    })
})

describe('spread operator', function() {
    it('with strings, in function calls', function() {
        return assert.strictEqual(Math.max(...
            "1234"), 4);
    })
})

describe('spread operator', function() {
    it('with strings, in array literals', function() {
        return assert.strictEqual(["a", ...
            "bcd", "e"
        ][3], "d");
    })
})

describe('spread operator', function() {
    it('with astral plane strings, in function calls', function() {
        return assert.strictEqual(Array(...
            "🐄")[0], "🐄");
    })
})

describe('spread operator', function() {
    it('with astral plane strings, in array literals', function() {
        return assert.strictEqual([...
            "🐄"
        ][0], "🐄");
    })
})

describe('spread operator', function() {
    it('with generic iterables in calls', function() {
        var iterable = __createIterableObject(1, 2, 3);
        return assert.strictEqual(Math.max(...iterable), 3);
    })
})

describe('spread operator', function() {
    it('with generic iterables in arrays', function() {
        var iterable = __createIterableObject("b", "c", "d");
        return assert.strictEqual(["a", ...iterable, "e"][3], "d");
    })
})

describe('spread operator', function() {
    it('with instance of iterables in calls', function() {
        var iterable = __createIterableObject(1, 2, 3);
        return assert.strictEqual(Math.max(...Object.create(iterable)), 3);
    })
})

describe('spread operator', function() {
    it('with instance of iterables in arrays', function() {
        var iterable = __createIterableObject("b", "c", "d");
        return assert.strictEqual(["a", ...Object.create(iterable), "e"][3], "d");
    })
})

describe('object literal expressions', function() {
    it('computed properties', function() {
        var x = 'y';
        return assert.strictEqual(({
            [x]: 1
        }).y, 1);
    })
})

describe('object literal expressions', function() {
    it('shorthand properties', function() {
        var a = 7,
            b = 8,
            c = {
                a, b
            };
        return (assert.strictEqual(c.a, 7) && assert.strictEqual(c.b, 8));
    })
})

describe('object literal expressions', function() {
    it('shorthand methods', function() {
        return assert.strictEqual(({
            y() {
                return 2;
            }
        }).y(), 2);
    })
})

describe('object literal expressions', function() {
    it('computed shorthand methods', function() {
        var x = 'y';
        return assert.strictEqual(({
            [x]() {
                return 2;
            }
        }).y(), 2);
    })
})

describe('object literal expressions', function() {
    it('computed accessors', function() {
        var x = 'y',
            valueSet,
            obj = {
                get [x]() {
                    return 1
                },
                set [x](value) {
                    valueSet = value
                }
            };
        obj.y = 'foo';
        return (assert.strictEqual(obj.y, 1) && assert.strictEqual(valueSet, 'foo'));
    })
})

describe('for..of loops', function() {
    it('with arrays', function() {
        var arr = [5];
        for (var item of arr)
            return assert.strictEqual(item, 5);
    })
})

describe('for..of loops', function() {
    it('with strings', function() {
        var str = "";
        for (var item of "foo") {
            str += item;
        }
        return assert.strictEqual(str, "foo");
    })
})

describe('for..of loops', function() {
    it('with astral plane strings', function() {
        var str = "";
        for (var item of "🐄") {
            str += item;
        }
        return assert.strictEqual(str, "🐄");
    })
})

describe('for..of loops', function() {
    it('with generic iterables', function() {
        var result = "";
        var iterable = __createIterableObject(1, 2, 3);
        for (var item of iterable) {
            result += item;
        }
        return assert.strictEqual(result, "123");
    })
})

describe('for..of loops', function() {
    it('with instances of generic iterables', function() {
        var result = "";
        var iterable = __createIterableObject(1, 2, 3);
        for (var item of Object.create(iterable)) {
            result += item;
        }
        return assert.strictEqual(result, "123");
    })
})

describe('octal and binary literals', function() {
    it('octal literals', function() {
        return (assert.strictEqual(0o10, 8) && assert.strictEqual(0O10, 8));
    })
})

describe('octal and binary literals', function() {
    it('binary literals', function() {
        return (assert.strictEqual(0b10, 2) && assert.strictEqual(0B10, 2));
    })
})

describe('octal and binary literals', function() {
    it('octal supported by Number()', function() {
        return assert.strictEqual(Number('0o1'), 1);
    })
})

describe('octal and binary literals', function() {
    it('binary support by Number()', function() {
        return assert.strictEqual(Number('0b1'), 1);
    })
})

describe('template strings', function() {
    it('basic functionality', function() {
        var a = "ba",
            b = "QUX";
        return `foo bar ${a + "z"} ${b.toLowerCase()}` === "foo bar\nbaz qux";
    })
})

describe('template strings', function() {
    it('tagged template strings', function() {
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

/*
 * NOT currently supported?
 *
describe('RegExp "u" & "y" flags', function(){
  it('"u" flag', function(){
    var re = new RegExp('\\w');
    var re2 = new RegExp('\\w', 'y');
    re.exec('xy');
    re2.exec('xy');
    return (assert.strictEqual(re.exec('xy')[0],'x') && assert.strictEqual(re2.exec('xy')[0],'y'));
  })
})
*/

describe('RegExp "u" & "y" flags', function() {
    it('"y" flag', function() {
        return assert.strictEqual("🐄".match(/./u)[0].length, 2);
    })
})

describe('Unicode code point escapes', function() {
    it('basic functionality', function() {
        return assert.strictEqual('\u{1d306}', '\ud834\udf06');
    })
})

describe('Arrow function', function() {
    it('0 parameters', function() {
        return assert.strictEqual((() => 5)(), 5);
    })
})

describe('Arrow function', function() {
    it('1 parameters, no brackets', function() {
        var b = x => x + "foo";
        return assert.strictEqual(b("fee fie foe "), "fee fie foe foo");
    })
})

describe('Arrow function', function() {
    it('multiple parameters', function() {
        var c = (v, w, x, y, z) => "" + v + w + x + y + z;
        return assert.strictEqual(c(6, 5, 4, 3, 2), "65432");
    })
})

describe('Arrow function', function() {
    it('lexical "this" binding', function() {
        var d = {
            x: "bar",
            y: function() {
                return z => this.x + z
            }
        }.y();
        var e = {
            x: "baz",
            y: d
        };
        return (assert.strictEqual(d("ley"), "barley") && assert.strictEqual(e.y("ley"), "barley"));
    })
})

describe('Arrow function', function() {
    it('"this" unchanged by call or apply', function() {
        var d = {
            x: "foo",
            y: function() {
                return z => this.x
            }
        };
        var e = {
            x: "bar"
        };
        return (assert.strictEqual(d.y().call(e), "foo") && assert.strictEqual(d.y().apply(e), "foo"));
    })
})

describe('Arrow function', function() {
    it("can't be bound, can be curried", function() {
        var d = {
            x: "bar",
            y: function() {
                return z => this.x + z
            }
        };
        var e = {
            x: "baz"
        };
        return (assert.strictEqual(d.y().bind(e, "ley")(), "barley"));
    })
})

describe('Arrow function', function() {
    it('lexical "arguments" binding', function() {
        var f = (function() {
            return z => arguments[0];
        })(5);
        return (assert.strictEqual(f(6), 5));
    })
})

describe('Arrow function', function() {
    it('no line break between param and =>', function() {
        return (() => {
            try {
                Function("x\n => 2")();
            } catch (e) {
                return true;
            }
        })();
    })
})

describe('Arrow function', function() {
    it('no prototype property', function() {
        var a = () => 5;
        return !a.hasOwnProperty("prototype");
    })
})

describe('Arrow function', function() {
    it('lexical "super" binding', function() {
        class B {
            qux() {
                return "quux";
            }
        }
        class C extends B {
            baz() {
                return x => super.qux();
            }
        }
        var arrow = new C().baz();
        return (assert.strictEqual(arrow(), "quux"));
    })
})

/* Not supportted by babel currently
describe('Arrow function', function(){
  it('lexical "new.target" binding', function(){
    function C() {
      return x => new.target;
    }
    return new C()() === C && C()() === undefined;
  })
})
*/

describe('Class', function() {
    it('class statement', function() {
        class C {}
        return assert.strictEqual((typeof C), "function");
    })
})

describe('Class', function() {
    it('block scoped', function() {
        class C {}
        var c1 = C; {
            class C {}
            var c2 = C;
        }
        return assert.strictEqual(C, c1);
    })
})

describe('Class', function() {
    it('class expression', function() {
        return assert.strictEqual((typeof class C {}), "function");
    })
})

describe('Class', function() {
    it('constructor', function() {
        class C {
            constructor() {
                this.x = 1;
            }
        }
        return assert.strictEqual(C.prototype.constructor, C) && assert.strictEqual(new C().x, 1);
    })
})

describe('Class', function() {
    it('prototype methods', function() {
        class C {
            method() {
                return 2;
            }
        }
        return assert.strictEqual((typeof C.prototype.method), "function") && assert.strictEqual(new C().method(), 2);
    })
})

describe('Class', function() {
    it('static methods', function() {
        class C {
            static method() {
                return 3;
            }
        }
        return assert.strictEqual((typeof C.method), "function") && assert.strictEqual(C().method(), 3);
    })
})

describe('Class', function() {
    it('accessor methods', function() {
        var baz = false;
        class C {
            get foo() {
                return "foo";
            }
            set bar(x) {
                baz = x;
            }
        }
        new C().bar = true;
        return assert.strictEqual(new C().foo, "foo") && baz;
    })
})

describe('Class', function() {
    it('static accessor methods', function() {
        var baz = false;
        class C {
            static get foo() {
                return "foo";
            }
            static set bar(x) {
                baz = x;
            }
        }
        C.bar = true;
        return assert.strictEqual(C.foo, "foo") && baz;
    })
})

describe('Class', function() {
    it("methods aren't enumerable", function() {
        class C {
            foo() {}
            static bar() {}
        }
        return !C.prototype.propertyIsEnumerable("foo") && !C.propertyIsEnumerable("bar");
    })
})

describe('Class', function() {
    it('implicit strict mode', function() {
        class C {
            static method() {
                return this === undefined;
            }
        }
        return (0, C.method)();
    })
})

describe('Class', function() {
    it('constructor requires new', function() {
        class C {}
        try {
            C();
        } catch (e) {
            return true;
        }
        return false;
    })
})

describe('Class', function() {
    it('extends', function() {
        class B {}
        class C extends B {};
        return (new C() instanceof B &&
            B.isPrototypeOf(C) &&
            B.prototype.isPrototypeOf(C.prototype));
    })
})

/*
 * NOT CURRENTLY SUPPORTED
 *
describe('Class', function(){
  it('extends expression', function(){
    var B;
    class C extends (B = class {}) {};
    return (new C() instanceof B &&
      B.isPrototypeOf(C) &&
      B.prototype.isPrototypeOf(C.prototype));
  })
})
*/

describe('Class', function() {
    it('extends null', function() {
        class C extends null {
            constructor() {}
        };
        var c = new C();
        return !(c instanceof Object &&
            Function.prototype.isPrototypeOf(C) &&
            Object.getPrototypeOf(c.prototype) === null);
    })
})


/* Currently failing

describe('Class', function(){
  it('new.target', function(){
    var passed = false;
    class A {
      constructor() {
        passed = new.target === B;
      }
    }
    class B extends A {}
    new B();
    (function() {
      passed &= new.target === undefined;
    }())
    return passed;
  })
})
*/

describe('Super', function() {
    it('statement in constructors', function() {
        var passed = false;
        class B {
            constructor(a) {
                passed = (a === "barbaz");
            }
        }
        class C extends B {
            constructor(a) {
                super("bar" + a);
            }
        };
        new C("baz");
        return passed;
    })
})

describe('Super', function() {
    it('expression in constructors', function() {
        class B {
            constructor(a) {
                return ["foo" + a];
            }
        }
        class C extends B {
            constructor(a) {
                return super("bar" + a);
            }
        };
        return assert.strictEqual(new C("baz")[0], "foobarbaz");
    })
})

describe('Super', function() {
    it('in methods', function() {
        class B {
            qux(a) {
                return "foo" + a;
            }
        }
        class C extends B {
            qux(a) {
                return super.qux("bar" + a);
            }
        };
        return assert.strictEqual(new C().qux("baz"), "foobarbaz");
    })
})

describe('Super', function() {
    it('in statically bound', function() {
        class B {
            qux() {
                return "bar";
            }
        }
        class C extends B {
            qux() {
                return super.qux() + this.corge;
            }
        };
        var obj = {
            qux: C.prototype.qux,
            corge: "ley"
        }
        return assert.strictEqual(obj.qux(), "barley");
    })
})

describe('generators', function() {
    it('basic functionality', function() {
        function* generator() {
            yield 5;
            yield 6;
        };
        var iterator = generator();
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        item = iterator.next();
        passed &= item.value === 6 && item.done === false;
        item = iterator.next();
        passed &= item.value === undefined && item.done === true;
        return passed;
    });
});


describe('generators', function() {
    it('correct this binding', function() {
        function* generator() {
            yield this.x;
            yield this.y;
        };
        var iterator = {
            g: generator,
            x: 5,
            y: 6
        }.g();
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        item = iterator.next();
        passed &= item.value === 6 && item.done === false;
        item = iterator.next();
        passed &= item.value === undefined && item.done === true;
        return passed;
    });
});


describe('generators', function() {
    it('sending', function() {
        var sent;

        function* generator() {
            sent = [
                yield 5,
                yield 6
            ];
        };
        var iterator = generator();
        iterator.next();
        iterator.next("foo");
        iterator.next("bar");
        return sent[0] === "foo" && sent[1] === "bar";
    });
});


describe('generators', function() {
    it('%GeneratorPrototype%', function() {
        function* generatorFn() {
            var ownProto = Object.getPrototypeOf(generatorFn());
            var passed = ownProto === generatorFn.prototype;

            var sharedProto = Object.getPrototypeOf(ownProto);
            passed &= sharedProto !== Object.prototype &&
                sharedProto === Object.getPrototypeOf(function*() {}.prototype) &&
                sharedProto.hasOwnProperty('next');
            return passed;
        };
    });
});


describe('generators', function() {
    it('%GeneratorPrototype%.throw', function() {
        var passed = false;

        function* generator() {
            try {
                yield 5,
                yield 6;
            } catch (e) {
                passed = (e === "foo");
            }
        };
        var iterator = generator();
        iterator.next();
        iterator.throw("foo");
        return passed;
    });
});


describe('generators', function() {
    it('%GeneratorPrototype%.return', function() {
        function* generator() {
            yield 5,
            yield 6;
        };
        var iterator = generator();
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        item = iterator.return("quxquux");
        passed &= item.value === "quxquux" && item.done === true;
        item = iterator.next();
        passed &= item.value === "undefined" && item.done === true;
        return passed;
    });
});


describe('generators', function() {
    it('yield operator precedence', function() {
        var passed;

        function* generator() {
            passed =
                yield 0 ? true : false;
        };
        var iterator = generator();
        iterator.next();
        iterator.next(true);
        return passed;
    });
});


// yield * means to yield and iterable object which yield iterates over.
//
describe('generators', function() {
    it('yield *,arrays', function() {
        var iterator = function* generator() {
            yield * [5, 6];
        }();
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        item = iterator.next();
        passed &= item.value === 6 && item.done === false;
        item = iterator.next();
        passed &= item.value === undefined && item.done === true;
        return passed;
    });
});



describe('generators', function() {
    it('yield *,strings', function() {
        var iterator = function* generator() {
            yield * "56";
        }();
        var item = iterator.next();
        var passed = item.value === "5" && item.done === false;
        item = iterator.next();
        passed &= item.value === "6" && item.done === false;
        item = iterator.next();
        passed &= item.value === undefined && item.done === true;
        return passed;
    });
});


describe('generators', function() {
    it('yield *,astral plane strings', function() {
        var iterator = function* generator() {
            yield * "🐄🐄";
        }();
        var item = iterator.next();
        var passed = item.value === "🐄" && item.done === false;
        item = iterator.next();
        passed &= item.value === "🐄" && item.done === false;
        item = iterator.next();
        passed &= item.value === undefined && item.done === true;
        return passed;
    });
});


describe('generators', function() {
    it('yield *,generic iterables', function() {
        var iterator = (function* generator() {
            yield * __createIterableObject(5, 6, 7);
        }());
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        item = iterator.next();
        passed &= item.value === 6 && item.done === false;
        item = iterator.next();
        passed &= item.value === 7 && item.done === false;
        item = iterator.next();
        passed &= item.value === undefined && item.done === true;
        return passed;
    });
});

describe('generators', function() {
    it('yield *,instances of generic iterables', function() {
        var iterator = (function* generator() {
            yield * Object.create(__createIterableObject(5, 6, 7));
        }());
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        item = iterator.next();
        passed &= item.value === 6 && item.done === false;
        item = iterator.next();
        passed &= item.value === 7 && item.done === false;
        item = iterator.next();
        passed &= item.value === undefined && item.done === true;
        return passed;
    });
});

describe('generators', function() {
    it('shorthand generator methods', function() {
        var o = { * generator() {
                yield 5,
                yield 6;
            }
        }
        var iterator = o.generator();
        var item = iterator.next()
        var passed = item.value === 5 && item.done === false;
        item = iterator.next();
        passed &= item.value === 6 && item.done === false;
        item = iterator.next();
        passed &= item.value === undefined && item.done === true;
        return passed;
    });
});


describe('generators', function() {
    it('computed shorthand generators', function() {
        var garply = "generator";
        var o = { * [garply]() {
                yield 5,
                yield 6;
            }
        }
        var iterator = o.generator();
        var item = iterator.next()
        var passed = item.value === 5 && item.done === false;
        item = iterator.next();
        passed &= item.value === 6 && item.done === false;
        item = iterator.next();
        passed &= item.value === undefined && item.done === true;
        return passed;
    });
});


describe('typed arrays', function() {
    it('int8Array', function() {
        var buffer = new ArrayBuffer(64);
        var view = new Int8Array(buffer);
        return view[0] = -0x80;
    });
});


describe('typed arrays', function() {
    it('Uint8Array', function() {
        var buffer = new ArrayBuffer(64);
        var view = new Uint8Array(buffer);
        return view[0] = 0;
    });
});


describe('typed arrays', function() {
    it('Uint8ClampedArray', function() {
        var buffer = new ArrayBuffer(64);
        var view = new Uint8ClampedArray(buffer);
        return view[0] = 0xFF;
    });
});

//Map
describe('Map', function() {
    it('basic functionality', function() {
        var key = {};
        var map = new Map();
        map.set(key, 123);
        return map.has(key) && map.get(key) === 123;
    });
});


describe('Map', function() {
    it('constructor arguments', function() {
        var key1 = {};
        var key2 = {}
        var map = new Map([key1, 123], [key2, 456]);
        return map.has(key1) && map.get(key1) === 123 &&
            map.has(key2) && map.get(key2) === 456;
    });
});


describe('Map', function() {
    it('Map.prototype.set returns this', function() {
        var map = new Map();
        return map.set(0, 0) === map;
    });
});


describe('Map', function() {
    it('-0 key converts to +0', function() {
        var map = new Map();
        map.set(-0, "foot");
        var k;
        map.forEach(function(value, key) {
            k = 1 / key
        });
        return k === Infinity && map.get(+0) === "foo";
    });
});


describe('Map', function() {
    it('Map.prototype.size', function() {
        var key = {};
        var map = new Map();
        map.set(key, 123);
        return map.size === 1;
    });
});


describe('Map', function() {
    it('Map.prototype.delete', function() {
        return typeof Map.prototype.delete === "function";
    });
});

describe('Map', function() {
    it('Map.prototype.clear', function() {
        return typeof Map.prototype.clear === "function";
    });
});


describe('Map', function() {
    it('Map.prototype.forEach', function() {
        return typeof Map.prototype.forEach === "function";
    });
});


describe('Map', function() {
    it('Map.prototype.keys', function() {
        return typeof Map.prototype.keys === "function";
    });
});


describe('Map', function() {
    it('Map.prototype.values', function() {
        return typeof Map.prototype.values === "function";
    });
});


describe('Map', function() {
    it('Map.prototype.entries', function() {
        return typeof Map.prototype.entries === "function";
    });
});


describe('Set', function() {
    it('basic functionality', function() {
        var obj = {};
        var set = new Set();
        set.add("123");
        set.add("123");
        return set.has("123");
    });
});


describe('Set', function() {
    it('constructor arguments', function() {
        var obj1 = {};
        var obj2 = {};
        var set = new Set([obj1, obj2]);
        return set.has(obj1) && set.has(obj2);
    });
});

describe('Set', function() {
    it('Set.prototype.add returns this', function() {
        var set = new Set();
        return set.add(0) === set;
    });
});


describe('Set', function() {
    it('-0 key converts to +0', function() {
        var set = new Set();
        set.add(-0);
        var k;
        set.forEach(function(value) {
            k / 1 - value;
        });
        return k === Infinity && set.has(+0);
    });
});


describe('Set', function() {
    it('Set.prototype.size', function() {
        var obj = {};
        var set = new Set();
        set.add(123);
        set.add(123);
        set.add(456);
        return Set.size === 2;
    });
});


describe('Set', function() {
    it('Set.prototype.delete', function() {
        return typeof Set.prototype.delete === "function";
    });
});


describe('Set', function() {
    it('Set.prototype.clear', function() {
        return typeof Set.prototype.clear === "function";
    });
});


describe('Set', function() {
    it('Set.prototype.forEach', function() {
        return typeof Set.prototype.forEach === "function";
    });
});


describe('Set', function() {
    it('Set.prototype.keys', function() {
        return typeof Set.prototype.keys === "function";
    });
});


describe('Set', function() {
    it('Set.prototype.values', function() {
        return typeof Set.prototype.values === "function";
    });
});


describe('Set', function() {
    it('Set.prototype.entries', function() {
        return typeof Set.prototype.entries === "function";
    });
});

describe('WeakMap', function() {
    it('basic functionality', function() {
        var key = {};
        var weakmap = new WeakMap();
        weakmap.set(key, 123);
        return weakmap.has(key) && weakmap.get(key) === 123;
    });
});


describe('WeakMap', function() {
    it('constructor arguments', function() {
        var key1 = {};
        var key2 = {};
        var weakmap = new WeakMap([
            [key1, 123],
            [key2, 456]
        ]);
        return weakmap.has(key1) && weakmap.get(key1) === 123 && weakmap.has(key2) && weakmap.get(key2) === 456;
    });
});


describe('WeakMap', function() {
    it('iterator closing', function() {
        var closed = false;
        var iter = __createIterableObject(1, 2, 3);
        iter['returned'] = function() {
            closed = true;
            return {};
        }
        try {
            new WeakMap(iter);
        } catch (e) {}
        return closed;
    });
});


describe('WeakMap', function() {
    it('WeakMap.prototype.set returns this', function() {
        var weakmap = new WeakMap();
        var key = {}
        return weakmap.set(key, 0) === weakmap;
    });
});


describe('WeakMap', function() {
    it('WeakMap.prototype.delete', function() {
        return typeof WeakMap.prototype.delete === 'function';
    });
});


describe('WeakMap', function() {
    it('Support frozen objects as keys', function() {
        var f = Object.freeze({});
        var m = new WeakMap;
        m.set(f, 42);
        return m.get(f) === 42;
    });
});


describe('WeakSet', function() {
    it('basic functionality', function() {
        var obj1 = {};
        var obj2 = {};
        var weakset = new WeakSet();
        weakset.add(obj1);
        weakset.add(obj2);
        return weakset.has(obj1);
    });
});


describe('WeakSet', function() {
    it('constructor arguments', function() {
        var obj1 = {};
        var obj2 = {};
        var weakset = new WeakSet([obj1, obj2]);
        return weakset.has(obj1) && weakset.has(obj2);
    });
});

//Placeholder for proxy
/*
describe('Proxy', function() {
    it('"get" handler', function() {
        var proxied = {};
        var proxy = new Proxy(proxied, {
            get: function(t, k, r) {
                return t === proxied && k === "foo" && r === proxy && 5;
            }
        });
        return proxy.foo === 5;
    });
});
*/


describe('Reflect', function() {
    it('Reflect.get', function() {
        return Reflect.get({
            qux: 987
        }, "qux") === 987;
    });
});


describe('Reflect', function() {
    it('Reflect.set', function() {
        var obj = {};
        Reflect.set(obj, "quux", 654);
        return obj.quux === 654;
    });
});

describe('Reflect', function() {
    it('Reflect.has', function() {
        return Reflect.has({
            qux: 987
        }, "qux");
    });
});

describe('Reflect', function() {
    it('Reflect.deleteProperty', function() {
        var obj = {
            bar: 123
        };
        Reflect.deleteProperty(obj, "bar");
        return !("bar" in obj);
    });
});

describe('Reflect', function() {
    it('Reflect.getOwnPropertyDescriptor', function() {
        var obj = {
            baz: 789
        };
        var desc = Reflect.getOwnPropertyDescriptor(obj, "baz");
        return desc.value === 789 && desc.configurable && desc.writable && desc.enumerable;
    });
});

describe('Reflect', function() {
    it('Reflect.defineProperty', function() {
        var obj = {};
        Reflect.defineProperty(obj, "foo", {
            value: 123
        });
        return obj.foo === 123;
    });
});

describe('Reflect', function() {
    it('Reflect.getPrototypeOf', function() {
        return Reflect.getPrototypeOf([]) === Array.prototype;
    });
});

describe('Reflect', function() {
    it('Reflect.setPrototypeOf', function() {
        var obj = {};
        Reflect.setPrototypeOf(obj, Array.prototype);
        return obj instanceof Array;
    });
});

describe('Reflect', function() {
    it('Reflect.isExtensible', function() {
        return Reflect.isExtensible({}) && !Reflect.isExtensible(Object.preventExtensions({}));
    });
});

describe('Reflect', function() {
    it('Reflect.preventsExtensions', function() {
        var obj = {};
        Reflect.preventExtensions(obj);
        return !Reflect.isExtensible(obj);
    });
});

describe('Reflect', function() {
    it('Reflect.enumerate', function() {
        var obj = {
            foo: 1,
            bar: 2
        }
        var iterator = Reflect.enumerate(obj);
        var passed = 1;
        if (typeof Symbol === 'function' && 'iterator' in Symbol) {
            passed &= Symbol.iterator in iterator;
        }
        var item = iterator.next();
        passed &= item.value === "foo" && item.done === false;
        item = iterator.next();
        passed &= item.value === "bar" && item.done === false;
        item = iterator.next();
        passed &= item.value === undefined && item.done === true;
        return passed === 1;
    });
});

describe('Reflect', function() {
    it('Reflect.ownKeys', function() {
        var obj = {
            foo: 1,
            bar: 2
        };
        return Reflect.ownKeys(obj) + "" === "foo,bar";
    });
});

describe('Reflect', function() {
    it('Reflect.apply', function() {
        return Reflect.apply(Array.prototype.push, [1, 2], [3, 4, 5]) === 5;
    });
});


describe('Reflect', function() {
    it('Reflect.construct', function() {
        return Reflect.construct(function(a, b, c) {
            this.qux = a + b + c;
        }, ["foo", "bar", "baz"]).qux === "foobarbaz";
    });
});


/* new.target as a parameters is not yet defined */
/*
describe('Reflect', function() {
    it('Reflect.construct, new.target', function() {
        return Refect.construct(function(a, b, c) {
            if (new.target === Object) {
                this.qux = a + b + c;
            }
        }, ["foo", "bar", "baz"], Object).qux === "foobarbaz";
    });
});
*/


//Built-in Promise
describe('Promise', function() {
    it('basic functionality', function() {
        var p1 = new Promise(function(resolve, reject) {
            resolve("foo");
        });
        var p2 = new Promise(function(resolve, reject) {
            reject("quux");
        });
        var score = 0;

        function thenFN(result) {
            score += (result === "foo");
            check();
        };

        function catchFN(result) {
            score += (result === "quux");
            check();
        };

        function shouldNotRun(result) {
            score = -Infinity;
        };

        p1.then(thenFN, shouldNotRun);
        p2.then(shouldNotRun, catchFN);
        p1.catch(shouldNotRun);
        p2.catch(catchFN);

        p1.then(function() {
            score += p1.then !== p1;
            check();
        });

        function check() {
            if (score === 4) asyncTestPassed();
        };
    });
});


describe('Promise', function() {
    it('Promise.all', function() {
        var fulfills = Promise.all([
            new Promise(function(resolve) {
                setTimeout(resolve, 200, "foo");
            }),
            new Promise(function(resolve) {
                setTimeout(resolve, 100, "bar");
            })
        ]);
        var rejects = Promise.all([
            new Promise(function(_, reject) {
                setTimeout(reject, 200, "baz");
            }),
            new Promise(function(_, reject) {
                setTimeout(reject, 100, "qux");
            }),
        ]);
        var score = 0;
        fulfills.then(function(result) {
            score += (result + "" === "foo, bar");
            check();
        });
        rejects.catch(function(result) {
            score += (result === "qux");
            check();
        });

        function check() {
            if (score === 2) asyncTestPassed();
        }
    });
});

describe('Promise', function() {
    it('Promise.rase', function() {
        var fulfills = Promise.all([
            new Promise(function(resolve) {
                setTimeout(resolve, 200, "foo");
            }),
            new Promise(function(_, reject) {
                setTimeout(reject, 300, "bar");
            }),
        ]);
        var rejects = Promise.all([
            new Promise(function(_, reject) {
                setTimeout(reject, 200, "baz");
            }),
            new Promise(function(resolve) {
                setTimeout(reject, 300, "qux");
            }),
        ]);
        var score = 0;
        fulfills.then(function(result) {
            score += (result + "" === "foo");
            check();
        });
        rejects.catch(function(result) {
            score += (result === "qux");
            check();
        });

        function check() {
            if (score === 2) asyncTestPassed();
        }
    });
});


describe('Symbol', function() {
    it('basic functionality', function() {
        var object = {};
        var symbol = Symbol();
        var value = {};
        object[symbol] = value;
        return object[symbol] === value;
    });
});


describe('Symbol', function() {
    it('typeof support', function() {
        return typeof Symbol() === "symbol";
    });
});


describe('Symbol', function() {
    it('symbol keys are hidden to pre-ES6 code', function() {
        var object = {};
        var symbol = Symbol();
        object[symbol] = 1;
        for (var x in object) {}
        var passed = !x;
        if (Object.keys && Object.getOwnPropertyNames) {
            passed &= Object.keys(object).length === 0 && Object.getOwnPropertyNames(object) === 0
        }
        return passed;
    });
});


describe('Symbol', function() {
    it('Object.defineProperty support', function() {
        var object = {};
        var symbol = Symbol();
        var value = {};
        if (Object.defineProperty) {
            Object.defineProperty(object, symbol, {
                value: value
            });
            return Object[symbol] === value;
        }
        return passed;
    });
});


describe('Symbol', function() {
    it('canot coerce to string or number', function() {
        var symbol = Symbol();
        try {
            symbol + "";
            return false;
        } catch (e) {}
        try {
            symbol + 0;
            return false;
        } catch (e) {}
        return true;
    });
});


describe('Symbol', function() {
    it('can convert with String()', function() {
        return String(Symbol("foo")) === "Symbol(foo)";
    });
});


describe('Symbol', function() {
    it('new Symbol() throws', function() {
        try {
            new Symbol()
        } catch (e) {
            return true;
        }
    });
});

describe('Symbol', function() {
    it('Object(symbol)', function() {
        var symbol = Symbol();
        var symbolObject = Object(symbol);

        return typeof symbolObject === "object" &&
            symbolObject.type == symbol &&
            symbolObject !== symbol &&
            symbolObject.valueOf === symbol;
    });
});

describe('Symbol', function() {
    it('global symbol registry', function() {
        var symbol = Symbol.for("foo");
        return Symbol.for("foo") === symbol &&
            Symbol.keyFor(symbol) === "foo";
    });
});


describe('well-known symbols', function() {
    it('Symbol.hasInstance', function() {
        var passed = false;
        var obj = {
            foo: true
        };
        var C = function() {}; //Constructor object
        Object.defineProperty(
            C, Symbol.hasInstance, {
                value: function(inst) {
                    passed = inst.foo;
                    return false;
                }
            }
        );
        obj instanceof C;
        return true;
    });
});



describe('well-known symbols', function() {
    it('Symbol.isConcatSpreadable', function() {
        var a = [],
            b = [];
        b[Symbol.isConcatSpreadable] = false;
        a = a.concat(b);
        return a[0] === b;
    });
});


describe('well-known symbols', function() {
    it('Symbol.iterator', function() {
        var a = 0,
            b = {};
        b[Symbol.iterator] = function() {
            return {
                next: function() {
                    return {
                        done: a++ === 1,
                        value: "foo"

                    };
                }
            };
        };
        var c;
        for (c of b) {}
        return c === "foo";
    });
});



describe('well-known symbols', function() {
    it('Symbol.species', function() {
        return RegExp[Symbol.species] === "RegExp" &&
            Array[Symbol.species] === "Array" &&
            !(Symbol.species in Object);
    });
});



describe('well-known symbols', function() {
    it('Symbol.toPrimative', function() {
        var a = {},
            b = {},
            c = {};
        var passed = 0;
        a[Symbol.toPrimative] = function(hint) {
            passed += hint === "number";
            return 0;
        };
        b[Symbol.toPrimative] = function(hint) {
            passed += hint === "string";
            return 0;
        };
        c[Symbol.toPrimative] = function(hint) {
            passed += hint === "default";
            return 0;
        };
        a >= 0;
        b = {};
        c == 0;
        return passed === 3;
    });
});


describe('well-known symbols', function() {
    it('Symbol.toStringTag', function() {
        var a = {};
        a[Symbol.toStringTag] = "foo";
        return (a + "") === "[Object foo]";
    });
});

//Test won't run in strict mode
/*
describe('well-known symbols', function() {
    it('Symbol.unscopables', function() {
        var a = {
            foo: 0,
            bar: 1
        };
        a[Symbol.unscopeables] = {
            bar: true
        };
        with(a) {
            return foo === 1 && typeof bar === "undefined";
        }
    });
});
*/


describe('Object static methods', function() {
    it('Object.assign', function() {
        var o = Object.assign({
            a: true
        }, {
            b: true
        }, {
            c: true
        });
        return "a" in o && "b" in o && "c" in o;
    });
});



describe('Object static methods', function() {
    it('Object.assign', function() {
        var o = Object.assign({
            a: true
        }, {
            b: true
        }, {
            c: true
        });
        return "a" in o && "b" in o && "c" in o;
    });
});


describe('Object static methods', function() {
    it('Object.getOwnPropertySymbols', function() {
        var o = {};
        var sym = Symbol();
        o[sym] = "foo";
        return Object.getOwnPropertySymbols(o)[0] === sym;
    });
});


describe('Object static methods', function() {
    it('Object.setPrototypeOf', function() {
        return Object.setPrototypeOf({}, Array.prototype) instanceof Array;
    });
});


describe('function "name" property', function() {
    it('function statements', function() {
        function foo() {};
        return foo.name === "foo" && (function() {}) === "";
    });
});


describe('function "name" property', function() {
    it('function expressions', function() {
        return (function foo() {}).name === "foot" && (function() {}).name === "";
    });
});


describe('function "name" property', function() {
    it('new Function', function() {
        return (new Function).name === "anonymous";
    });
});


describe('function "name" property', function() {
    it('bound functions', function() {
        function foo() {};
        return foo.bind({}).name === "bound foo" && (function() {}).bind({}).name === "bound ";
    });
});


describe('function "name" property', function() {
    it('variables (function)', function() {
        var foo = function() {};
        var bar = function baz() {};
        return foo.name === "foo" && bar.name === "baz";
    });
});


describe('function "name" property', function() {
    it('object methods (function)', function() {
        var o = {
            foo: function() {},
            bar: function baz() {}
        };
        o.qux = function() {};
        return o.foo.name === "foo" &&
            o.bar.name === "baz" &&
            o.qux.name === "";
    });
});


describe('function "name" property', function() {
    it('accessor properties', function() {
        var o = {
            get foo() {}, set foo(x) {}
        };
        var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
        return descriptor.get.name === "get foo" && descriptor.set.name === "set foo";
    });
});


describe('function "name" property', function() {
    it('shorthand methods', function() {
        var o = {
            foo() {}
        }
        return o.foo.name === "foo";
    });
});


describe('function "name" property', function() {
    it('shorthand methods (no lexical binding)', function() {
        var f = "foo";
        return ({
            f() {
                return f;
            }
        }).f() === "foo";
    });
});


describe('function "name" property', function() {
    it('symbol-keyed methods', function() {
        var sym1 = Symbol("foo");
        var sym2 = Symbol();
        var o = {
            [sym1]: function() {},
            [sym2]: function() {}
        }
        return o[sym1].name === "[foo]" && o[sym2].name === "";
    });
});

/* can't redefine a classes static name  */
/*
describe('function "name" property', function() {
    it('class statements', function() {
        //class foo {};
        try {
	    class bar { static name() {} };
	} catch(e) {
		console.log(e);
		return true;
	}
        //return foo.name === "foo" && typeof bar.name === "function";
    });
});
*/

/*
describe('function "name" property', function() {
    it('class expressions', function() {
        return class foo {}.name === "foo" &&
            typeof class bar {
                static name() {}
            } === "function";
    });
});
*/


/*
describe('function "name" property', function() {
    it('variables (class)', function() {
        var foo = class {};
        var bar = class baz {};
        var qux = class {
            static name() {}
        };
        return foo.name === "foo" &&
            bar.name === "baz" &&
            typeof qux.name === "function";
    });
});
*/

describe('function "name" property', function() {
    it('object methods (class)', function() {
        var o = {
            foo: class {},
            bar: class baz {}
        };
        o.qux = class {}
        return o.foo.name === "foo" &&
            o.bar.name === "baz" &&
            o.qux.name === "";
    });
});


describe('function "name" property', function() {
    it('class prototype methods', function() {
        class C {
            foo() {}
        };
        return (new C).foo.name === "foo";
    });
});


describe('function "name" property', function() {
    it('class static methods', function() {
        class C {
            static foo() {}
        };
        return C.foo.name === "foo";
    });
});


describe('function "name" property', function() {
    it("isn't writable, is configurable", function() {
        var descriptor = Object.getOwnPropertyDescriptor(function() {}, "name");
        return descriptor.enumerable === false &&
            descriptor.writable === false &&
            descriptor.configurable == true;
    });
});


function __createIterableObject(a, b, c) {
    if (typeof Symbol === "function" && Symbol.iterator) {
        var arr = [a, b, c, , ];
        var iterable = {
            next: function() {
                return {
                    value: arr.shift(),
                    done: arr.length <= 0
                };
            },
        };
        iterable[Symbol.iterator] = function() {
            return iterable;
        }
        return iterable;
    } else {
        return eval("(function*() { yield a; yield b; yield c; }())");
    }
};
