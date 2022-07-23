import logo from './logo.svg';
import './App.css';
import Banner from "./components//Banner.jsx"
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
