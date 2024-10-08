import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className='container-app'>
      <NavBar/>
      <ItemListContainer greeting={"Les presento mi primer Ecommerce"} />
    </div>
  )
}

export default App
