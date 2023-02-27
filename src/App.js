//CSS Import
import "./App.css";

//Modul import
import { BrowserRouter } from "react-router-dom";

//Components import
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* //Navigation */}
        <Navbar />
        {/* //Routing im Main */}
        <Main />
        {/* //Footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
