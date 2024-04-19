import "./App.css"
import Header from "./layouts/header/header";
import Marqee from "./layouts/marqee/marqee";
import MilkSection from "./layouts/milk-section/milkSection";
import Nav from "./layouts/navbar/nav";
import gsap, { ScrollTrigger } from "gsap/all"
import "./utility.css"
import VanSection from "./layouts/vanSection/vanSection";
import SlideCard from "./layouts/slide-card/slideCard";
import CouponSection from "./layouts/couponSection/couponSection";
import SunSection from "./layouts/sunSection/sunSection";
import CowCustomize from "./layouts/cowCustomize/cowCustomize";

gsap.registerPlugin(ScrollTrigger)

function App() {

  return (
    <div className="App">
      <Nav/>
      <div style={{height:"80px"}} ></div>
      <Header/>
      <Marqee/>
      <MilkSection/>
      <VanSection/> 
      <SlideCard/>
      <CouponSection/>
      <SunSection/>
      <CowCustomize/>
    </div>
  );
}

export default App;
