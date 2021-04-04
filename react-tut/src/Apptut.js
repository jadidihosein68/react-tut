import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";


class Apptut extends Component {



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
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(x=>x.value>0).length} />
        <main className="container">
            <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete} 
            ></Counters>

        </main>
        </React.Fragment>
    );
  }
}

export default Apptut;
