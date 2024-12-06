Question 1 = 4 =>

Dynamic typing means that the type of a variable in js is determined at runtime based on the value it holds.
when variable can hold values of different types at different points during the program's execution called as Dynamic typing

Ex:==>
let data = 42;  
if we console.log typeof it == > number 
data = "Hello world"; 
now typeOf data will change to a string 

Type coercion is the implicit or explicit conversion of a value from one type to another. js automatically performs implicit conversions during runtime in arithmatic operations.we can also do explicit coercion using methods like Number(), String(), or Boolean().
Ex:=>
let result = "5" * 2; string "5" will coerced to number
let value = "123";
Value = Number(value); 



___________________________________________________________________________________


Question 2 - 4 ==>>

In loose equality operator (==) it implicitly coerce the variable and check the both value and give output accordingly 
but Strict equality operator (===) it not coerce implicitly and it check for both data and typeOf variable 


________________________________________________________________________________________

Question 3--4 =>>

Arrow Functions: Do not have their own this. They inherit this from their surrounding (lexical) scope.
Function Expressions: Have their own this, which is determined by how they are called (e.g., object method).

ex =>>

let obj = {
    name : "Aayush pandey"
    greet : function (){
        console.log(`hello  ${this.name}`)
        return;
    },

     greetagain = () => (`hello hi  ${this.name}`)   
    
}


obj.greet() ==> hello aayush pandey

obj.greetagain() ==> it will throw error

__________________________________________________________________________

question 4 - 4 =>>

Arrow function has much more simpler syntax and can be use as inline function and can be pass as arguments but we cant use "this" method because it inherits this method lexically 

Regular function syntax bit lengthy but we can use this method because it refer to parent object
 