import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'




class HornedBeast extends React.Component {

    
constructor(props){

    super(props);
    this.state = {
        NumOfSelect : 0
    }

}

increseClick = () => {

            this.setState({

                NumOfSelect:this.state.NumOfSelect + 1
            })
        }


    render() {

        return (
            
            <div class="HornedBeast">
                {/*         
                   <img src={this.props.imgURL} alt='my first one'></img>
                    <h3>{this.props.title}</h3>
                    <p>this.props.description</p> */}

                <Card style={{ width: '18rem' }}>
                    <Card.Img  onClick={this.increseClick} variant="top" src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                        Number of selects❤: {this.state.NumOfSelect}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>



        )

    }



}


export default HornedBeast;