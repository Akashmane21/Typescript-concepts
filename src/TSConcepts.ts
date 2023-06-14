import {Addition , Substraction} from './studentCalc';  
import {Generics , GetLength , Students, Employees , MaleEmp} from './Generics'
{



// Build-in DataTypes :

/* String 
number 
void 
boolean
any */

let firstName: string = "Akash";
let str = new String("Nikita")  
let age: number = 55;
let ismale: boolean = true;
let unusable: void = undefined; // null

const add = (a: number, b: number): number => a + b;
const addany = (a: any, b: any): number => a + b;

// console.log(firstName, age, ismale, unusable, add(3, 4), addany(3, "Akash"));

// User-Defined Types
// 1. ArrayList

let list: number[] = [1, 3, 4];
let list1 : Array<number> = [2,2,3]
let mularray : number [][] = [[1,2] , [3 ,4]]
let value : number | string ;  
value = "Akash" 
value=20

var Studentinfo : {
    id : number,
    Name:string
}


// 2. Tuples :contains Multiple datatype values
let Tdata : [string , number , boolean]
Tdata = ["Akash" , 6 , true]

// 3. Interface
interface Maths {
    Substract (a : number , b:number) : any
}

let DOMath : Maths = {
    Substract (a : number , b: number ){
        return a+b
       }
}

// 4. Class
class Student  
{  
    RollNo: number;  
    Name: string;   
    constructor(_rollNo: number, _name: string)   
    {  
        this.RollNo = _rollNo;  
        this.Name = _name;  
    }  
    showDetails()  
    {  
        console.log(this.RollNo + " : " + this.Name);  
    }  
}  

let s1 = new Student(54 , "Akash" );
// s1.showDetails()




// 5. ENUM

enum Color {  
    Red, Green, Blue  
};  
let c: Color;  
c = Color.Blue;  
// console.log(c);


// Map
let days = new Map()
days.set( 0 , "Mon")
days.set(1 , "Tue")
// console.log(days.get(1) , days.has(0));
days.forEach(function (data , key)  {
// console.log(key , data);
})

// 6.Functions

function Studinfo(name:string , age : number , div:string="B Div") : any{      /* we can write div?:string  */
    let res = `Name :${name} , Age : ${age} , DIV : ${div}`
    console.log(res);
}

function addmul(a:number , ...b:number[]){
    console.log(a);
    b.forEach((num)=>{
        console.log(num);
    })
}
// addmul(1,2,3,4)

let empdata = function (name : string  , eid : number ) : string { 
    return  `Employee Name :${name} , Emid : ${age}`
}
// Studinfo( "Dhiraj" , 20  , "A Div")
// Studinfo( "Nikita" , 54  )

// console.log(  empdata("Alka" , 49567));

// 7. Generic

function identity<Type> (arg : Type) : Type {
    return arg
}

// console.log(identity<string>("Identity") , identity<number>(50));

function X(){
    var num=20
    console.log(num);
    
    return function Y(){
        console.log(num + 5);
    }
}
// var Y =  X()
// Y()



// String Literal Type

type users  = "Akash" | "Alka" | "Nikita" | "Dhiraj";
let auth : users;
let user = "Akassh"
if(auth==user){
    // console.log("User is Valid");
}
else{
    // console.log("User is inValid");  
}

// Switch

let ch : number;

switch(ch) {
    case 2:{
        // console.log("Hello");
        break;
    }
    default : {
        // console.log("Default Case");
        break
    }
}


// Interface : its used for pass the Objects to the Functions
interface Movie  {
    id : number ;
    Title : string
}

let Film = (filmdata:Movie ) =>{
    console.log(filmdata.id , filmdata.Title);
}

// let filmdata = { id :1 , Title : "KGF"}
// Film(filmdata)

// let dataa=<Movie>{ id:3 , Title:"RRR"}
// Film(dataa)
}

  
let addObject = new Addition(10, 20);   
let subObject = new Substraction(20, 10);  
  
// addObject.Sum();  
// subObject.Substract();  

let Gobj = new Generics()
// Gobj.identity<Number>(30)
// Gobj.Student<number , string>(1 , "Nikita")
// Gobj.ArrayArg<string>(["Akash" , "Nikita" , "Alka" , "Dhiraj"])
// Gobj.singleArg<number>( 49567 , "Akash Mane")
// Gobj.setValue(101 ,"Reyansh");
// Gobj.display()




let emp : MaleEmp = {id:2 , Name:"Akash" , Gender : "Male"}
Employees({id:2 , Name:"Akash" , Gender : "Male"})


let ex = new Students()
ex.name="AKash";
ex.salary=12345;
console.log(ex.Display());

console.log(GetLength<number>([1,23,4]));





