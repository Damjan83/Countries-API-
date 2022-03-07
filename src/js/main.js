import getApi from "./getApi";
import getRegion from "./component/selectRegion";
import searchCountry from "./component/searchCountry";
import renderData from "./utility/renderList";
import clearDetailPage from "./utility/clearDetailPage";

getApi("all", renderData);
getRegion();
searchCountry();




const checkbox = document.getElementById('switchCheckbox');
const wraperModal = document.querySelector('.wraper-modal');
const btnBack = document.querySelector('.btn-back');
const loader = document.querySelector('.loader');

/*------Theme switcher------*/ 
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});


btnBack.addEventListener('click' , ()=> {
    wraperModal.style.display = 'none';
    loader.style.display = 'flex';
    clearDetailPage();
});



 // Kada se obrisu sva slova da se ponovo ispise lista sa zastavama-
 // Dugme za back da se sredi,-
 // Postaviti kursor za list item, back dugme, select-
 // Napraviti layout za list item 1 do 768, 2 do 992, 3 do 1200, 4 sve preko
 