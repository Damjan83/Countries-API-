import getApi from "../getApi";
import renderData from "../utility/renderList";

const getRegion = () => {
    const regionEle = document.getElementById('regionId');
    const countriesList = document.querySelector('.countries');

    regionEle.addEventListener('change' , (e) => {
        const currentEleValue = e.target.value;
        const newFormatedUrl = "region/" + currentEleValue;
        countriesList.innerHTML = '';
        getApi(newFormatedUrl, renderData);
        console.log(e.target.value);
    });
};

export default getRegion;