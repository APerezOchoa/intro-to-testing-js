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

function isVowel(input){
    if(input === undefined){
        return false;
    }else if(input.length === 1) {
        return /[aeiouAEIOU]/.test(input);
    }else {
        return false;
    }
}

function add(x, y){
    if(!isNaN(parseInt(x)) && !isNaN(parseInt(y))){
        return parseInt(x) + parseInt(y);
    }else{
        return "NaN";
    }
}