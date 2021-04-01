getting start : 4 

we are using ES 6 



// es 6 to define method inside class : 
const person = {
name: "bagher",
eat() {},
fart(){}
};
person.eat();
person['name']="kambiz";



////////////////////////////// this ! 
this -> how a function is call ? 
if this is inside a function and you call the method of object it always return the object it self. 
if you call this ourside the function call, it will call the global object 

const person ={
    name:"karim",
    walk(){
        console.log(this);
    }
};

person.walk();

const walk = person.walk;
walk();


function in java scripts are object. 
with the bind method u can set the value of "this" permanently, you will bind the function to the target object example : 

const walk = person.walk.bind(person);



///////////////////////////// arrow function : 

const square = (number) => {return number * number }   
//is the same as  
const square2 = number => number * number ;   


arrow function does not rebind this ! 

/////////////////////////////// object destructuring 

const address = {
street:'',
city:'',
country:''
};

const street = address.street;
const city = address.city;
const country = address.country;

//is the same as : 

const {street,city:ct,country} = address;


/////////////////////////////// spread operator : 

const first = [1,2,3]
const sec = [4,5,6]


const combined = first.concat(second);

is the same as but with a and b : 

const combined = [ ...first, 'a' ,...second , 'b'];

... can use for deep copy ! 


const clone = [...first];



///////////////////////////// class example 
class Person {
constructor(name){
    this.name = name; 
}

walk (){
console.log(`${name} is walking`);
}

}

const person = new Person("bagher"); 

/////////////////////////////////////// inheritance  : 


class Teacher extends Person {

constructor(name, degree){
super(name); // always should call ! if inherited;
this.degree = degree;

}

teach(){

    console.log("teaching");    
}
}

const etacher = new Teacher("kambiz" ,"fucker");




////////////////////////////////////// modules ! 

Each file call a module. 
