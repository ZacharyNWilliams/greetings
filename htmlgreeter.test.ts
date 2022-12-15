import{HtmlGreeter} from './htmlgreeter';

describe("HtmlGreeter", () => {
    test("return name and greeting Html", () =>{
        let newHtmlGreeter = new HtmlGreeter("Hello")
        
       
        expect(newHtmlGreeter.greet("Zach")).toBe("<h1>Hello, Zach!</h1")

    })



})

describe("HtmlGreeter", () => {
    test("return name and greeting Html", () =>{
        let newHtmlGreeter = new HtmlGreeter("Hello")
        
       
        expect(newHtmlGreeter.greet("Zachary")).toBe("<h1>Hello, Zachary!</h1")

    })



})