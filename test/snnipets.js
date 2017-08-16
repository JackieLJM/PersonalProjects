const jsdom = require('jsdom');
const {
    JSDOM
} = jsdom;
const {
    document
} = (new JSDOM(`...`)).window;
// console.log(document, JSDOM, jsdom);

// 深复制方法
function deepCopy(parent, child) {
    var i,
        toStr = Object.prototype.toString,
        arrayStr = "[object Array]"
    child = child || {};
    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            if (typeof parent[i] == "object") { //判断是否是对象
                child[i] = (toStr.call(parent[i]) == arrayStr) ? [] : {}; //判断是数组还是对象
                deepCopy(parent[i], child[i]); //递归遍历复制
            } else {
                child[i] = parent[i];
            }
        }
    }
    return child;
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




//给所有对象添加方法，通过扩展Object实现，下面通过调用a.method('name',function(){})实现参数里的方法定义到Object的方法,下面定义的方法能进行链式调用
Object.prototype.method = function (name, fun) {
    this.prototype[name] = fun;
    return this;
}




// reduce方法,acc cur,index,array为每次默认自动传入的值，此时arr的增删元素不会传给callback
'arr.reduce(callback(accumulator, currentValue, currentIndex, array), [initialValue]);'




//多元化curry函数
function curry(fx) {
    var arity = fx.length;

    return function f1() {
        var args = Array.prototype.slice.call(arguments, 0);
        if (args.length >= arity) {
            return fx.apply(null, args);
        } else {
            return function f2() {
                var args2 = Array.prototype.slice.call(arguments, 0);
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




//ES5用function实现List类
(function () {
    function List() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
        this.clear = clear;
        this.find = find;
        this.toString = toString;
        this.insert = insert;
        this.append = append;
        this.remove = remove;
        this.front = front;
        this.end = end;
        this.prev = prev;
        this.next = next;
        this.length = length;
        this.currPos = currPos;
        this.moveTo = moveTo;
        this.getElement = getElement;
        this.length = length;
        this.contains = contains;
    }

    function append(element) {
        this.dataStore[this.listSize++] = element;
    }

    function find(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    }

    function remove(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

    function toString() {
        return this.dataStore;
    }

    function insert(element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }

    function clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }

    function contains(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    }

    function front() {
        this.pos = 0;
    }

    function end() {
        this.pos = this.listSize - 1;
    }

    function prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }

    function next() {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    }

    function currPos() {
        return this.pos;
    }

    function moveTo(position) {
        this.pos = position;
    }

    function getElement() {
        return this.dataStore[this.pos];
    }
})();




//ES5用function实现栈结构
(function () {
    function Stack() {
        this.dataStore = [];
        this.top = 0;
        this.push = push;
        this.pop = pop;
        this.peek = peek;
        this.clear = clear;
        this.length = length;
    }

    function push(element) {
        this.dataStore[this.top++] = element;
    }

    function peek() {
        return this.dataStore[this.top - 1];
    }

    function pop() {
        return this.dataStore[--this.top];
    }

    function clear() {
        this.top = 0;
    }

    function length() {
        return this.top;
    }
    var s = new Stack();
    s.push("David");
    s.push("Raymond");
    s.push("Bryan");
    // console.log("length: " + s.length());
    // console.log(s.peek());
    var popped = s.pop();
    // console.log("The popped element is: " + popped);
    // console.log(s.peek());
    s.push("Cynthia");
    // console.log(s.peek());
    s.clear();
    // console.log("length: " + s.length());
    // console.log(s.peek());
    s.push("Clayton");
    // console.log(s.peek());
})();




// ES5用function实现队列
(function () {
    function Queue() {
        this.dataStore = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.empty = empty;
    }

    function enqueue(element) {
        this.dataStore.push(element);
    }

    function dequeue() {
        return this.dataStore.shift();
    }

    function front() {
        return this.dataStore[0];
    }

    function back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    function toString() {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    }

    function empty() {
        if (this.dataStore.length == 0) {
            return true;
        } else {
            return false;
        }
    }
})();




/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}




/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, {
                    [key]: {}
                });
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, {
                    [key]: source[key]
                });
            }
        }
    }

    return mergeDeep(target, ...sources);
}




// deepclone
var deepCopy = function( extendObj ){
    var str, newObj = extendObj.constructor === Array ? [] : {};
    if(typeof extendObj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(extendObj);
        newObj = JSON.parse(str);
    } else {
        for(var key in extendObj){
          if (!extendObj.hasOwnProperty(key)) return;
            newObj[key] = typeof extendObj[key] === 'object' ?
                    cloneObj(extendObj[key]) : extendObj[key];
        }
    }
    return newObj;
};

var obj2 = {
    names: ['test0', 'test1', 'test3']
};

var obj1 = deepCopy( obj2 );

console.log( obj1, obj2 );

obj2.names[1] = 'test0';

console.log( obj1, obj2 );