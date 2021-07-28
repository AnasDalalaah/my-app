import React from 'react';
import HornedBeast from './HornedBeast';
//import HornedBeastData  from './assests/data.json';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            NumFilterofHorns: -1,
        }
    }
   UpdateList = (event) => {
        event.preventDefault();
        this.setState({
            NumFilterofHorns: parseInt(event.target.value)
        })
    }
    
    render(){
        return(
            <div>
                <Form>
          <Form.Group >
            <Form.Label>Filter Number of Horns</Form.Label>
            <Form.Control onChange={this.UpdateList}  as="select"  >
              <option value='-1'>All Horns</option>
              <option value='1'>One Horn</option>
              <option value='2'>Two Horns</option>
              <option value='3'>Three Horns</option>
              <option value='100'>One Hundred Horns</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Row xs={1} md={3} className='g-4r'>
                        {
                            this.props.dataList.filter(item => {
                                if (this.state.NumFilterofHorns === -1)
                                return true;
                            else
                                return this.state.NumFilterofHorns === item.horns
                        }).map(object => {
                            return (
                                <HornedBeast
                                            imageUrl={object.image_url}
                                            title={object.title}
                                            description={object.description}
                                            apperingData={this.props.apperingData}
                                        />
                        )})
                        }
                    </Row>
                
            </div>
        );
    }
}

export default Main;