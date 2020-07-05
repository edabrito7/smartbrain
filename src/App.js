import React , { Component } from 'react';
import Clarifai  from'clarifai';
import Navigation from './Components/Navbar/navigation';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Logo from './Components/Logo/logo';
import ImageLinkForm from './Components/ImageLinkForm/imagelinkform';
import UserInfo from './Components/UserInfo/user-info';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
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



const app = new Clarifai.App({
 apiKey: '63abd16aa5be4144a4b99764c58f46ff'
});

class App extends Component{
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: 'signin',
      SignedIn: false
    }
  }
  

  calculateFaceLocation = (data) => {
    const ClarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const imagen = document.getElementById('inputImagen');
    const width = Number(imagen.width);
    const height = Number(imagen.height);
    console.log(width, height);
    
    return {
      leftcol:ClarifaiFace.left_col * width,
      toprow: ClarifaiFace.top_row * height,
      rightcol: (width) - (ClarifaiFace.right_col * width),
      bottomrow: (height) - (ClarifaiFace.bottom_row * height),

    }
  }

  displayFaceBox = (box) => {
    this.setState( {box: box} );
    console.log(this.state.box);
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = () => {
    this.setState({imageURL: this.state.input })
    app.models.predict("a403429f2ddf4b49b307e318f00e528b",  this.state.input )
    .then(response => {
    this.displayFaceBox(this.calculateFaceLocation(response));
    
      /*console.log(response.outputs[0].data.regions[0].region_info.bounding_box);*/
    })
    .catch(error =>{
      console.log(error);
    }
  );
  }


  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({SignedIn: true})
    } else {
      this.setState({SignedIn: false})
    }
    this.setState({route: route });
  }



    render(){
        return (
            <div className="App">
              <Navigation  isSignIn={ this.state.SignedIn }onRouteChange={ this.onRouteChange }  />
              { this.state.route === 'signin' 
              ? <SignIn isSignIn={ this.state.isSignIn } onRouteChange={ this.onRouteChange }/>
              : (this.state.route === 'register')
              ? <Register onRouteChange={ this.onRouteChange }/>
              :
               <div>
                  <Logo />
                  <UserInfo/>
                  <ImageLinkForm 
                  onInputChange={ this.onInputChange } 
                  onSubmit= { this.onSubmit }/>
                  <FaceRecognition box={ this.state.box } imageURL={ this.state.imageURL }/ >
                  {/*<Sign-Up /> */}
                  
                </div> 

              }
              <Particles params= { parametros } className="Particles" />
            </div>
        );
    };
 
}

export default App;