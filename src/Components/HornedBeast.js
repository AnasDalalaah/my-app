import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            NumOfClick:0
        };
    }
    increseClick =()=>{
        this.setState({
            NumOfClick : this.state.NumOfClick +1
        })
    }

    render(){
        return(
            
                <>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img onClick={this.increseClick} variant="top" src={this.props.imageUrl}/>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                            Number of selects❤: {this.state.NumOfClick}
                            </Card.Text>
                            <Card.Footer>{this.props.description}</Card.Footer>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>              
                </>
            );
        }
    }
    
export default HornedBeast;