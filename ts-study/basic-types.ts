
//boolean
let x: boolean = true;

// console.log(x);

//array

let a: number[] = [1, 2, 3];
let b: Array<string> = ['hello', 'hola'];
let c: Array<any> = ['abc', 1];

c.push('xyz');
b.push('efg')

// console.log(a)
// console.log(b)
// console.log(c)

// tuples

let person: [string, number] = ['Alice', 30];
person.push(23)
// console.log(person)


//function

function fn1(a:string, b:string): string {
    return `${a} ${b}`
}

function fn2(a:string, b:string): void {
    console.log(`${a} ${b}`)
}
