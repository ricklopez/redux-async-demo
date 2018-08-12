import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from './actions/hello.actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  componentDidMount() {
    this.props.getPosts();  
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ 
    getPosts 
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
