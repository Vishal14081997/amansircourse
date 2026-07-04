// ----------Boolean---------

// const bool = false;

// document.write( typeof bool , bool)

// --------- null ----------

// const n = null;

// document.write(typeof n ," ", n)

// ---------undefined-------

// const un = undefined;

// document.write(typeof un, " " , un )

//--------- symbol-------

const sym = Symbol("vishal");

// document.write(typeof sym )

const sym1 = Symbol("vishal")
 
const sym2 = Symbol("vishal")

// document.write(sym1 == sym2 );

// -------- bigint--------

const big = 1234567890123456n ;


// document.write(typeof big , " " , big);



// ############ Non primitive type ##########


//  --------- Array ----------

// const arr = [ 1,2,3, 33 , "aman" , true]

// document.write( typeof arr ," " , arr )

// ------ Object --------

const obj = {
    name : "vishal",
    age : "25",
    email : " vs80058@gmail.com",

    newObj : {                  
        newName : "Vishnu"
    }
}

console.log( obj.name + " " + obj.age + " " + obj.email);

document.write(`<h3> Hello my name is ${obj.name} , <br> My age is ${obj.age} , <br> My email id is ${obj.email} ,<br> New name is ${obj.newObj.newName} </h3>`)


let names = "vishal";

const ab = `Hi , ${names}`;

document.write(ab);



