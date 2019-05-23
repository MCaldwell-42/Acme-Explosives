import typeData from '../../helpers/data/typesData';
import catData from '../../helpers/data/catData';

const initType = () => {
  typeData.loadTypes()
    .then(resp => catData.getCatName(resp.data.types))
    .then((typesWithCat) => {
      console.error(typesWithCat);
    })
    .catch(err => console.error('error from types', err));
};

export default { initType };
