var BooksAPI=require('./data/BooksAPI');
var book;
var B=BooksAPI.getAll().then(function(){return books});
console.log(B);