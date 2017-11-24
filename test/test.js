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
const args=require('minimist')(process.argv.slice(0,1));
console.dir(args._);
console.dir(args.env);