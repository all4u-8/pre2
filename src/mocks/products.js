// src/mocks/products.js

const products = [
    /*telefonos*/
    {
        id: 1,
        name: 'iPhone 15',
        category: 'telefonos',
        description: 'iPhone 15 5G',
        valor:85000,
        image: 'https://all4u-8.github.io/coder/img/i15.jpeg', // URL de la imagen
      },
      {
        id: 2,
        name: 'iPhone 16',
        category: 'telefonos',
        description: 'iPhone 16 PRO',
        valor:95000,
        image: 'https://all4u-8.github.io/coder/img/i16.jpeg', // URL de la imagen
      },
      {
        id: 3,
        name: 'iPhone 16H',
        category: 'telefonos',
        description: 'iPhone 16H',
        valor:85000,
        image: 'https://all4u-8.github.io/coder/img/i16h.jpeg', // URL de la imagen
      },
    {
      id: 4,
      name: 'Samsung A54',
      category: 'telefonos',
      description: 'Samsung A54 5G',
      valor:85000,
      image: 'https://all4u-8.github.io/coder/img/samsunga54.jpeg', // URL de la imagen
    },
    {
      id: 5,
      name: 'Xiaomi 12C',
      category: 'telefonos',
      description: 'Xiaomi 12C 5G 128GB.',
      valor:75000,
      image: 'https://all4u-8.github.io/coder/img/xiomi12c.jpeg', // URL de la imagen
    },
/*computadores*/

{
    id: 6,
    name: 'EliteBook G1',
    category: 'computadores',
    description: 'EliteBook G1|8GB RAM, 1TB',
    valor:1425000,
    image: 'https://all4u-8.github.io/coder/img/ELITEBOOK-G1.jpg', // URL de la imagen
  },
  {
    id: 7,
    name: 'MacBook air',
    category: 'computadores',
    description: 'MacBook air|8GB RAM, 512GB.',
    valor:7585000,
    image: 'https://all4u-8.github.io/coder/img/MACBOOK%20AIR.jpg', // URL de la imagen
  },
  {
    id: 8,
    name: 'PROBOOCK440',
    category: 'computadores',
    description: 'PROBOOCK440|8GB RAM, 512GB',
    valor:6955000,
    image: 'https://all4u-8.github.io/coder/img/PROBOOCK440.jpeg', // URL de la imagen
  },
  {
    id: 9,
    name: 'PROBOOCK450',
    category: 'computadores',
    description: 'PROBOOCK450|8GB RAM, 512GB',
    valor:1695000,
    image: 'https://all4u-8.github.io/coder/img/PROBOOCK450.jpg', // URL de la imagen
  },
  {
    id: 10,
    name: 'PROBOOK430',
    category: 'computadores',
    description: 'PROBOOK430|8GB RAM, 512GB.',
    valor:1525000,
    image: 'https://all4u-8.github.io/coder/img/PROBOOK430.jpeg', // URL de la imagen
  },
/*perifericos*/

{
    id: 11,
    name: 'CORSAIRK70',
    category: 'perifericos',
    description: 'TECLADO GAMING CORSAIRK70',
    valor:7100,
    image: 'https://all4u-8.github.io/coder/img/CORSAIRK70.jpeg', // URL de la imagen
  },
  {
    id: 12,
    name: 'FORTREKG',
    category: 'perifericos',
    description: 'TECLADO GAMING CORSAIRK70',
    valor:4300,
    image: 'https://all4u-8.github.io/coder/img/FORTREKG.jpg', // URL de la imagen
  },
  {
    id: 13,
    name: 'HYPERX',
    category: 'perifericos',
    description: 'TECLADO GAMING CORSAIRK70',
    valor:8600,
    image: 'https://all4u-8.github.io/coder/img/HYPERX.png', // URL de la imagen
  },
  {
    id: 14,
    name: 'MGEVK2G',
    category: 'perifericos',
    description: 'TECLADO GAMING MGEVK2G',
    valor:6500,
    image: 'https://all4u-8.github.io/coder/img/MGEVK2G.jpg', // URL de la imagen
  },
  {
    id: 15,
    name: 'RedDragon F23',
    category: 'perifericos',
    description: `TECLADO GAMING RedDragon F23`,
    valor:5000,
    image: 'https://all4u-8.github.io/coder/img/REDDRAGON.webp', // URL de la imagen
  },

  ];
  
  // Simular fetch de todos los productos o por categoría
  export const fetchProducts = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(products.filter((product) => product.category === categoryId));
        } else {
          resolve(products);
        }
      }, 1000); // Simulamos un retraso de 1 segundo
    });
  };
  
  // Simular fetch de un producto por id
  export const fetchProductById = (itemId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((product) => product.id === parseInt(itemId)));
      }, 1000); // Simulamos un retraso de 1 segundo
    });
  };
  