import 'bootstrap';
import '../styles/main.scss';
import products from './components/products/products';
import types from './components/types/type';


const init = () => {
  products.initProds();
  types.initType();
};

init();
