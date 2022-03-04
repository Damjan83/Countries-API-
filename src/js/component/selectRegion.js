import getApi from "../getApi";

const getRegion = () => {
    const regionEle = document.getElementById('regionId');
    const countriesList = document.querySelector('.countries');

    regionEle.addEventListener('change' , (e) => {
        const currentEleValue = e.target.value;
        const newFormatedUrl = "region/" + currentEleValue;
        countriesList.innerHTML = '';
        getApi(newFormatedUrl);
        console.log(e.target.value);
    });

};

export default getRegion;