import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Experience from "./Component/Experience/Experience";
import Projects from "./Component/Projects/Projects";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden ">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;