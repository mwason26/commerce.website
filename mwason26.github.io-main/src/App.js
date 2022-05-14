import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sell from './components/Sell/Sell';
import MarketPlace from './components/MarketPlace/MarketPlace';
import Community from './components/Community/community';



function App() {
  return (

    <div className="App">
      <div>
      
      <Header/>
      <br/>
      
      <Sell/>
      <hr/>
      <MarketPlace/>
      <hr/>
      <Community/>
      
      </div>
    </div>
  );
}

export default App;
