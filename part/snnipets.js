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
// 1:
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
//2:
let obj3 = JSON.parse(JSON.stringify(obj1))

// shallow clone
// 1:
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
// 2:
var shallowCopy = fruits.slice();

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

// 使用indexOf统计字符e出现次数
var str = 'To be, or not to be, that is the question.';
var count = 0;
var pos = str.indexOf('e');

while (pos !== -1) {
  count++;
  pos = str.indexOf('e', pos + 1);
}

console.log(count);

//用lodash工具函数转换weak性质数据结构为带有forEach方法的对象
import lodashForEach from 'lodash/forEach';
import entries from 'lodash/entries';
/**
 * @since lodash@4.17.3
 * @param {Array|Map|Object|Set|WeakMap|WeakSet} iterable
 * @param {Function} iteratee
 * @example
 * const iterable = new Map();
 * iterable.set('somekey1', 1);
 * iterable.set('somekey2', 2);
 * // or
 * const iterable = new Set();
 * iterable.add("entry1");
 * iterable.add("entry2");
 * // run function
 * forEach(iterable, (value, key) => {
 *   console.group('-');
 *   console.info('KEY');
 *   console.log(key);
 *   console.info('VALUE');
 *   console.log(value);
 *   console.groupEnd();
 * });
 */
function forEach(iterable, iteratee) {
    lodashForEach((iterable instanceof Set || iterable instanceof WeakSet) ? Array.from(iterable) : entries(iterable), (entry, index, collection) => {
      iteratee(entry[1], entry[0], collection, index);
    });
    return iterable;
}

export default forEach;

// 给对象添加遍历器
let obj = {
    data: [ 'hello', 'world' ],
    [Symbol.iterator]() {
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < self.data.length) {
                    return {
                        value: self.data[index++],
                        done: false
                    };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

// 八位随机码实现，应用于数据库id条目
var db={data:Math.random().toString(36).substr(-8)}
let {data}=db;
console.log(data);


// reduce方法拼接字符串和变量，主要用了数组的shift
function comma(strings, ...values) {
  return strings.reduce((prev, next) => {
    let value = values.shift() || [];
    value = value.join(", ");
    return prev + next + value;
  }, "");
}