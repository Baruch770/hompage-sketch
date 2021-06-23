import './App.css';
import NavBar from "./component/navbar/NavBar";
import Banner from "./component/banner/Banner";
import SearchBox from "./component/searchBox/SearchBox";
import Instruction from "./component/instruction/Instruction";
import Suggestions from "./component/suggestion/Suggestions";
import ViewEvent from './component/viewEvent/ViewEvent';
import BookedHouses from './component/booked/BookedHouses';
import Footer from './component/footer/Footer';




function App() {
  return (
    <>
    <NavBar/>
    <Banner/>
    <SearchBox />
    <Instruction />
    <Suggestions/>
    <ViewEvent />
    <BookedHouses />
    <Footer />
    {/* <Coin text="סדנאות והרצאות" img={imgTemp} /> */}
   </>
  );
}

export default App;
