const clearDetailPage = () => {
    const countryFlag = document.querySelector('.single-country__flag');
    const countryName = document.querySelector('.single-country__info-text');
    const nativeName = document.querySelector('.info-desc__text-native-name');
    const countryPopulation = document.querySelector('.info-desc__text-population');
    const countryRegion = document.querySelector('.info-desc__text-region');
    const countrySubRegion = document.querySelector('.info-desc__text-sub-region');
    const countryCapital = document.querySelector('.info-desc__text-capital');
    const countryDomain = document.querySelector('.info-desc__text-domain');
    const countryCurrencies = document.querySelector('.info-desc__text-currencies');
    const countryLanguages = document.querySelector('.info-desc__text-languages');
    const countryBorders = document.querySelector('.country-borders__text');

    
    countryFlag.style.backgroundImage = '';
    countryName.innerHTML = '';
    nativeName.innerHTML = 'Native Name: ';
    countryPopulation.innerHTML = 'Population: ';
    countryRegion.innerHTML = 'Region: ';
    countrySubRegion.innerHTML = 'Sub Region: ';
    countryCapital.innerHTML = 'Capital: ';
    countryDomain.innerHTML = 'Domain: ';
    countryCurrencies.innerHTML = 'Currencies: ';
    countryLanguages.innerHTML = 'Languages: ';
    countryBorders.innerHTML = 'Borders: ';
};

export default clearDetailPage;