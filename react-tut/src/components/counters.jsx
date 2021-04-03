import React, { Component } from 'react';   
import Counter from "./counter"

class Counters extends Component {
    state = { 

        counters:[
            {id:1, value:0}
            ,{id:2, value:1}
            ,{id:3, value:0}
            ,{id:4, value:0}
        ]
     }



     handleIncrement=counter=>{

        const counters=[...this.state.counters];
        const indexs = counters.indexOf(counter)
        counters[indexs]={...counter}
        counters[indexs].value++;
        this.setState({counters});

     };


     

     handleDelete=(CounterID)=>{
         const counters = this.state.counters.filter(c=>c.id !== CounterID)
  
         this.setState ({counters});
         //this.setState ({counters}) is the same as   this.setState ({counters:counters})
         console.log("handler called",CounterID);
     }


     handleReset=()=>{

        const counters =this.state.counters.map(c=>{
            c.value= 0;
            return c;
        });

        this.setState ({counters});

     };

    render() { 


        return ( 
        <div>

            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2"> Reset </button>

            {this.state.counters.map(counter=><Counter 
            key={counter.id}
            counter ={counter}  
            onIncrement = {this.handleIncrement}
            onDelete={this.handleDelete}             
            > <h1>Counter #{counter.id}</h1></Counter> )}
        </div> );
    }
}
 
export default Counters;