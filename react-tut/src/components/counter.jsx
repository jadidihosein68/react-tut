
//for study purpose only ! 

// jsx better than js because beter compilation.
import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value, // get the value from imported fields 
    tags: ["tag1"],
  };


  /*
  constructor  (){
      super();
    console.log(this);
    this.handleIncrement = this.handleIncrement.bind(this);

  }
*/
  renderTags() {
    if (this.state.tags.length === 0) return <p>there are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = product => {
      // this.state.count++; // it wont work ! instead we will use line below : 
    this.setState({value : this.state.value +1});
      console.log(this);
  }

  render() {

    console.log('prop',this.props);

    return (
      <React.Fragment>

        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={()=> this.handleIncrement()} className="btn btn-secondary btn-sm">
          Increament
        </button>

        {this.state.tags.length === 0 && "Please create a new tag !"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2";
    classes += this.state.value === 0 ? " badge-warning" : " badge-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
