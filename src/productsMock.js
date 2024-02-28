export let products = [
  {
    id: 1,
    title: "remeras oversize",
    price: 7000,
    description: "remeras de algadon super comodas y cancheras",
    img: "img/img-alg1.jpg",
    stock: 10,
    category: "remeras",
  },
  {
    id: 2,
    title: "remeras sublimadas ",
    price: 6000,
    description: "remeras con diseños",
    img: "img/img-subl1.jpg",
    stock: 8,
    category: "remeras",
  },
  {
    id: 3,
    title: "gorras",
    price: 10000,
    description: "gorras de exelente calidad",
    img: "img/img-gorra1.jpg",
    stock: 7,
    category: "accesorios",
  },
  {
    id: 4,
    title: "mochilas",
    price: 15000,
    description: "mochilas de gran comidad para tus dias",
    img: "img/img-moch1.jpg",
    stock: 5,
    category: "accesorios",
  },
];

// export const getProducts = () =>{
//     return new Promise ((resolve, reject) =>{
//         if (products.lenght > o){
//             setTimeout(() => {
//                 resolve (products);
//             }, 2000);
//         } else {
//             reject ("no se encontraron productos");
//         }
//         });
//     };

//     )
// }
