import logo from './logo.svg';
import './App.css';
import Map, {Marker} from "react-map-gl"

function App() {
  return (
    <div className="App">
      <h1>Mapbox</h1>
      <Map
      mapboxAccessToken="pk.eyJ1Ijoic2FtZWVoc3VoYWlsIiwiYSI6ImNsYXltY3YwMjEwZWwzbm44NWNrZDFuNHIifQ.TxMGHqwzrfCJ81W-H0xI5w"
      style={{
        width:"500px",
        height:"500px",
        borderRadius:"15px",
        borer:'2px solid red'
      }}
    </div>
  );
}

export default App;
