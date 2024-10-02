// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ marginTop: '100px' }}>
        <Routes>
          {/* Ruta para el catálogo completo */}
          <Route path="/" element={<ItemListContainer greeting="" />} />
          {/* Ruta para productos filtrados por categoría, usando nombre de la categoría */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          {/* Ruta para el detalle de un producto específico usando id */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
