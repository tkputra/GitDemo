function sum(a,b){
   return a + b;
}

// function product(a,b){
//     return a * b;
// }
// const bigProduct = product(12345,34567);

// console.log(sum(10,10));
// console.log(product(12,10));
// console.log(bigProduct);


//setTimeout(function() {
 //   console.log("1..");
//},1000);

//setTimeout(function() {
 //   console.log("2..");
//},2000);

//setTimeout(function() {
 //   console.log("hey your rock!!");
//},3000);

// setTimeout(() => console.log("1.."),1000);

// setTimeout(() => console.log("2.."),2000);

// setTimeout(() => console.log("Hey your rcok!!.."),3000);

const favoriteCookies = [
    "chocolate chip", //0
    "iced oatmeal", //1
    "sugar cookie", //2
    "butter cookie"
];
console.log("list cookie =" + favoriteCookies)  
setTimeout (() => console.log("==========="),1000)    

favoriteCookies.push("windmill cookies");
setTimeout (() => console.log("yg nambah = " + favoriteCookies[favoriteCookies.length-1]),2000);
setTimeout (() => console.log("list cookie jadi nya =" + favoriteCookies),2500);

setTimeout (() => console.log("==========="),3500)

let lostCookies = favoriteCookies.pop();
setTimeout (() => console.log("yang hilang = " + lostCookies),4000);
setTimeout (() => console.log("list cookie jadi nya = " + favoriteCookies),4500);

setTimeout (() => console.log("==========="),5500)
setTimeout (() => console.log("mo liat cookie di index ke " + sum(1,1) + ": " + favoriteCookies[sum(1,1)]),6000);