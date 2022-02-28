const getApi = () => {
    const endpoint = "https://restcountries.com/v2/all";
    const request = new XMLHttpRequest();

    if(!request) {
        console.log('ne radi');
    }

    request.open("GET", endpoint, true);
    request.onload = function() {
        if(this.status >= 200 && this.status < 400) {
            console.log("ok")
            renderData(JSON.parse(this.response));
        }else {
            console.log("nije ok")
        }
    }
    request.send();
}

function renderData(data) {
    const countriesList = document.querySelector('.countries');

    for(let i = 0; i < data.length; i++) {
        if(data[i]) {
            console.log(data[i].flags)
            const countriesListItem = document.createElement('li');
            countriesListItem.classList.add('countries__box');


            const countryFlag = document.createElement('img');
            countryFlag.classList.add('countries__box-flags');
            countryFlag.src = data[i].flags.svg;

            const countryContent = document.createElement('div');
            countryContent.classList.add('countries__box-text');

            const countryName = document.createElement('p');
            countryName.classList.add('box-text__country-name', 'js-name');
            countryName.innerHTML = data[i].name;
            
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
            countriesListItem.appendChild(countryContent);
            countriesList.appendChild(countriesListItem);

        }
    }

    


}

export default getApi;