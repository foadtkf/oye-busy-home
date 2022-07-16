import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Trending from "./Components/Trending";
import Services from "./Components/Services";
import midimg from './safe.png'
import ProfessionalCleaning from "./Components/ProfessionalCleaning";
import MostUsed from "./Components/MostUsed";
import AssuredPeace from "./Components/AssuredPeace";
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Trending/>
      <Services/>
      <img src={midimg} alt="trending item" className="rounded-xl mx-auto mt-20" />
      <ProfessionalCleaning/>
      <MostUsed/>
      <AssuredPeace/>
    </div>
  );
}

export default App;
