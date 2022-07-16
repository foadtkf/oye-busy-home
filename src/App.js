import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Trending from "./Components/Trending";
import Services from "./Components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Trending/>
      <Services/>
    </div>
  );
}

export default App;
