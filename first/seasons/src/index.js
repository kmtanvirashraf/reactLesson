import React from 'react';
import reactDom from 'react-dom';
import SeasonDispaly from './SeasonDisplay';

class App extends React.Component{

  //State
  state={lat:null,errormassage:''};

  //componentDidMount==
  componentDidMount() {
    //Geolocation.Visar vart man ar i varden
    window.navigator.geolocation.getCurrentPosition(pos=>
      this.setState({lat:pos.coords.latitude}),
      err=> {this.setState({errorMessage: err.message})}
    );
  }
  

  render(){
    if(this.state.errormassage && !this.state.lat)
    {
      return <div>Error : {this.state.errormassage}</div>
    }
    if(!this.state.errormassage && this.state.lat){
     return <SeasonDispaly lat={this.state.lat}/>
    }

    return<div><h3> loading !!!!</h3></div>
  }
}
reactDom.render(
  <App />,
  document.querySelector('#root')
)

