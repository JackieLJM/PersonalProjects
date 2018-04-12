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



// function diffArray(arr1, arr2) {
//   // Same, same; but different.
//   var a=arr1.filter(v=>!arr2.includes(v));
//   console.log(a);
//   var b=arr2.filter(v=>!arr1.includes(v));
//   console.log(b);
//   //过滤出数组1内不等于数组2内的元素  
//   return a.concat(b);
// }
// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// var fruits=["Apple", "Banana"];
// var first = fruits.shift();
// console.log(first,fruits);
// unshift push是增加 pop shit是减少
// if(Math.floor(500/1000)){
// 	console.log(1);
// }



// function myReplace(str, before, after) {
// 	// console.log('A'.search(/[A-Z]/)!==-1)
//   if(before[0].search(/[A-Z]/)!==-1){
//   	console.log(after[0].toUpperCase());
//     var a=after.replace(after[0],after[0].toUpperCase());
//     	return str.replace(before,a);
//   }
//   return str.replace(before,after);
// }
// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
// var str = 'For more information, see Chapter 3.4.5.1';
// var re = /see (chapter \d+(\.\d)*)/i;
// var found = str.match(re);
// console.log(found);
// //match返回数组



// function translatePigLatin(str) {
//   var strArr=str.split('');
//   var i=0;
//   while(strArr[i]!='a'&&strArr[i]!='e'&&strArr[i]!='i'&&strArr[i]!='o'&&str[i]!='u'){
//     i++;
//   }
//   var suff = str.substr(i);
//   var pre = str.substr(0,i);
//   str=suff+pre;
//   if(i==0){
//     str+='way';
//   }else{
//     str+='ay';
//   }
//   return str;
// }

// console.log(translatePigLatin("consonant"));



// DNA pairing
// 转成数组操作，低效
// function pairElement(str) {
//   var strArr=str.split();
//   var pair=[["A","T"],["C","G"]];
//   for(let i=0;i<strArr.length;i=i+2){
//     if(strArr[i]!==strArr[i+1]){
//       if((strArr[i] in pair[1]&&strArr[i+1] in pair[1])||(strArr[i] in pair[2]&&strArr[i+1] in pair[2]){  
//         continue;
//       }else{
//         strArr[i] in pair[1]?strA
//     }
      
//     }
//   }
// //   strArr.reduce((pre,cur)=>{
// //   });
// //   return str;
// }
function pairElement(str) {
  var arr=[];
  var pair=[["A","T"],["C","G"]];
  for(var i=0;i<str.length;i=i+2){
  	// console.log(typeof str[i+1].length);
  	// console.log(str[i+1]!==undefined?str[i+1]:'');
    arr.push(str[i]+(str[i+1]!==undefined?str[i+1]:''));
  }
  arr.forEach((item)=>{
  	return 
  		if((item[0] in pair[1]&&item[1] in pair[1])||(item[0] in pair[2]&&item[1] in pair[2])){

  		}
  })
  return arr;
  // return str;
}

console.log(pairElement("GCG"));
// console.log('obj'.length==2?'a':'');
