import './App.css';
import SiteHeader from './Components/SiteHeader';
import SportsHeader from "./Components/SportsHeader";
import VisualizationContainer from './VisualizationContainer';

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <SportsHeader />
      <VisualizationContainer />
    </div>
  );
}

export default App;
