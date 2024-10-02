
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../mocks/products';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProductById(id)
      .then((response) => {
        setProduct(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return       <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '1vh' }}>
    <h2></h2>
    <div className="d-flex justify-content-center">
      <i className="bi bi-arrow-repeat" style={{ fontSize: '50px', animation: 'spin 2s linear infinite' }}></i>
    </div>
  </div>;
  }

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '200px', marginBottom: '20px' }} />
      <p>{product.description}</p>
      <p><strong>Categoría:</strong> {product.category}</p>
      <h2>$ {product.valor}</h2>
    </div>
  );
};

export default ItemDetailContainer;
