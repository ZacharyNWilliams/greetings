import{Greeter} from './greeter';

class LoudGreeter extends Greeter{
    private extra:string = "!"; 

    constructor(greeting:string, extra:string){
    super(greeting);

    this.extra = extra ;
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