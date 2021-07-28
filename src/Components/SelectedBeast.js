import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'

import Button from 'react-bootstrap/Button'

class SelectedBeast extends React.Component {

    eModal = () =>{
        this.props.hidden(false)
    }
render(){
    return(
        <div>
             <Modal show={this.props.showModal} onHide={this.eModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            src={this.props.image_url}
                            alt={this.props.title}
                        />
                        <p>{this.props.description}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.eModal}>
                            Close Modal
                        </Button>
                        
                    </Modal.Footer>
                </Modal>
        </div>
    );
}
}
export default SelectedBeast;

