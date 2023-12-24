// import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
// import Button from "./components/Button/Button";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar searchData={""}/>
      <Hero/>
      {/* <Search placeholder={"Search a album of your choice"}/>
      <Button>
        Give Feedback
      </Button> */}
    </>
  );
}

export default App;
