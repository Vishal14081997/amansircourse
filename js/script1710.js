/*
Que.1)

age >= 18=> You can vote
age < 18 => You can't vote

*/

// let age = prompt();

// if(age>=18){
//     alert(" You can vote")
// }else if(age<18){
//     alert(" You can not vote") 
// }else{
//     alert("Get lost")
// }


//------ #### Switch case ####----------

let day = Number(prompt("enter number"));

switch(day){
    case 1:
        document.write("Today is Monday")
        break;
   
     case 2:
        document.write("Today is Tuesday ")
        break;  
     case 3:
        document.write("Today is Wednesday ")
        break;  
     case 4:
        document.write("Today is Friday ")
        break;  
     case 5:
        document.write("Today is Tuesday ")
        break;  
     case 6:
        document.write("Today is Tuesday ")
        break;  
     case 7:
        document.write("Today is Sunday ")
        break;  
   
    default:
        document.write("This is NoWhare") 
        break;      

}
