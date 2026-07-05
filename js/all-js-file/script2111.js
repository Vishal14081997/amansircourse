

class Human {
    sleep(){
        console.log("he can sleep");
        
    }
    eat(){
        console.log("he can eat");
        
    }
    cry(){
        console.log("he can cry");
        
    }
}

class Developer extends Human{}

const vishal = new Developer();

vishal.cry()

