import CartWidget from './CartWidget'
import "./css/NavBar.css"

const NavBar = () => {
  return (
   <nav className='navbar'>
    <div className='branding'>
     <h2>SLinda</h2>
    </div>

    <ul>
     <li>Electrónica</li>
     <li>Hogar</li>
     <li>Servicios</li>
    </ul>

    <CartWidget/>
   </nav>
  )
}

export default NavBar