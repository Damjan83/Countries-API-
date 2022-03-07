import populateDetailPage from "./populateDetailPage";

const renderData = (data) => {
    const countriesList = document.querySelector('.countries');
    const wraperModal = document.querySelector('.wraper-modal');
    const loader = document.querySelector('.loader');

    for(let i = 0; i < data.length; i++) {
        if(data[i]) {
            const countriesListItem = document.createElement('li');
            countriesListItem.classList.add('countries__box');
            countriesListItem.setAttribute('id', data[i].name.official.toLowerCase());

            const countryFlag = document.createElement('div');
            countryFlag.classList.add('countries__box-flags');

            const countryFlagImg = document.createElement('div');
            countryFlagImg.classList.add('countries__box-flags-img');
            countryFlagImg.style.backgroundImage = "url(" + data[i].flags.svg + ")";

            const countryContent = document.createElement('div');
            countryContent.classList.add('countries__box-text');

            const countryName = document.createElement('p');
            countryName.classList.add('box-text__country-name', 'js-name');
            countryName.innerHTML = data[i].name.official;
            
            const countryPopulation = document.createElement('p');
            countryPopulation.classList.add('box-text__country-info', 'js-population');
            countryPopulation.innerHTML = 'Population:  ' + data[i].population;

            const countryRegion = document.createElement('p');
            countryRegion.classList.add('box-text__country-info', 'js-region');
            countryRegion.innerHTML = 'Region:  ' + data[i].region;

            const countryCapital = document.createElement('p');
            countryCapital.classList.add('box-text__country-info', 'js-capital');
            countryCapital.innerHTML = 'Capital:  ' + data[i].capital;

            countryContent.appendChild(countryName);
            countryContent.appendChild(countryPopulation);
            countryContent.appendChild(countryRegion);
            countryContent.appendChild(countryCapital);

            countriesListItem.appendChild(countryFlag);
            countriesListItem.appendChild(countryFlagImg);
            countryFlag.appendChild(countryFlagImg);
            countriesListItem.appendChild(countryContent);
            countriesList.appendChild(countriesListItem);

            countriesListItem.addEventListener('click', (e) => {

                wraperModal.style.display = 'block';
                populateDetailPage(data[i]);
                clearTimeout(timeout);
                const timeout = setTimeout(() => {
                    loader.style.display = 'none';
                }, 1000);
                
                console.log(data[i])
                console.log(data[i].name.common.toLowerCase())
            });
        }
    }

}

export default renderData;