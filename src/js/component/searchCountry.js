import getApi from "../getApi";

const searchCountry = () => {
    const searchFild = document.querySelector('.search-input');
    const countriesList = document.querySelector('.countries');


    searchFild.addEventListener('input', (e) => {
        const currentEleValue = "name/" + e.target.value.toLowerCase();
        countriesList.innerHTML = '';
        if(e.target.value) {
            getApi(currentEleValue);
        }
        
        console.log(currentEleValue)
    });
};

export default searchCountry;