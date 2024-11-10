
//problem-1
function hello(firstName: string){
    console.log('hello' + firstName);
}

hello('yoyo');

//problem-2

function sum(a:number,b:number) {
    return a+b;
}

console.log(sum(2,3));

//problem 3
function isLegal(age: number) {
    if (age > 18) {
        return true;
    } else {
        return false
    }
}

console.log(isLegal(8));
console.log(isLegal(19));

//problem 4

function one (x:()=> void){
    setTimeout(x,1000);
    }
    
    
    // one(()=>console.log('typeScript'));


    //==================//

    interface ppl {
        name: String,
        age: number,
        greet: () => string
    }

    let person1 : ppl ={
        name: 'jimmy',
        age: 25,
        greet: () => 'hi',
    }

    console.log(person1.greet());