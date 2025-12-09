import About from "./components/About/About.jsx"
import Navbar from "./components/Navbar/Navbar1.jsx";
import Home from "./components/Home/Home1.jsx"
import Project from "./components/project/project.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="bg-black h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
