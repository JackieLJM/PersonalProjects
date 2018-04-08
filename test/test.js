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


// 语法活用扫盲debug
// var x = new String('Hello world');
// var i = 5;
// var s = "asdasdfasfa";
// for (; i < s.length; ++i) {
//     console.log(i);
// }
var sb = '';
var sb = sb.concat(1);
// concat后应该赋给新值
console.log(sb);
