// Import useState and useEffect hooks from React
import React, { useState, useEffect } from 'react'

// Import the API category from AWS Amplify
import { API } from 'aws-amplify'
import './App.css';
import logo from './logo.svg';
import './App.css';

const App = () => {
  // Create coins variable and set to empty array
  
  const [coins, updateCoins] = useState([]);

  // Define function to all API

  // Update fetchCoins function to use limit and start properties
  const fetchCoins = async () => {

    updateLoading(true);

    const { limit, start } = input
    const data = await API.get('api9bc74a79', `/coins?limit=${limit}&start=${start}`);
    updateCoins(data.coins);

    updateLoading(false);
  }

  // Call fetchCoins function when component loads
  useEffect(() => {
    fetchCoins()
  }, [])


  // Create additional state to hold user input for limit and start properties
  const [input, updateInput] = useState({ limit: 5, start: 0 });

// Create a new function to allow users to update the input values
  const updateInputValues = (type, value) => {
    updateInput({ ...input, [type]: value });
};

const [loading, updateLoading] = useState(true);

  return (
    <div className="App">

      {/* // Add input fields to the UI for user input */}
      <input
        placeholder="starting index"
        onChange={e => updateInputValues('start', e.target.value)}
      />

      <input
        onChange={e => updateInputValues('limit', e.target.value)}
        placeholder="Enter a Limit"
      />

      {/* // Add button to the UI to give user the option to call the API */}
      <button onClick={fetchCoins}>Fetch Coins</button>


      {loading && <h2>Loading...</h2>}
      {

        coins.map((coin, index) => (
          !loading &&
          <div key={index}>
            <h2>{coin.name} - {coin.symbol}</h2>
            <h5>${coin.price_usd}</h5>
          </div>
        ))
      }
    </div>
  );
}

export default App;
