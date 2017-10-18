// map set
let s =new Set([1,1]);
let m=new Map([['1',1],[1,1]]);
console.log(s,m);
console.log(s.keys());
console.log(m.keys());


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

const snacks = ['apples', 'bananas', 'cherries'];
comma`I like ${snacks} to snack on.`;