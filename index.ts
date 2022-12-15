import{Greeter} from './greeter';
import{JavascriptGreeter} from './javascriptgreeter';
import{LoudGreeter} from './loudgreeter';
import{HtmlGreeter} from './htmlgreeter';


let newGreeter = new Greeter("Hello")

// console.log(newGreeter)

let newJavascriptGreeter = new JavascriptGreeter("Hello")

let newLoudGreeter = new LoudGreeter("yo", "yoi")

let newHtmlGreeter = new HtmlGreeter("yoi", "yoi")
// console.log(newJavascriptGreeter, newGreeter, newLoudGreeter)
console.log(newJavascriptGreeter.greet("Zach"))
// console.log(newGreeter.greet("Zach"))
// console.log(newLoudGreeter.greet("Williams"))
// console.log(newHtmlGreeter.greet("Williams"))
