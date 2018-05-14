import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import './App.css';

// Setting up the facial recognition API (declaring API key key)
const app = new Clarifai.App({
  apiKey: 'bf9e37fb720c4294899a37e8b7b6c337'
});

//particles class. Basically the design going on in the background
//it's a program that was obtained through npm
const particlesOptions = {
  particles: {
      number: {
        value: 30,
        density: {
          enable: true, 
          value_area: 800
        }
      }
    }
}

//This is the primary class of the entire application
//Basically the "parent" in the react hierarchy
//State elements so far are the input received from the user
//and then the imageUrl which is used in association with the Clarifai API
class App extends Component {
  constructor() {
    super();  //must be called since "App" is a sub class of the react class "component" Also needed to use the keyword "this"
    this.state = {
      input: '',
      imageUrl: '', 
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

//Function that sets the input state to the value that the user inputted
  onInputChange = (event) => {
      this.setState({input: event.target.value});
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
  }

//Once the "submit" button is pressed, the imageUrl state becomes whatever the input state was
//Then, the API will call the Clarifai facial recognition feature and log the result to the console
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    // do something with response
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))  
    //so you call the calculate face location which gets the bounds of the box
   //then, you pass that facebox into the displayFaceBox function which so far only updates the application's "box" state to the facebox bounds of the current image


    //if there is an error, then catch and write error info to console
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

//The below renders all components to the screen (code to do this can be found in "index.js")
  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
       <Particles className='particles' 
              params={particlesOptions}
            />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home' 
          ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/> 
              <FaceRecognition box={box} imageUrl={imageUrl} />
            </div>
          : (
              route === 'signin' 
              ? <Signin onRouteChange={this.onRouteChange} />
              : <Register onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}

export default App;
