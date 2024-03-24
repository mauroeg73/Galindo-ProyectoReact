export let products = [
  {
    id: 1,
    title: "remeras oversize",
    price: 7000,
    description: "remeras de algadon super comodas y cancheras",
    img: "https://res.cloudinary.com/dnq8lw29g/image/upload/v1711239013/img-alg2_owx9fu.jpg",
    stock: 10,
    category: "remeras",
  },
  {
    id: 2,
    title: "remeras sublimadas ",
    price: 6000,
    description: "remeras con diseños",
    img: "https://res.cloudinary.com/dnq8lw29g/image/upload/v1711239012/img-subl1_fajivh.jpg",
    stock: 8,
    category: "remeras",
  },
  {
    id: 3,
    title: "gorras",
    price: 10000,
    description: "gorras de exelente calidad",
    img: "https://res.cloudinary.com/dnq8lw29g/image/upload/v1711239005/img-gorra1_lo1hta.jpg",
    stock: 7,
    category: "accesorios",
  },
  {
    id: 4,
    title: "mochilas",
    price: 15000,
    description: "mochilas de gran comidad para tus dias",
    img: "https://res.cloudinary.com/dnq8lw29g/image/upload/v1711239006/img-moch2_khqhx1.jpg",
    stock: 5,
    category: "accesorios",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};
