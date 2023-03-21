const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

}

loadCountries();

const displayCountries = countries => {
   const countryHTML = countries.map(country => getCountryHtml(country));
   console.log(countries[0]);
   const container = document.getElementById('container');
   container.innerHTML = countryHTML.join(' ');
//    console.log(countryHTML.join(' '));
}

// getCounty function declaration

const getCountryHtml = country =>{
    return `
    <div>
    <h2>${country.name.common}</h2>
    <img src="${country.flags.png}">
    </div>
    `
}

