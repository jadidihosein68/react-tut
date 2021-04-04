import React, { Component } from 'react';   


// input : Liked : boolean 
// output : onClick 


const Like = (props) => {
    let classes ="fa fa-heart";

    if(!props.liked)
    classes +='-o';

    return (<i className ={classes} style={{cursor:'pointer'}} aria-hidden="true" onClick={props.onClick} ></i> );

}
 
export default Like;


/*
class Like extends Component {
    render() { 
        let classes ="fa fa-heart";

        if(!this.props.liked)
        classes +='-o';

        return (<i className ={classes} style={{cursor:'pointer'}} aria-hidden="true" onClick={this.props.onClick} ></i> );

    }
}
 
export default Like;

*/