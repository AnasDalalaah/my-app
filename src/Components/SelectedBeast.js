import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component{

  EModal = () =>{
    this.props.hideN(false);
  }

  render(){
    return(
      <div>
      <Modal show={this.props.showModal} onHide={this.EModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.imageUrl} alt={this.props.title} style={{width: '100%', height: '17rem'}}/>
          <p>{this.props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.EModal}>
            Close alert
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default SelectedBeast;