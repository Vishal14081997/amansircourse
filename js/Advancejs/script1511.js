//higher order function

// setTimeout( function(){
//     console.log("vishal singh");
    
// }, 1000)
////////////////////////////////////////


// console.log("HTML");
// console.log("css");
// console.log("js");
// console.log("react js");
// setTimeout(function(){
    
//     console.log("next js");
// } ,1000)
// console.log("node");
// console.log("mongodb");

/////////////////////////////////////////////

// var watch = document.getElementById('digitalWatch')
// setInterval(function(){
//     const date = new Date()
//    watch.innerText = (`[${date.getHours()}:${ date.getMinutes()}:${date.getSeconds()}]`);

// },1000)

/////////------------ CALL BACK FUNCTION------- /////////////

// function Heyjs(){
//     console.log("vishal singh");
    
// }

// function add(a,b,cb){
//     console.log(a+b);
//     cb()   
// }

// add(20,20,Heyjs)

//////////////////////////////

function LogIn() {
    console.log("Login"); 
   
}
function createAcc(callback){
    console.log("creat account");
   
    callback() 
}
createAcc(LogIn)

