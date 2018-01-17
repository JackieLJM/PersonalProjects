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

function titleCase(str) {
  var words=str.split(" ");
  var low=words.map((word)=>{return word.toLowerCase();});
  var upp=low.map((word)=>{return word.replace(word[0],word[0].toUpperCase());});
  str=upp.join(" ");
  return str;
}

console.log(titleCase("sHoRt AnD sToUt"));