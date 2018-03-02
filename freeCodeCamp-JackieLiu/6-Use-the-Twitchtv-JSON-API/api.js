// 在服务端配置dom环境
// var jsdom = require("jsdom");
// var {JSDOM}=jsdom;
// // ---Deprecated
// // require("jsdom").env("", function(err, window) {
// //     if (err) {
// //         console.error(err);
// //         return;
// //     }
// // })
// var window =(new JSDOM(`<!DOCTYPE html><body><p>Hello world</p></body>`)).window;
// var $ = require('jquery')(window);
// var fetch = require('isomorphic-fetch');
var fetchJsonp = require('fetch-jsonp');

// 1- 直接设置no-cors会返回ok:false,不支持直接请求
fetch("https://wind-bow.gomix.me/twitch-api/streams/react?callback=?", { method: "get", mode: "no-cors", header: { "Accept": "application/json" } }).then(res => console.log(res))
// 2- 在服务端没有打印出jquery ajax方法，可以打印出数据，但是ajax缺少了异步流处理的优越，也需要在url加上?callback=?的后缀才能使用jsonp
$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/Dyrus?callback=?", function(data) { console.log(data); })
// 3- 在服务端无法用fetchJsonp,即使引用了node-fetch；fetch的response不能缩写成res,会引发错误；优点使用流式处理，缺点是生成的代码量较多，因为把模块代码引了进去；该模块源码没有使用fetch
fetchJsonp("https://wind-bow.gomix.me/twitch-api/channels/react", { jsonpCallback: 'callback' }).then(response => response.json()).then(function(json) {
    console.log(json)
}).catch(function(error) {
    console.log(error)
})
// 4- 比较以上数据，显示来自users的数据
fetchJsonp("https://wind-bow.gomix.me/twitch-api/users/react", { jsonpCallback: 'callback' }).then(response => response.json()).then(function(json) {
    console.log(json)
}).catch(function(error) {
    console.log(error)
})

//状态切换显示，同时更改状态数据ui组件
$(document).ready(function() {
    $(".selector").click(function() {
        $(".selector").removeClass("active");
        $(this).addClass("active");
        var status = $(this).attr('id');
        if (status === "all") {
            $(".online, .offline").removeClass("hidden");
        } else if (status === "online") {
            $(".online").removeClass("hidden");
            $(".offline").addClass("hidden");
        } else {
            $(".offline").removeClass("hidden");
            $(".online").addClass("hidden");
        }
    })
});
//项目采用第3种选择

//---------6-project----------//
const wikiUsers = ['AdmiralBulldog', 'Amaz', 'Aphromoo', 'Pavel Beltiukov', 'Biofrost', 'J. T. Brown', 'Tom Cassell', 'Christoffer Stub', 'Stanislav Cifka', 'Dyrus',
    'Faker',
    'Forsen',
    'Dan Gheesling',
    'Kevin Godec',
    'Grubby',
    'Kat Gunn',
    'H3h3Productions',
    'Hafu',
    'Huni',
    'Ice Poseidon',
    'Mia Khalifa',
    'Brian Kibler',
    'Kolento',
    'Kripparrian',
    'Maikelele',
    'Joseph Marquez',
    'Andy Milonakis',
    'N0thing',
    'Sean Plott',
    'Rekkles',
    'SethBling',
    'Sneaky',
    'Bjergsen',
    'Stixxay',
    'T-Pain',
    'Trump',
    'Meg Turney'
];
const freecodecampUsers=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

const url="https://wind-bow.gomix.me/twitch-api/channels/";
const fetchData=(dataUser,id)=>(fetchJsonp(url+dataUser).then(response=>response.json()).then(user=>$(id).append(`<li>${user}</li>`));

const allDataUsers=wikiUsers.map(dataUser=>(fetchData(dataUser,'#all')));



