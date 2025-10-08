import logo from './logo.svg';
import './App.css';
import Stylesheet from './components/Stylesheet';
import axios from 'axios';

function App() {
  const getMovie = () =>{
    axios.get().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="App">
      <Stylesheet/> 
      <button onClick={getMovie}>Get Movie</button>
    </div>


  );
}

export default App;
