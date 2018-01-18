// function palindrome(str) {
//   // Good luck!
//   var string=str.toLowerCase();
//   var format=string.replace(/[^a-z0-9]/g,"");
//   var len=format.length-1;
// //   if(format.length%2===1){
//   var a=format.length%2===1?format.length/2+1:format.length/2;
//   for(var i=0;i<a;i++){
//     if(format[i]===format[len])
//     {
//       len--;
//     }else{
//       return false;
//     }
//   }
//   return true;
// //   }    
// }
// palindrome("eye");



// function titleCase(str) {
//   var words=str.split(" ");
//   var low=words.map((word)=>{return word.toLowerCase();});
//   var upp=low.map((word)=>{return word.replace(word[0],word[0].toUpperCase());});
//   str=upp.join(" ");
//   return str;
// }
// console.log(titleCase("sHoRt AnD sToUt"));



// var array=["a","b","c"];
// console.log(array.slice(2,4));
// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   var ar=[];
//   var length= arr.length%size===0?arr.length/size:arr.length/size+1;
//   console.log(length);
//   for(var i=0;i<length;i++){
//     var subarr=arr.slice(0+i*size,size+i*size);
//     ar.push(subarr);
//   }
//   return ar;
// }
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));



// var str=null;
// var condition=str===
// (false&&null&&0&&""&&undefined);
// // (false||null||0||""||undefined);
// console.log(condition);
// console.log(str.length);
// console.log(typeof ""==="string"||"".length===0)
// function bouncer(arr) {
//   // Don't show a false ID to this bouncer.  
// //   arr.filter((obj,falsy)=>{falsy.forEach((object)=>(object!==obj));});
//    arr=arr.filter(function(obj){
//       if(obj===false){
//         return false;}
//      else if(obj===null){
//        return false;
//      }else if(obj===0){
//        return false;
//      }
//      else if(obj.length===0){
//        return false;
//      }
//      else if(obj===undefined){
//        return false;
//      }else if(isNaN(obj)){
//        return false;
//      }
//      else {
//        return true;
//      }
//   // return Boolean(obj);       
//    });
//   return arr; 
// }
// console.log(bouncer([false, null, 0, NaN, undefined, ""]));




// function getIndexToIns(arr, num) {
//   // Find my place in this sorted array.
//   var index=num;
//   arr.push(num);
//   arr.sort();
//   console.log(arr);
//   num=arr.indexOf(index);
//   return num;
// }

// console.log(getIndexToIns([5, 3, 20, 3], 5));



console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charCodeAt(13));