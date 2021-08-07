// [0,1,2].map(item => item + 1);

// function f() { console.log('I am outside!'); }

// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }

//   f();
// }());

function f(){
  return this.a;
}

var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var h = g.bind({a:'yoo'}); // bind只生效一次！
console.log(h()); // azerty

var j = f.bind({a:"yahoo"});
console.log(j());

var o = {a:37, f:f, g:g, h:h};
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty

var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true

// this问题
var n = 123;
var obj = { n: 456 };

function a() {
  var n = 789;
  console.log("this.n:"+this.n);
  console.log("n:"+n);
}

a(); //123
a.call() // 123
a.call(null) // 123
a.call(undefined) // 123
a.call(window) // 123
a.call(obj) // 456