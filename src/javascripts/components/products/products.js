import util from '../../helpers/util';
import productData from '../../helpers/data/productsData';
// import typeData from '../../helpers/data/typesData';


// products = Object.values(response.data.product[0]);  changes the array of objects of objects into a single array of objects or some such shit

const domStringBuilder = (products) => {
  let domString = '';
  domString += '<div class="container row">';
  products.forEach((product) => {
    domString += '<div class="col-3">';
    domString += `<div class="card p-2" id='${product.id}'>`;
    domString += '<div class="card-body">';
    domString += `<h3 class="card-title"> ${product.name} </h3>`;
    domString += `<h5 class="description"> ${product.description} </h5>`;
    // domString += `<h5> Type: ${product.typeName} </h3>`;
    // domString += `<h5> Category: ${product.categoryName} </h3>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('products', domString);
};

const initProds = () => {
  productData.loadProducts()
    .then((resp) => {
      const produce = resp.data.products;
      domStringBuilder(produce);
    })
    .catch(err => console.error('error from initBoards requests', err));
};

export default { initProds };
