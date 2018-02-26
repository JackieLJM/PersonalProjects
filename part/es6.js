/*----------------------Map Set Object-----------------------------------*/
let s = new Set([1, 1]);
let m = new Map([
    ['1', 1],
    [1, 1]
]);
console.log(s, m);
// hasOwnProperty查找实例化对象上是否有此属性和方法，不会去原型链上查找，用in可以到原型链上查找
// hasOwnProperty是Object原型链上的方法，不是其静态方法
console.log(s.hasOwnProperty('values')); //false
console.log(Set.prototype.hasOwnProperty('values'));//true
Set.prototype.ss="abc";
console.log(s.hasOwnProperty('ss'));
if('values' in s){//true
	console.log(true);
}else{
	console.log(false);
}
console.log(s.values());
console.log(m.keys());
console.log('\n');
/*----------------------Map Set Object-----------------------------------*/



/*----------------------tagged template literals with interpolation function-----------------------------------*/
//1- 将数组内的内容打印到标签函数内
function comma(strings, ...values) {
    return strings.reduce((prev, next) => {
		console.log("1. "+values);
        let value = values.shift() || [];
        value = value.join(", ");
        return prev + next + value;
    }, "");
}
const snacks = ['apples', 'bananas', 'cherries'];
console.log("2. "+ comma`I like ${snacks} to snack on.`);
// 以上这一行标签函数等同于下面的这个es5函数
console.log("3. "+ comma(["I like ", " to snack on."], snacks));



//2- 将多个变量打印到标签函数内
const fish = 'fish';
const number = 2;
const logArg = (...args) => console.log("4. ",...args);//不加字符串4. 传入参数为函数时打印出[Function]
// 如果传入的参数是变量，则会打印一个数组，该数组包括了标签函数内所有的字符串，然后再打印这些变量
logArg`I am superman with ${number} ${fish}, es6.`;
function superman(strings, ...values) {
    // 下面这行代码每次累加会加一次values的值
    // return strings.reduce((pre,cur)=>{return pre+cur+values},'')
    // 打印...values的值
    // console.log("5. "+values);//console.log打印无返回值函数时打印出undefined
    // return values;
	// 运用reduce的index添加值的方法，最后会为末尾加一个undefined,只要在数组末尾加一个空字符元素就可以解决
    values.push("");
    return strings.reduce((pre, cur, i) => {
		return pre + cur +values[i]
	}, '');
}
// 以下打印values时，上面那行代码打印[[]],下面那行代码打印[],注意此时在函数作用域内打印values时，其格式是一个二维数组，
// 打印返回的spread值参数时，无论第二个参数起后面的值是什么形式，都会被拆解成值队列的形式,就是无数组[]括号的参数值
console.log("6. "+superman(["I am superman with ", " ", ", es6."], [2, "fish"], {"abc":"abc"}));
console.log("7. "+superman `I am superman with ${number} ${fish}, es6.`);
//如果传入的参数是函数，打印一个数组包含一个字符串和一个空字符，然后再打印该函数参数，下例所示
logArg`I am Benjamin ${()=>{return 'text'}}`;
function Benjamin(strings,...values){
	values.push("");
	return strings.reduce((pre,cur,i)=>{
		return pre+cur+values[i]
	},'')
}
function text() {return "text"}
console.log("8. "+Benjamin`I am Benjamin ${text()}`);//template literals能打印表达式结果和函数执行不能直接打印出函数的返回值



//3- 实现多个标签函数的灵活组合
function cook(strs, ...substs) {
    return substs.reduce(
        (prev, cur, i) => prev + cur + strs[i + 1],
        strs[0]
    );
}
function repeat(times) {
    return function(...args) {
        return cook(...args).repeat(times);
    };
}
const three = (...args1) => (...args2) => (...args3) => cook(args1) + cook(args2) + cook(args3);
repeat(3)`abc`
three `hello``world``!`
console.log('\n');
/*----------------------tagged template literals with interpolation function-----------------------------------*/


/*----------------------combination to algorithm-----------------------------------*/
const fibonacci = n => Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);
/*----------------------combination to algorithm-----------------------------------*/