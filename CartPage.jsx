import { useSelector, useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, deleteItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-3xl mb-4">Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="flex justify-between items-center border-b py-2">
          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
          <div>{item.name}</div>
          <div>${item.price}</div>
          <div className="flex items-center">
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            <span className="px-2">{item.quantity}</span>
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          </div>
          <button onClick={() => dispatch(deleteItem(item.id))} className="text-red-500">Delete</button>
        </div>
      ))}
      <div className="mt-4 text-xl font-semibold">Total: ${total}</div>
      <button className="mt-4 bg-yellow-400 px-4 py-2 rounded">Checkout (Coming Soon)</button>
      <Link to="/products" className="block mt-4 text-blue-600">Continue Shopping</Link>
    </div>
  );
}
