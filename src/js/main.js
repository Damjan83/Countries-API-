import getApi from "./getApi";

getApi();

const checkbox = document.getElementById('switchCheckbox');
const wraperModal = document.querySelector('.wraper-modal');
const btnBack = document.querySelector('.btn-back');

/*------Theme switcher------*/ 
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});


btnBack.addEventListener('click' , ()=> {
    wraperModal.style.display = 'none';
});



 
 