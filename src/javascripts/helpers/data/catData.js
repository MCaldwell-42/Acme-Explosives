import axios from 'axios';

const loadCategories = () => axios.get('../db/categories.json');

// const getCatName = types => new Promise((resolve, reject) => {
//   axios.get('../db/categories')
//     .then((resp) => {
//       const { categories } = resp.data;
//       const typesWithCat = types.map((type) => {
//         const newType = type;
//         const matchingCatName = categories.filter(category => category.id === type.category);
//         newType.categoryName = matchingCatName;
//         return newType;
//       });
//       resolve(typesWithCat);
//     })
//     .catch(err => reject(err));
// });


export default { loadCategories };

// , getCatName
