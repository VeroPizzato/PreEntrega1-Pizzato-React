import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';

function App() {

  return ( 
    <div className="contenedor">
      <Navbar />
      <ItemListContainer greeting= {"Proximamente Productos!!"}/>
    </div> 
  )
}

export default App
