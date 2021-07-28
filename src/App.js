
import React from "react";
import "./App.css";
import Main from "./Components/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Data from "./Components/assests/data.json";
import SelectedBeast from "./Components/SelectedBeast";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'title',
      imageUrl: 'img',
      description: 'desc',
      modalShow: false,
    };
  }


 apperingData = (title, imageUrl, description,  modalShow) => {
      this.setState({
        title: title,
        imageUrl: imageUrl,
        description: description,
        modalShow:modalShow,
      });
  };

  handleShow =  modalShow =>{
      this.setState({
        modalShow:modalShow
      });
  }


  render(){
    return(
      <>
        <SelectedBeast 
          title={this.state.title}
          imageUrl={this.state.imageUrl}
          description={this.state.description}
          showModal={this.state.modalShow}
          hideN={this.handleShow}

        />
        <Header />
        <Main 
          dataList={Data}
          apperingData={this.apperingData}/>
        <Footer />
      </>
    );
  }
}

export default App;