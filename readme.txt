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


/////////////////////////////////////
ctr + D is cool ! 

get married with Framework !

1- React.Fragment help you to bind the whole DOM 
2- state = {}; => include data that component need ! 
3- jsx expresion are just like other element
4- instead of class we will use className in jsx
5- to add style we have to add it in plain js object
        styles={
        fontWeight : 'bold'
        fontSize : 10    // => equal tp '10px'
        } /// CSS property in camel case notation ! 
        <span style={this.styles}> </span>
    an other approach with inline styles : 
    <span style={{ontWeight : 'bold'}}> </span>
6- example of ng for : (we use map instead :D !)
        <ul>
               {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
        </ul>
7- logical && between different data type will return the data type if true. => falsy or truthy operation , if all true return last one ! 
8- event just like jquery ! we just dont call it example : onClick={this.handleIncrement}
9- if you want to use the state object you have to bind it :D ! in the constructor we have access to binding object

  constructor  (){
      super();
    console.log(this);
    this.handleIncrement = this.handleIncrement.bind(this);

  }
  is the same as : 
    handleIncrement =() => {
      this...
  }

10- to update state follow approach below : 
    // this.state.count++; // it wont work ! instead we will use line below : 
    this.setState({count : this.state.count +1});

11- props are all the imported field to the component 
    in the component we use like the line below : 
    state = {
        count: this.props.value, // get the value from imported fields 
        tags: ["tag1"],
    };

11- children using to pass content between opening and closing tags 
12- prop vs state : prop pass daqta to component, state are th elocal data of component, state is private to component (and you can pass the data to kid), prop is read only !
13- the component who own the state is the one who should modify it ! 
14- buble up the event, like eventemitter. to do so make the functiopn on parent and add it as ondelete, on the kid use the this.prop.mymethod;
