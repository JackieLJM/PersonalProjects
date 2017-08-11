const clone=require('clone');
let db = {}

const defaultData = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false 
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false
  }
}

// function getData (token) {
  let token=Math.random().toString(36).substr(-8);
  let data = db[token];

  if (data == null) {
    data = db[token] = clone(defaultData)
    // 深复制数据到db object的键值对里，再提取该键值到新的变量
  }

  
//   return data
// }
console.log(data);
console.log(db);