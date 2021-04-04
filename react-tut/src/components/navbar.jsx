import React, { Component } from 'react';

// example of stateless functional component 







// instead of using the code below : 

/*



class NavBar extends Component {
    render() { 
        return (  

            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar
              
              <span className="badge badge-pill badge-secondary">{this.props.totalCounters} </span>
              </a>
            </div>
          </nav>

        );
    }
}
 
*/

// we use the coede below :  :D 

//const NavBar = (props) =>{ // original 
const NavBar = (props) =>{ // destructuring 

  return (  

    <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Navbar     
      <span className="badge badge-pill badge-secondary">{props.totalCounters} </span>
      </a>
    </div>
  </nav>

);
}


export default NavBar;