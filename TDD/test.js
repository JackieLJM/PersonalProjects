//**************** webpack-ES6环境 **********************//
// var BooksAPI = require('./data/BooksAPI');
// var book;
// var B = BooksAPI
//     .getAll()
//     .then(function () {
//         return books
//     });
// console.log(B);



// import * as ContactsAPI from './data/ContactsAPI'

// let state = {
//     contacts: []
// };

// ContactsAPI
//     .getAll()
//     .then((contacts) => {
//         state.contacts = {
//             contacts
//         }
//     });
// console.log(state);



//***************** Node-DOM环境 ************************//
// require('jsdom-global')();

// var getMeta=(url)=>{
//     var w,h,img=new Image();
//     img.src=url;
//     img.onload=function(){
//         w=this.width;
//         h=this.height;
//     }
//     console.log(img.width);
//     return {w:w,h:h}
// }
// var wh= getMeta('https://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api')
// console.log(wh);



//***************** Node环境 ************************//
// minimist模块
// require('babel-register');
// const args=require('minimist')(process.argv.slice(0,1));
// console.dir(args._);
// console.dir(args.env);
// console.dir(`${process.cwd()}`);


//***************** yunwuyue ************************//
// var wuyue = "http://dev.yunwuyue.cn:1000/MarkService/login";
// var fetch = require('node-fetch');
// fetch(wuyue, {
//         method: "post",
//         headers: {
//             "projectid": "20170901135018785",
//             "nodeurl": "http://nodetest.yunwuyue.cn:100/cloudproject",
//             "version": "1.0",
//             // 'Content-Type': 'application/json',   
//         },
//         body: {
//             "teacherid": "01001003",
//             "password": "01001003",
//             "yzm": "9527",
//         }
//     })
//     .then(res => console.log(res));
// .then(res=>res.json())
// .then(data=>console.log(data));


//*************** 语法活用扫盲debug ******************//
// var x = new String('Hello world');
// x不是一个字符串

// var i = 5;
// var s = "asdasdfasfa";
// for ( ;i < s.length; ) {
//     // ++i;   打印出6,7,8,9,10
//     console.log(i);
//     ++i;
// }

// var sb = '';
// var sb = sb.concat(1);
// // concat后应该赋给新值
// console.log(sb);

// var 
// // a=2.123124;
// a=-2;
// // ~a;
// console.log(~a);//1
// // ~~可以去掉小数,同parseInt()函数同作用

// var abc=['131231','31231','jhgfaf'];
// var abcd= abc.reduce((pre,cur)=>{return Math.min(pre,cur.length)},1);
// // 这里第一次比较就是用1和cur比较，这里的pre就是1，第二次pre的值就是返回的math.min得出的值
// // reduce也是不改变原值的方法
// // reduce适合于操作两个数组或两个对象间的复杂数据，能高杠的使用reduce，代码会变得很出色
// // reduce函数的第二个参数可以视为一个新的对象
// // 如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。
// // 没有返回值不能进行链式操作，这是常识
// // reduce方法的初始值是什么很重要，关键到一个初始值是什么决定了算法是否能实现，关系到逻辑思维是否能够很好的写出来
// console.log(abcd);

// console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charCodeAt(13));

// var arr=[1,2];
// // arr.push('1').push('2');不成立
// arr.forEach((item)=>{ 
// 	if(item===1){
// 		item=2
// 	}
// 	console.log(item);})
// console.log(arr);

// in操作符不能判断数组的元素
// var pair=["A","T"];
// var item='TC';
// console.log(item[0]);
// console.log(pair);
// console.log(item[0] in pair[1]);
// console.log(((item[0] in pair[0])&&(item[1] in pair[1]))||((item[0] in pair[1])&&(item[1] in pair[0])));

// console.log('a'.charCodeAt(0));

// var arr = [{
// 	a: 'a'
// }, {
// 	b: 'b'
// }];
// arr.map((item, i) => (console.log(i)))

// var btrueString = new Boolean('true');
// console.log(btrueString);


