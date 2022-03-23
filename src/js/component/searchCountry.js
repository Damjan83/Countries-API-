import getApi from "../getApi";
import renderData from "../utility/renderList";

const searchCountry = () => {
    const searchFild = document.querySelector('.search-input');
    const countriesList = document.querySelector('.countries');

    searchFild.addEventListener('input', (e) => {
        const currentEleValue = "name/" + e.target.value.toLowerCase();
        countriesList.innerHTML = '';

        if(e.target.value) {
            getApi(currentEleValue, renderData);
        }

        if(e.target.value == '') {
            getApi("all", renderData);
          
        }
    });
};

export default searchCountry;