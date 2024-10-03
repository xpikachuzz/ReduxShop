import "./ProductCard.css";
import { add, remove } from "../store/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const { id, name, price, image } = product;
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false)
  const cart = useSelector((state) => state.cartState.cartList);

  useEffect(() => {
    const isInCart = cart.reduce((acc, item) => (item.id === id) || acc, false)
    setIsInCart(isInCart)
  }, [id, cart])


  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {
          isInCart ? (
            <button className="remove" onClick={() => dispatch(remove(product))}>Remove</button>
          ) : (
            <button onClick={() => dispatch(add(product))}>Add To Cart</button>
          )
        }
      </div>
    </div>
  )
}
