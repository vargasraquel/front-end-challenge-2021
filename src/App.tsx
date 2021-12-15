import './App.css';
import ResponsiveAppBar from './components/Menu';
import DataGridDemo from './components/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar />
        <DataGridDemo />
      </header>
    </div>
  );
}

export default App;
