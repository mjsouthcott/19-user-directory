import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper'
import Jumbotron from './components/Jumbotron'
import Table from './components/Table'

function App() {
  return (
    <Wrapper>
      <Jumbotron />
      <Table />
    </Wrapper>
  )
}

export default App
