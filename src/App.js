import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <header className="App-background">
        <Header/> 
      </header> 

      <footer>   
         <Footer /> 
      </footer> 
    </div>
  );
}

export default App;