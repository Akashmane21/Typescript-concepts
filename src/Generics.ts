export class Generics<T ,U>{
    private id : T ;
    private User:U;

    setValue(_id:T , _User:U) : void{
        this.id=_id;
        this.User=_User;
    }

    display() : void{
        console.log(`Id :${this.id} , User : ${this.User}`);
    }


    constructor(){
        console.log("Generics Class Constructor Called");
    }

    identity<T>(arg:T) {
       console.log(arg); 
   }

   Student<I , N>(id:I , Name:N) {
    console.log(id , Name); 
    }

    ArrayArg<T>(arr:T[]){
        arr.forEach((items)=>{
            console.log(items);
            
        })
    }

    singleArg<T>(EmpId:T , EmpName:string){
        console.log(EmpId , EmpName);
    }

}

// Generics Interface

interface Employee {
    id:Number;
    Name:string;
}

export interface MaleEmp extends Employee {
    Gender:string
}

export function Employees<T extends MaleEmp>(emp : T) {
    console.log(`Id :${emp.id} , Name :${emp.Name} , Gender :${emp.Gender}`);   
}


export class Students {  
    private _salary: number;  
    private _name: string;  
  
    get salary() { return `Rs. ${this._salary}`; }  
    set salary(salary: any) { this._salary = +salary; }  
  
    get name() { return `Sir/Madam, ${this._name}`; }  
    set name(name: string) { this._name = name; } 
    
    Display() : string {
        return `Sir/Madam, ${this._name}  , Rs. ${this._salary}`
    }
}  

export function GetLength<T>(arr : Array<T>) : number{
    let len : number = arr.length
    return len ;
    }
// Generics Interface as Function Type