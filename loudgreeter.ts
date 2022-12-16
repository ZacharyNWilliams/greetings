import{Greeter} from './greeter';

class LoudGreeter extends Greeter{
    private extra:string = "!"; 

    constructor(greeting:string){
    super(greeting);

    
    this.greeting = greeting
    }

    addVolume():void {
       this.extra += "!"
    }
    greet(name:string) : string{
        
       return `${super.greet(name)}`
       
    }
    

}

export{LoudGreeter}