// import logo from "./logo.svg";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text-Utils"/>
      <div className="container my-3">
      <TextForm Heading = "Enter your Text To Analyse"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
