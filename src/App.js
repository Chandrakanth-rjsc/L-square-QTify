// import logo from './logo.svg';
import './App.css';
// import Button from "./components/Button/Button";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      {/* <Search placeholder={"Search a album of your choice"}/>
      <Button>
        Give Feedback
      </Button> */}
      <Navbar searchData={""}/>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
