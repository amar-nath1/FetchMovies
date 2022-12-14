
import './App.css';
import FetchMovies from './Components/FetchMovies';
import Loader from './Components/Loader';
import React,{useState} from 'react'

function App() {

  const [loading, setLoading]=useState(false)

  const loaderHandler=(TorF)=>{

    setLoading(TorF)
  }

  return (
    <div className="App">

      
      <FetchMovies loaderHandler={loaderHandler}></FetchMovies>
      {loading && <Loader></Loader>}
    </div>
  );
}

export default App;
