// // break , continue //statements

// for( i=1; i <=10; i++){
   
//     if(i==7) break;

//     document.write(i ,"<br>")
// }

document.write("<hr>")

for(i=1; i<=10; i++){
    if(i==8) continue;
    document.write(i ,"<br>")
}

// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

// ################## for-in loop ######################

let obj = {
    name:"vishal",
    age: "25",
    email: "vishal@gmail.com"
};

for(let x in obj){
    document.write(`${x} , ${obj[x]} <br>`);
}
document.write("<hr>");


document.write("<br> name:vishal <br> age:25 <br> email:vishal@gmail.com")

document.write("<hr>");



let arr = [ 9 ,4 ,7 , 5 ,8]

for(let x in arr){
    document.write(`${x} : ${arr[x]} <br>`);
}

// let arr = [ 9 ,4 ,7 , 5 ,8]

// for(let y in arr){
//     document.write(`${y} : ${arr[y]} <br>`);
// }

