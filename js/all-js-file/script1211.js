// document.getElementById('text').innerHTML  = "React.js"

// document.getElementById('text').style.color= "#fff";
// document.getElementById('text').style.background= "blue";

// var dom = document.getElementById('text')

// dom.innerText = "vishal"
// dom.style.color = "blue"
// dom.style.background = "red"

// var dom = document.getElementById("text");
// var body = document.body.style;

// ////////one

// function app() {
//   body.backgroundColor == "pink"
//     ? (body.backgroundColor = "")((dom.innerText = "javascript"))
//     : (body.backgroundColor = "pink")((dom.innerText = "react"));

//   /////////////two
//   body.backgroundColor = body.backgroundColor == "" ? "pink" : "";
//   dom.innerText = body.backgroundColor ? "react" : "javascript";

//   /////////three
//   let obj =
//     body.backgroundColor == ""
//       ? { body: "pink", dom: "react" }
//       : { body: "", dom: "javascript" };
//   body.backgroundColor = obj.body;
//   dom.innerText = obj.dom;

//   dom.innerText = body.backgroundColor ? "react" : "javascript";

//   /////////////four

//   if (body.backgroundColor == "pink") {
//     body.backgroundColor = "";
//     dom.innerText = "javascript";
//   } else {
//     body.backgroundColor = "pink";
//     dom.innerText = "react";
//   }
// }


// const domcls = document.getElementsByClassName("para");
// //  console.log(domcls);

// for (let i = 0; i < domcls.length; i++) {
//   console.log(domcls[i]);

//   if (i % 2 === 0) {
//     domcls[i].style.color = "red";
//   } else {
//     domcls[i].style.color = "blue";
//   }
// }

//// method-5

const dom = document.body;
const dom1 = document.getElementById("text");
function app() {
  if (dom.style.backgroundColor === "") {
    dom.style.backgroundColor = "black";
    dom1.style.color = "white";
  } else if( dom.style.backgroundColor === "black"){
    dom.style.backgroundColor = "blue";
    dom1.style.color = "yellow";
  } else {
    dom.style.backgroundColor = "";
    dom1.style.color = "";
  }
}

