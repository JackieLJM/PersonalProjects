var fetch = require('node-fetch');
// var recent=()=>fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then((res)=>res.json(res)).then((data)=>console.log(data));
// var alltime=()=>fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then((res)=>res.json(res)).then((data)=>console.log(data));
// recent();
// alltime();
var f;
var recent = () => fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then((res) => res.json(res)).then((data) => {

});

console.log(recent());