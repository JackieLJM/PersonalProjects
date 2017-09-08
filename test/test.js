var BooksAPI = require('./data/BooksAPI');
var book;
var B = BooksAPI
    .getAll()
    .then(function () {
        return books
    });
console.log(B);





import * as ContactsAPI from './data/ContactsAPI'

let state = {
    contacts: []
};

ContactsAPI
    .getAll()
    .then((contacts) => {
        state.contacts = {
            contacts
        }
    });
console.log(state);