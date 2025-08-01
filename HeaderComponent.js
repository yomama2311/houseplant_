import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cartQty = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/products" className="text-2xl font-bold text-green-600">Green Haven</Link>
      <nav className="space-x-4">
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 ({cartQty})</Link>
      </nav>
    </header>
  );
}
