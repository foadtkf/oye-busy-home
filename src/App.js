import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Trending from "./Components/Trending";
import Services from "./Components/Services";
import midimg from './safe.png'
import ProfessionalCleaning from "./Components/ProfessionalCleaning";
import MostUsed from "./Components/MostUsed";
import AssuredPeace from "./Components/AssuredPeace";
import TrendingBrown from "./Components/TrendingBrown";
import HomeApplianes from "./Components/HomeApplianes";
import TryOurTrend from "./Components/TryOurTrend";
import Electricians from "./Components/MoreCards/Electricians";
import Plumbers from "./Components/MoreCards/Plumbers";
import Carpenters from "./Components/MoreCards/Carpenters";
import WhyChooseUs from "./Components/WhyChooseUs";
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
      <TrendingBrown/>
      <HomeApplianes/>
      <TryOurTrend/>
      <Electricians/>
      <Plumbers/>
      <Carpenters/>
      <WhyChooseUs/>
    </div>
  );
}

export default App;
