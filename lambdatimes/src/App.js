import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from './components/Login';
import withAuthenticate from './components/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(Content)(Login);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedOut: false
    }
  }
  logOut = () => {    
    this.setState({
      loggedOut: true
    })    
  }
  render() {
    return (
      <div className="App">
        <TopBar logOut={this.logOut}/>
        <Header />
        <ComponentFromWithAuthenticate />
      </div>
    );
    }
}

export default App;
