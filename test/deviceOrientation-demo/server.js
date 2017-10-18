// let http=require('http');
// const server=http.createServer((req,res)=>(
//     res.send('index.html')
// ));
// server.listen(9222,'localhost',)

let express=require('express');
let app=express();
app.use(express.static('./garden')).listen(9222,'127.0.0.1');