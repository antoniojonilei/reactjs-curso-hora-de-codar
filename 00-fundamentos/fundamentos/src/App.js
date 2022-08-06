//components
import FisrtComponent from "./components/FirstComponent"
import TemplateExpressions from "./components/TemplateExpredssions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";


//style/ CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FisrtComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;