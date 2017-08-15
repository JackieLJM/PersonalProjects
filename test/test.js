var BooksAPI=require('./data/BooksAPI');
var B=BooksAPI.getAll().then();
console.log(B);