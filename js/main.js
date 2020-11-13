// country container
const countryContainer = document.getElementById('country-container');

// Search button
const searchButton = document.getElementById("search-button");
searchButton.addEventListener('click', fetchCountry);

// Search input field
const searchInput = document.getElementById("search-input");
searchInput.addEventListener('input', getQuery);
searchInput.addEventListener('keyup', searchOnEnter);

// Get user input from input field
let query;
function getQuery(e) {
    query = e.target.value;
    return query;
}

// search on enter
function searchOnEnter(e) {
    if (e.key === "Enter"){
        fetchCountry();
    }
}

// error message
const errorMessage = document.createElement('p');


// fetch country
async function fetchCountry() {

    // reset animation
    countryContainer.className = "";

    // reset search input
    searchInput.value = "";

    // reset error message
    errorMessage.textContent = "";

    // delete previous search result
    const previousSearchResult = document.getElementById('country');
    if (previousSearchResult) {
        countryContainer.removeChild(previousSearchResult);
    }

    try {
        // get rest api
        const result = await axios.get(`https://restcountries.eu/rest/v2/name/${query}?fullText=true`);
        console.log(result);
        let countryData = result.data[0];
        console.log(countryData);

        // create country div
        const country = document.createElement('div');
        country.setAttribute('id', 'country');

        // title
        const countryTitle = document.createElement('h1');
        country.appendChild(countryTitle);
        countryTitle.textContent = countryData.name;

        // flag
        const countryFlag = document.createElement('img');
        countryFlag.setAttribute('src', countryData.flag);
        countryFlag.setAttribute('id', 'country-flag')
        country.appendChild(countryFlag);


        // create header div
        const countryHeader = document.createElement('div');
        countryHeader.setAttribute('id','country-header')
        countryHeader.appendChild(countryTitle);
        countryHeader.appendChild(countryFlag);
        country.appendChild(countryHeader);

        // name and subregion
        const countryNameAndSubregion = document.createElement("p");
        country.appendChild(countryNameAndSubregion);
        countryNameAndSubregion.textContent = `${countryData.name} is situated in ${countryData.subregion}.`;

        // population
        const countryPopulation = document.createElement("p");
        country.appendChild(countryPopulation);
        countryPopulation.setAttribute("id", "country-population")
        countryPopulation.textContent = `It has a population of ${countryData.population}.`;

        // capital city and currency
        const countryCityAndCurrency = document.createElement("p");
        country.appendChild(countryCityAndCurrency);
        countryCityAndCurrency.textContent = `The capital city is ${countryData.capital} and you  pay with ${currency(countryData.currencies)}` ;

        // language
        const countryLanguage = document.createElement('p');
        country.appendChild(countryLanguage);
        countryLanguage. textContent = `They speak ${language(countryData.languages)}`;


        // add country to country-container
        countryContainer.appendChild(country);
        countryContainer.className = "country-animation";


    } catch (e) {

        // create country
        const country = document.createElement('div');
        country.setAttribute('id', 'country');
        country.setAttribute('class', 'country-animation');
        countryContainer.appendChild(country);

        // create error div
        const error = document.createElement('div');
        error.setAttribute('id', 'error');
        country.appendChild(error);

        // error title
        const errorTitle = document.createElement('h3');
        errorTitle.setAttribute('id', 'error-title');
        errorTitle.textContent = "Something went wrong!"
        country.appendChild(errorTitle);

        // text
        const errorText = document.createElement("p");
        errorText.setAttribute('id', 'error-text');
        errorText.textContent = "Please try to type a new country.";
        country.appendChild(errorText);

        // error code
        const errorCode = document.createElement("p");
        errorCode.setAttribute('id', 'error-code');
        errorCode.textContent = e;
        country.appendChild(errorCode);
    }
}

// create string for multiple currency outcomes
function currency(object) {
    for (let i = 0; i < object.length; i++) {
        if (object.length == 1) {
            return " " + object[0].name + "'s.";
        }
        if (object.length == 2) {
            return " " + object[0].name + "'s and " + object[1].name + "'s.";
        }
        if (object.length == 3) {
            return " " + object[0].name + "'s , " + object[1].name + "'s and " + object[2].name + "'s.";
        }
    }
}

// create string for multiple language outcomes
function language(object) {
    for (let i = 0; i < object.length; i++) {
        if (object.length == 1) {
            return " " + object[0].name + ".";
        }
        if (object.length == 2) {
            return " " + object[0].name + " and " + object[1].name + ".";
        }
        if (object.length == 3) {
            return " " + object[0].name + " , " + object[1].name + " and " + object[2].name + ".";
        }
        if (object.length == 4) {
            return " " + object[0].name + " , " + object[1].name + " , " + object[2].name  + " and " + object[3].name + ".";
        }
    }
}



const helloWorld = document.getElementById("hello-world");

const earth = document.getElementById('earth');
earth.addEventListener('mouseover', toggleHelloWorld);
earth.addEventListener('mouseleave', toggleHelloWorld)

function toggleHelloWorld() {
    console.log("hello world");
    helloWorld.classList.toggle('visible');
}



