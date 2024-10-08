import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {
  return (
    <div className="cartwidget">
     <IoCartOutline className="cart-icon" size={45}/>
     <p>3</p>
    </div>
  )
}

export default CartWidget