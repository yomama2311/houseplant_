import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('/assets/images/bg.jpg')" }}>
      <h1 className="text-5xl text-white font-bold mb-6">Green Haven</h1>
      <p className="text-xl text-white mb-8">Your favorite destination for beautiful houseplants</p>
      <Link to="/products" className="bg-green-500 px-6 py-3 text-white rounded hover:bg-green-600">Get Started</Link>
    </div>
  );
}
