(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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
]

const url="https://wind-bow.gomix.me/twitch-api/channels/";

// const dataUsers=wikiUsers.map(dataUser=>(fetchJsonp(url+user).then(response=>response.json()).then(user=>))
},{"fetch-jsonp":2}],2:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.fetchJsonp = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  var defaultOptions = {
    timeout: 5000,
    jsonpCallback: 'callback',
    jsonpCallbackFunction: null
  };

  function generateCallbackFunction() {
    return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
  }

  function clearFunction(functionName) {
    // IE8 throws an exception when you try to delete a property on window
    // http://stackoverflow.com/a/1824228/751089
    try {
      delete window[functionName];
    } catch (e) {
      window[functionName] = undefined;
    }
  }

  function removeScript(scriptId) {
    var script = document.getElementById(scriptId);
    if (script) {
      document.getElementsByTagName('head')[0].removeChild(script);
    }
  }

  function fetchJsonp(_url) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    // to avoid param reassign
    var url = _url;
    var timeout = options.timeout || defaultOptions.timeout;
    var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;

    var timeoutId = undefined;

    return new Promise(function (resolve, reject) {
      var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
      var scriptId = jsonpCallback + '_' + callbackFunction;

      window[callbackFunction] = function (response) {
        resolve({
          ok: true,
          // keep consistent with fetch API
          json: function json() {
            return Promise.resolve(response);
          }
        });

        if (timeoutId) clearTimeout(timeoutId);

        removeScript(scriptId);

        clearFunction(callbackFunction);
      };

      // Check if the user set their own params, and if not add a ? to start a list of params
      url += url.indexOf('?') === -1 ? '?' : '&';

      var jsonpScript = document.createElement('script');
      jsonpScript.setAttribute('src', '' + url + jsonpCallback + '=' + callbackFunction);
      if (options.charset) {
        jsonpScript.setAttribute('charset', options.charset);
      }
      jsonpScript.id = scriptId;
      document.getElementsByTagName('head')[0].appendChild(jsonpScript);

      timeoutId = setTimeout(function () {
        reject(new Error('JSONP request to ' + _url + ' timed out'));

        clearFunction(callbackFunction);
        removeScript(scriptId);
        window[callbackFunction] = function () {
          clearFunction(callbackFunction);
        };
      }, timeout);

      // Caught if got 404/500
      jsonpScript.onerror = function () {
        reject(new Error('JSONP request to ' + _url + ' failed'));

        clearFunction(callbackFunction);
        removeScript(scriptId);
        if (timeoutId) clearTimeout(timeoutId);
      };
    });
  }

  // export as global function
  /*
  let local;
  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }
  local.fetchJsonp = fetchJsonp;
  */

  module.exports = fetchJsonp;
});
},{}]},{},[1]);
