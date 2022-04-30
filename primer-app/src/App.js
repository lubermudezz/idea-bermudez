import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/container/ItemListContainer';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <>
     <NavBar/>
    
     <h1>MINECRAFT BY JOCKEREL</h1>
     
     <ItemListContainer name="ItemListContainer"/>

    </>
  );
}

export default App;
