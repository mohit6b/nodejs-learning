var a = 1
var b = 2
var c = a+b

console.log(c)

// 17 - Javascript Aside: First-Class Functions and Function Expressions
// function statement
function greet(){
    console.log('Hi');
}
greet();

// functions are first class
function logGreetings(fn){
    fn();
}
logGreetings(greet);

// function expression
var greetme = function(){
    console.log('Hi Mohit');
}
greetme();

// it's first-class
logGreetings(greetme);

// use a function expression on the fly
logGreetings(function(){
    console.log('Hi Tony');
});

// 18 - 