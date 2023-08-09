import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Career from "./components/Career";
import ContactMe from "./components/ContactMe";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const options = { duration: 2000 };
  Aos.init(options);
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Career />
      <ContactMe />
    </div>
  );
}

export default App;
