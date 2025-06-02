import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "./config";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Loomora Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="mt-2 font-semibold">{product.name}</h2>
            <p className="text-lg font-medium text-gray-700">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;