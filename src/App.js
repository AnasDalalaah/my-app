import React from 'react'
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';
import Data from './components/asessts/data.json';
import SelectedBeast from './components/SelectedBeast';



 

class App extends React.Component{
  constructor (props){
    super(props);
    this.state ={
      title : 'title',
      image_url :'imgu',
      description : 'desc',
      show:false,
    }

  }
  modalActive = (title, imgUrl, description, showMod) => {
    this.setState({ title: title, imgUrl: imgUrl, description: description, showMod: showMod });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  handleHide = () => {
    this.setState({
      show: false,
    });
  }

  render(){
    return(
      <div>
       
        <Header/>
        <SelectedBeast  hideCard={this.handleClose} showCard= {this.state.show}  imageData={this.state.image}  titleData={this.state.title} descriptionData = {this.state.description}/>
        <Main dataList={Data} modalActive={this.modalActive}/>
        <Footer/>
        

      </div>
    );
  }
}

export default App;
