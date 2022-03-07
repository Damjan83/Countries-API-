const populateDetailPage = (detail) => {
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

    console.log(detail.tld)   
    console.log(detail.name.nativeName[Object.keys(detail.name.nativeName)[0]].official)
    countryFlag.style.backgroundImage = "url(" + detail.flags.svg + ")";
    countryName.innerHTML += detail.name.official;
    nativeName.innerHTML += detail.name.nativeName[Object.keys(detail.name.nativeName)[0]].official;
    countryPopulation.innerHTML += detail.population;
    countryRegion.innerHTML += detail.region;
    countrySubRegion.innerHTML += detail.subregion;
    countryCapital.innerHTML += detail.capital;
    countryDomain.innerHTML += detail.tld ? detail.tld[Object.keys(detail.tld)[0]] : '/';
    countryCurrencies.innerHTML += detail.currencies[Object.keys(detail.currencies)[0]].name;
    countryLanguages.innerHTML += detail.languages[Object.keys(detail.languages)[0]];
    countryBorders.innerHTML += detail.borders;
}

export default populateDetailPage;