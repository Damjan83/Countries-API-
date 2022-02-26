const checkbox = document.getElementById('switchCheckbox');
const countryBox = document.querySelector('.countries__box');
const wraperModal = document.querySelector('.wraper-modal');
const btnBack = document.querySelector('.btn-back');

/*------Theme switcher------*/ 
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

countryBox.addEventListener('click' , () => {
    wraperModal.style.display = 'block';
    console.log('daki')
});

btnBack.addEventListener('click' , ()=> {
    wraperModal.style.display = 'none';
});



 
 