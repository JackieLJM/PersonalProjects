const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const {document} = (new JSDOM(`...`)).window;
console.log(document, JSDOM, jsdom); 

// requestAnimationFrame兼容代码
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// requestAnimationFrame全面兼容代码
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
                                      window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());

// deep clone
function deepCopy(parent, child) {
    var i,
        toStr = Object.prototype.toString,
        arrayStr = "[object Array]"
    child = child || {};
    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            if (typeof parent[i] == "object") { //判断是否是对象
                child[i] = (toStr.call(parent[i]) == arrayStr)
                    ? []
                    : {}; //判断是数组还是对象
                deepCopy(parent[i], child[i]); //递归遍历复制
            } else {
                child[i] = parent[i];
            }
        }
    }
    return child;
}

// shallow clone
function shallowClone(source) {
    if (!source && typeof source !== 'object') {
        throw new Error('error arguments');
    }
    var targetObj = source.constructor === Array
        ? []
        : {};
    for (var keys in source) {
        if (source.hasOwnProperty(keys)) {
            targetObj[keys] = source[keys];
        }
    }
    return targetObj;
}

// bind方法
if (!Function.prototype.bind) {
    Function.prototype.bind = function (obj) {
        var fn = this, //指向调用该方法的对象(函数)
            slice = [].prototype.slice,
            args = slice.call(arguments, 1); //作为默认参数的参数
        return function () {
            return fn.apply(obj, args.concat(slice.call(arguments)));
        };
    };
}

//object create方法
Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
}

//给所有对象添加方法，通过扩展Object实现，下面通过调用a.method('name',function(){})实现参数里的方法定义到Object的方法
//,下面定义的方法能进行链式调用
Object.prototype.method = function (name, fun) {
    this.prototype[name] = fun;
    return this;
}

// reduce方法,acc cur,index,array为每次默认自动传入的值，此时arr的增删元素不会传给callback
'arr.reduce(callback(accumulator, currentValue, currentIndex, array), [initialVal' +
    'ue]);'

//多元化curry函数
function curry(fx) {
    var arity = fx.length;

    return function f1() {
        var args = Array
            .prototype
            .slice
            .call(arguments, 0);
        if (args.length >= arity) {
            return fx.apply(null, args);
        } else {
            return function f2() {
                var args2 = Array
                    .prototype
                    .slice
                    .call(arguments, 0);
                return f1.apply(null, args.concat(args2));
            }
        }
    };
}
var sumFour = curry(function (w, x, y, z) {
    return w + x + y + z;
});
f1 = sumFour(10); // returns a function awaiting three arguments
f2 = sumFour(1)(2, 3); // returns a function awaiting one argument
f3 = sumFour(1, 2, 7); // returns a function awaiting one argument
x = sumFour(1, 2, 3, 4); // sumFour has been fully applied; x is equal to 1+2+3+4=10
x2 = sumFour(1)(2)(3)(4);

// 传入一个字符串实现和数字实现重复多此该字符串的操作
function repeat(string,count){
	var strings=[];
	while(strings.length<count){
		strings.push(string);
	}
	return strings.join('');
}

// 输入参数返回一个由参数组成的数组
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// 生成由0，1，2，3，4组成的数组
Array.from({length: 5}, (v, i) => i);