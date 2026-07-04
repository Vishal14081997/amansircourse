// function sum(a,b,c){
// document.write( a + b+c)
// }
// sum(10 ,20 ,30)


// 1.) rest operator
// 2.) spread operator

// ---------rest operator-------

// exapl-1 

// function sum(a , ...args){
//     // console.log(arguments);

// document.write(`${a} ,`)
//     sum =0;

//     for(let x in args){
//         sum += args[x]
//     }
//     document.write(`${sum}`)
// }

// sum("aman" ,20 ,30 ,39)

// exapl-2

// function sum(a , b, ...args){
//     // console.log(arguments);

// document.write(`${a} , ` , `${b} ` )

//     num = 0;

//     for(let x in args){
//         num += args[x]
//     }
//     document.write(`${num}`)
// }

// sum("vishal" , "singh " , 20 ,30 ,50 )


// ---------spread operator-------

let arr = [ 1 ,2 ,3, 4, 5 ,100 ]

function sum(a , b, ...args){
    // console.log(arguments);

document.write(`${a} , ` , `${b} ` )

    num = 0;

    for(let x in args){
        num += args[x]
    }
    document.write(`${num}`)
}

sum("vishal" , "singh " , ...arr )



