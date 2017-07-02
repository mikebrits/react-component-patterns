import React, { Component } from 'react';
import './App.css';
import MyButton from './components/MyButton'
import styled from 'styled-components';
class App extends Component {


  render() {

      const AppWrapper = styled.div`
        background-color : papayawhip;
        height : 100vh;
        display : flex;
        align-items : center;
        justify-content : center;
    `;

    return (
      <AppWrapper>
        <MyButton primary/>
      </AppWrapper>
    );
  }
}

export default App;
