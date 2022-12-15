
import{JavascriptGreeter} from './javascriptgreeter';

describe("javascriptGreeter", () => {
    test("return name and greeting", () =>{
        let newJavascriptGreeter = new JavascriptGreeter("Hello")
        
        expect(newJavascriptGreeter.greet("Zach")).toBe("console.log(Hello, Zach!)")

    })



})

// describe('Bank Account Tests', () => {
//     test('add interest, balance 100 and interest is 10%', () => {
//         //arrange
//         //instantiate your objects, set up any dependencies
//         let testBankAccount = new BankAccount(100, .1);

//         //act
//         //What should the balance be in the beginning?
//         expect(testBankAccount.balance).toBe(100);

//         //call the function
//         testBankAccount.addInterest();

//         //did it work?
//         expect(testBankAccount.balance).toBe(110);
//     })
// });