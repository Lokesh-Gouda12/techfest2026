import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import Countdown from "./components/Countdown";
import EventCards from "./components/EventCards";
//import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <>
       {/*<Navbar /> */}
      <Canvas camera={{ position: [0, 12, 40], fov: 75 }}>
        <Scene />
      </Canvas>
     
      
      <div className="overlay">
        <div className="tech-logo">
          🤖
        </div>
        <h1>TECHFEST 2026</h1>
        <div className="future-tag">
          FUTURE IS NOW
          </div>

        <p> Artificial Intelligence • Robotics • Innovation</p>

        <button className="register-btn">
          Register Now
        </button>

        {/* Stats Section */}
        <div className="stats">
          <div>50+ Events</div>
          <div>5000+ Participants</div>
          <div>₹1 Lakh Prize Pool</div>
        </div>
      </div>

      <Countdown />
      <EventCards />
      <Footer />
    </>
  );
}

export default App;