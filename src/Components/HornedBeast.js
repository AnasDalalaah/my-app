import React from 'react';
class HornedBeast extends React.Component{
    render(){
        return(

            <div>
                <h2> {this.props.title}</h2>
                <img src={this.props.url} alt={this.props.alt}/>
                
                <p> {this.props.pragraph} </p>
            </div>
        );
    }
}

export default HornedBeast;