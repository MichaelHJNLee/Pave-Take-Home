import './App.css';
import Navbar from './Navbar';
import Section from './Section';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Section id="1" />
      <Section id="2" />
      <Section id="3" />
      <Section id="4" />
    </div>
  )
}

export default App;
