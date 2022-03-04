import getApi from "./getApi";
import getRegion from "./component/selectRegion";
import searchCountry from "./component/searchCountry";

getApi("all");
getRegion();
searchCountry();

const checkbox = document.getElementById('switchCheckbox');
const wraperModal = document.querySelector('.wraper-modal');
const btnBack = document.querySelector('.btn-back');
const countries = document.querySelector('.countries');

/*------Theme switcher------*/ 
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

countries.addEventListener('click', () => {
    wraperModal.style.display = 'block'
})

btnBack.addEventListener('click' , ()=> {
    wraperModal.style.display = 'none';
});



 
 