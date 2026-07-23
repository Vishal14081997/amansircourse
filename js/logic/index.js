console.log("hello vishal");

/* multi line comment */

// let , var , const


// var - globle scop - redeclare✅ , update✅
//let - block scop -   redeclare❎ ,update✅
// const - block scop - redeclare❎ , update❎

// ------------ var ------------
// var a = 10;
// console.log(a);

// var a = 20;
// console.log(a);
// a = 30;
// console.log(a);

// if(true){
// var a = 10;
// }
// console.log(a);

// ------------ let ------------
// let a = 33;
// console.log(a);
// a = 44;
// console.log(a);

// if(true){
// let a = 10;
// }
// console.log(a);

// --------- const ----------
// const a = 55;
// console.log(a);

// if(true){
// const a = 10;
// }
// console.log(a);

// --------- data types--------

// 1) primtive types
// 2) non primtive types

// *********primtive types **********
// a. number(10)
// let age = 20;
// b . string()
// let name = "Vishal";
// c . boolean(true)
// let isLogin = true;
// let isAdmin = false;

// console.log(isLogin);
// console.log(isAdmin);
// d . null
// let data = null;
// console.log(data);
// let data = null;
// e . undefiend
// let age;
// console.log(age);
// let age;
// f . symbol
// Symbol एक unique value बनाता है।
// अगर दोनों Symbol का text एक जैसा भी हो, फिर भी वे अलग होते हैं।
// let id1 = Symbol("id");
// let id2 = Symbol("id");
// console.log(id1 === id2);
// g . bigint
// let bigNumber = 999999999999999999999999999999999n;
// let num = 123456789123456789123456789n;

// *********non premtive types  **********
// a) Array  b) object 

// let arr = [1 ,2 ,3 ,4, "vishal" ,true]

// const obj = {
//     // key:value
//     age:34,
//     name:"vishal"
// }
// console.log(obj["age"]);

// --------- naming convension-----

// camel case -
// const myName = "vishal"

// snake case -
// const my_name = "vishal"

// let name = "vishal"
// console.log(typeof name);
// document.write(typeof name, name)






