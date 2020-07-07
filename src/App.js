import React, { Component } from 'react';
import Login from './components/Password';
import './App.css';

class App extends Component {

  state = {
    password:"",
    passwordClass:['red','red','red']
  }

  onPasswordChange = (event) =>{
      const password = event.target.value;
      this.setState({password:password});
      console.log(this.state.password);
  }

  render(){
    const classes = ['red','red','red'];

    if(this.state.password.length>=8){
      classes[0]='green';
    }

    var regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(regex.test(this.state.password)){
      classes[1]='green';
    }
     
    const passwordCharArray = this.state.password.split("");
    passwordCharArray.map(char=>{
      if(char === char.toUpperCase()&&!regex.test(char)){
        return classes[2] = 'green';
      }
    })
    
    console.log(classes);
    return (
      <div className="App">
        <Login onChange={this.onPasswordChange} classes={classes}/>
      </div>
    );
  }
}

export default App;
