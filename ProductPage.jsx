import PlantCard from '../components/PlantCard';
import plants from '../data/plants'; // hardcoded list of 6 plants

export default function ProductPage() {
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      {categories.map(cat => (
        <div key={cat}>
          <h2 className="text-2xl font-bold m-4">{cat}</h2>
          <div className="grid grid-cols-3 gap-4 m-4">
            {plants.filter(p => p.category === cat).map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
