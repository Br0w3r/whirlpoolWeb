import './App.css';
import Header from './components/header/header';
import SingleAppBar from './components/appBar/appBar';


function App() {
  return (
    <div className="App">
      <div className='container-header'>
        <Header />
        <SingleAppBar />
      </div>
    </div>
  );
}

export default App;
