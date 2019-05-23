import util from '../../helpers/util';
import productData from '../../helpers/data/productsData';
import categoryData from '../../helpers/data/catData';
import typeData from '../../helpers/data/typesData';



const domStringBuilder = (products) => {
  let domString = '';
  domString += '<div class="container row card-group">';
  products.forEach((product) => {
    domString += '<div class="col-3">';
    domString += `<div class="card p-2" id='${product.id}'>`;
    domString += '<div class="card-body">';
    domString += `<h3 class="card-title"> ${product.name} </h3>`;
    domString += `<h5 class="description"> ${product.description} </h5>`;
    domString += `<h5> Type: ${product.typeName} </h3>`;
    domString += `<h5> Category: ${product.catNames} </h3>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('products', domString);
};

const initProds = () => {
  categoryData.loadCategories()
    .then(response => typeData.getTypesForEachCategory(response.data.categories))
    .then(response => productData.getProductsForEachType(response))
    .then(response => domStringBuilder(response))
    .catch(err => console.error(err));
};

export default { initProds };
