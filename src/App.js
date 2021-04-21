import MainAppComponent from './components/MainAppComponent';
import SideNav from './components/SideNav.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <SideNav />
        <MainAppComponent />
      </div>
    </div>
  );
}

export default App;