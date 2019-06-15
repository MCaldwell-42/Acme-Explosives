import axios from 'axios';

const loadProducts = () => axios.get('../db/products.json');

const getProductsForEachType = types => new Promise((resolve, reject) => {
  console.error(types);
  axios.get('../db/products.json')
    .then((response) => {
      const { products } = response.data;
      const productsWithTypes = products.map((product) => {
        const arrayObjects = Object.values(product);
        const array = arrayObjects[0];
        const newProduct = array;
        const matchingTypes = types.filter(type => type.id === array.type);
        const catNames = matchingTypes[0].categoryName;
        const typeName = matchingTypes[0].name;
        newProduct.catNames = catNames;
        newProduct.typeName = typeName;
        return newProduct;
      });
      console.error(productsWithTypes);
      resolve(productsWithTypes);
    })
    .catch(err => reject(err));
});

export default { getProductsForEachType, loadProducts };
