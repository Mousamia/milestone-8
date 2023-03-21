const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))

}

loadCountries();

const displayCountries = countries => {
    console.log(countries[6]);
    const countryHTML = countries.map(country => getCountryHtml(country));
       


    const container = document.getElementById('container');
    container.innerHTML = countryHTML.join(' ');
}

// getCounty function declaration
// option-2

// destructuring
const getCountryHtml = ({name, flags, area, idd}) => {
    // // option -1
    // const { name, flags } = country;
    // console.log(name);

    return `
    <div>
    <h2>${name.common}</h2>
    <p>Area: ${area} </p>
    <p>Car: ${idd.root} </p>
    <img src="${flags.png}">
    </div>
    `
}

