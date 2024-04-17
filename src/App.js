import logo from './logo.jpeg';
import './App.css';
import { Link } from "react-router-dom"
function App() {
  const home = () => {
    document.getElementById("futurefeed").innerHTML = "This will be a feed in the future";
  }
  const about = () => {
    document.getElementById("futurefeed").innerHTML = "This will be about us";
  }
  const Games = () => {
    document.getElementById("futurefeed").innerHTML = "Here is where our Games will be displayed";
  }
  const Career = () => {
    document.getElementById("futurefeed").innerHTML = "Jobs will be listed here";
  }
  return (
    <div>
    <header className="App">
      <img src={logo} className="Logo" alt='Logo' />
      <div id='home'>
      <Link onClick={home} className='Home'>Home</Link>
      <Link onClick={Games} className='Games'>Games</Link>
      <Link onClick={Career} className='Career'>Career</Link>
      <Link onClick={about} className='About'>About Us</Link>
      </div>
      

    </header>
    <div id='test'> <p id='futurefeed'>This will be a feed in the future</p></div>
    </div>
  );
}

export default App;
