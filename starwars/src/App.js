import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY } from './components/Constants'
import './App.css';
import axios from 'axios'
import Main from './components/Main'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [ data, setData ] = useState([])

useEffect(() => {
  axios.get(`${BASE_URL}${API_KEY}`)
  .then(res => {
    console.log(res.data)
    setData(res.data.results)
  })
  .catch(err => {
    console.log(err, 'oops')
  })
}, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map(data => {
        return <Main data={data}/>
        // console.log(name)
      })
      }
    </div>
  );
}

export default App;
