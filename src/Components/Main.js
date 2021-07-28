import React from 'react';
import HornedBeast from './HornedBeast';
//import HornedBeastData  from './assests/data.json';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component{
    render(){
        return(
            <div>
                
                    <Row xs={1} md={3} className='g-4r'>
                        {
                            this.props.dataList.map(object => {
                                return <HornedBeast
                                            imageUrl={object.image_url}
                                            title={object.title}
                                            description={object.description}
                                            apperingData={this.props.apperingData}
                                        />
                            })
                        }
                    </Row>
                
            </div>
        );
    }
}

export default Main;