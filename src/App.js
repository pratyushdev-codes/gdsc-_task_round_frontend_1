
import './App.css';
import Events from './Components/Events';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <Home/>
      <br/>
      <br/>
      <Events/>
      <Footer/>
    </div>
  );
}

export default App;
