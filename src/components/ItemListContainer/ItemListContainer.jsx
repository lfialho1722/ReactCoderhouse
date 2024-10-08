/* eslint-disable react/prop-types */
import "../css/ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
  return (
    <div className="greeting">
        {greeting}
    </div>
  )
}

export default ItemListContainer