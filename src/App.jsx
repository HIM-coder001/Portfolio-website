// React import not required with Vite's JSX transform
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import ScrollAnimation from "./Animations/ScrollAnimation";


const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>

      <ScrollAnimation>
        <About />
      </ScrollAnimation>

      <ScrollAnimation>
        <Services />
      </ScrollAnimation>

      <ScrollAnimation>
        <MyWork />
      </ScrollAnimation>

      <ScrollAnimation>
        <Contact />
      </ScrollAnimation>

      <Footer />
    </div>
  );
};

export default App;
