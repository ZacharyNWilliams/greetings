import{Greeter} from './greeter';

class JavascriptGreeter extends Greeter{

    constructor(greeting:string){
        super(greeting);
        this.greeting = greeting

      
    }
    
  greet(name:string): string{

       return `console.log(Hello, ${name}!)`;
    }
}

export{JavascriptGreeter}
