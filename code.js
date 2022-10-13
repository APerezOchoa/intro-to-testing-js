// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){
    if(typeof input !== "string" || input === ""){
        return "Hello, World!"
    }else{
        return "Hello, " + input + "!";
    }
}

function isFive(input){
    if(input === 5 || input === "5") {
        return true;
    }else{
        return false;
    }
}

function isEven(input){
    if(parseInt(input) % 2 === 0){
        return true;
    }else {
        return false;
    }
}