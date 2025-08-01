import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const isInCart = useSelector(state => state.cart.items.find(item => item.id === plant.id));

  return (
    <div className="border rounded p-4">
      <img src={plant.image} alt={plant.name} className="w-full h-48 object-cover" />
      <h3 className="text-lg font-semibold">{plant.name}</h3>
      <p>${plant.price}</p>
      <button
        className="bg-green-500 text-white px-4 py-2 mt-2 rounded disabled:bg-gray-400"
        disabled={isInCart}
        onClick={() => dispatch(addToCart(plant))}
      >
        {isInCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}
