let s =new Set([1,1]);
let m=new Map([['1',1],[1,1]]);
console.log(s,m);
console.log(s.keys());
console.log(m.keys());


var db={data:Math.random().toString(36).substr(-8)}
let {data}=db;
console.log(data);