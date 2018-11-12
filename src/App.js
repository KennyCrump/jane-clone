import React, { Component } from 'react';
import Nav from './Components/Nav'
import './App.css';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Nav />
      </AppWrapper>
    );
  }
}

export default App;


const AppWrapper = styled.div`
  text-align: left;
`
const AppHeader = styled.header`
  background-color: #233455;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: blue;
`
