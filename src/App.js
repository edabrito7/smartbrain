import React , { Component } from 'react';
import Navigation from './Components/Navbar/navigation';
import Logo from './Components/Logo/logo';
import ImageLinkForm from './Components/ImageLinkForm/imagelinkform';
import UserInfo from './Components/UserInfo/user-info';
import Particles from 'react-particles-js';
import './App.css';


const parametros ={
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,  
      }
    }  
  }
}



class App extends Component{
  
    render(){
        return (
            <div className="App">
              <Navigation />
              <Logo />
              <UserInfo/>
              <ImageLinkForm />
              {/*<FaceRecognition / >
              <Sign-Up /> */}
              <Particles params= { parametros } className="Particles" />
            </div>
        );
    };
 
}

export default App;