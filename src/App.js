import React , { Component } from 'react';
import Navigation from './Components/Navbar/navigation';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Logo from './Components/Logo/logo';
import ImageLinkForm from './Components/ImageLinkForm/imagelinkform';
import UserInfo from './Components/UserInfo/user-info';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import { parametros, initialState } from './constantes';
import './App.css';





class App extends Component{
  constructor() {
    super();
    this.state = initialState
    }
  
  

loadUser = (data) => {
  this.setState ({User: {
      id: data.id,
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      entries: data.entries,
      joined: data.joined
      }
  })

}



  calculateFaceLocation = (data) => {
    const ClarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const imagen = document.getElementById('inputImagen');
    const width = Number(imagen.width);
    const height = Number(imagen.height);
    
    return {
      leftcol:ClarifaiFace.left_col * width,
      toprow: ClarifaiFace.top_row * height,
      rightcol: (width) - (ClarifaiFace.right_col * width),
      bottomrow: (height) - (ClarifaiFace.bottom_row * height),

    }
  }

  displayFaceBox = (box) => {
    this.setState( {box: box} );
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }


  onErase = () => {
    console.log(this.state.input);
    this.setState({input: ''});
    console.log(this.state.input);
  }


  onSubmit = () => {
    this.setState({imageURL: this.state.input })
    fetch('https://rocky-cove-89609.herokuapp.com/imageurl',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
          })
      })
    .then(response => response.json())        
    .then(response => {
      if(response) {
        fetch('https://rocky-cove-89609.herokuapp.com/image',{
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: this.state.User.id
          })
      })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.User, {entries:count}))
        })



      } /* Cierre del if */
    this.displayFaceBox(this.calculateFaceLocation(response));
    

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
      this.setState(initialState)
    }
    this.setState({route: route });
  }



    render(){
        return (
            <div className="App">
              <Navigation  isSignIn={ this.state.SignedIn }onRouteChange={ this.onRouteChange }  />
              { this.state.route === 'signin' 
              ? <SignIn loadUser={ this.loadUser } isSignIn={ this.state.isSignIn } onRouteChange={ this.onRouteChange }/>
              : (this.state.route === 'register')
              ? <Register loadUser={ this.loadUser } onRouteChange={ this.onRouteChange }/>
              :
               <div>
                  <Logo />
                  <UserInfo 
                  name={ this.state.User.name}
                  entries={ this.state.User.entries}
                  />
                  <ImageLinkForm 
                  inputdata= { this.state.input }
                  onErase={ this.onErase }
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