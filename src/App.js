import Navbar from "./components/navbar";
import Form from "./components/form";
import Hero from './components/hero';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
    </div>
  );
}
