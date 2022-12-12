import React from "react";
import { cartActions } from "../../store/cart-slice";
import { useAppDispatch } from "../Hooks/redux-hooks";
import Item from "../UI/Item";

const CartItem: React.FC<{
  item: {
    id: string;
    title: string;
    image: string;
    quantity: number;
    total: number;
    price: number;
  };
}> = (props) => {
  const dispatch = useAppDispatch();

  const { id, title, quantity, total, price, image } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
        quantity: 1,
        totalPrice: price,
        isWish: false,
      })
    );
  };

  return (
    <Item
      id={id}
      title={title}
      price={price}
      total={total}
      image={image}
      quantity={quantity}
      onAddItem={addItemHandler}
      onRemoveItem={removeItemHandler}
    />
  );
};

export default CartItem;
