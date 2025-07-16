/**
 * Type Predicate
 */

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function isNumberRetBool(value: any): boolean {
    return typeof value === 'number';
}

let number:any = 5;

if(isNumberRetBool(number)) {
   number;
}

if(isNumber(number)) {
    number;
}

interface Doge { 
    name:string;
    age:number;
}

interface Cat {
    name:string;
    breed:number;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal:DogeOrCat): animal is Doge {
    return (animal as Doge).age !== undefined;
}

const doge:DogeOrCat = {
    name:'doge',
    age:10
}

if(isDoge(doge)) {
    doge; //Doge
} else {
    doge; //never
}



