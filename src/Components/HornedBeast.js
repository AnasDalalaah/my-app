import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            NumOfSelect : 0
        };
    }

    increseClick  = () =>{
        this.setState({
            NumOfSelect: this.state.NumOfSelect + 1
        })
    }

    dataToModal = () => {
        this.props.apperingData(
            this.props.title, 
            this.props.imageUrl,
             this.props.description, 
             true);
    }

    render(){
        return(
            <div class="HornedBeast">
             
                    <Card 
                        style={{ width: '18rem' }}
                        onClick={this.increseClick}
                        >
                        <Card.Img 
                            onClick={this.dataToModal}
                            variant="top" 
                            src={this.props.imageUrl} 
                        />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                            Number of selects❤: {this.state.NumOfSelect}
                            </Card.Text>
                            <Card.Footer>{this.props.description}</Card.Footer>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>      
                 
            </div>
        );
    }
}

export default HornedBeasts;