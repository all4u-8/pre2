
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchProducts } from '../mocks/products';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '1vh' }}>
        <h2></h2>
        <div className="d-flex justify-content-center">
          <i className="bi bi-arrow-repeat" style={{ fontSize: '50px', animation: 'spin 2s linear infinite' }}></i>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-center">{greeting}</h1>
      {products.length === 0 ? (
        <p>No hay productos en esta categoría.</p>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div className="col-6 col-sm-4 col-md-2 mb-4" key={product.id}>
              <div className="card" style={{ maxWidth: '180px', height: '350px', margin: '0 auto' }}>
                <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '150px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ fontSize: '1rem' }}>{product.name}</h5>
                  <p className="card-text" style={{ fontSize: '0.8rem', flexGrow: 1 }}>{product.description}</p>
                  <p className="card-text" style={{ fontSize: '0.8rem', flexGrow: 1 }}>${product.valor}</p>
                  <Link to={`/item/${product.id}`} className="btn btn-primary mt-auto" style={{ fontSize: '0.9rem' }}>
                    Ver Detalle
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
