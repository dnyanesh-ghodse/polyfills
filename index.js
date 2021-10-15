
//2 polyfilld for Split(), Join() and reverse().

let arr = [1,2,3,4,5,6,7]
let str = "Hello-how-are-you"


// 1 split 
const spliter = (str,delim) => {
  let newStr = str.replaceAll(delim," ");
  let arr = [];
  let a = ''
  if(delim === ""){
    for(let char of newStr){
      arr.push(char)
    }
  }
  if(newStr.includes(" ")){
    newStr+= " "
    for(let char of newStr){
      if(char === " "){
        arr.push(a.trim());
        a = ""
      }else{
        a+=char
      }
    }
  }else{
    arr.push(str)
  }
  return arr
}

console.log("mySplit --------",spliter(str))

console.log("native split --------",str.split())

 const myJoin = function (arr,separator) {
    let str = "";
    if(!separator){
        for(let item of arr){
            str+=item + ","
        }
    }else{
        for(let item of arr){
            str+=item + separator
        }
    }

   let a =  str.slice(0,str.indexOf(arr[arr.length - 1])) + arr[arr.length - 1]
    return a
}

console.log("myJoin ---- ",myJoin(arr,"#")) //self
console.log('native Join ---- ',arr.join("#")); //native



//3  reverse 

function myReverse(arr) {
    let rev = []
    for (let i = arr.length - 1; i >= 0; i--) {
        rev.push(arr[i])
    }
    return rev
}

console.log('myReverse' ,myReverse(arr));
console.log('native reverse ----- ', arr.reverse());


//2 join 

// Array.prototype.myJoin = function (separator) {
//     let str = "";
//     let arr = this;
//     if(!separator){
//         for(let item of arr){
//             str+=item + ","
//         }
//     }else{
//         for(let item of arr){
//             str+=item + separator
//         }
//     }
//    let a =  str.slice(0,str.indexOf(arr[arr.length - 1])) + arr[arr.length - 1];
//     //  return str.substring(0,str.indexOf(arr[arr.length - 1])) 
//     return a
// }

// let arr = ['a','g','t','f'];
// console.log("self ---- ",arr.myJoin("#")) //self
// console.log('native ---- ',arr.join("#")); //native
