// event listener america
const americas = document.getElementById('americas-image');
americas.addEventListener('click',  () => {
    getCountries('Americas');
});

// event listener africa
const africa = document.getElementById('africa-image');
africa.addEventListener('click',  () => {
    getCountries('Africa');
});

// event listener asia
const asia = document.getElementById('asia-image');
asia.addEventListener('click',  () => {
    getCountries('Asia');
});

// event listener oceania
const oceania = document.getElementById('oceania-image');
oceania.addEventListener('click',  () => {
    getCountries('Oceania');
});

// event listener europe
const europe = document.getElementById('europe-image');
europe.addEventListener('click',  () => {
    getCountries('Europe');
});

const worldMap = document.getElementById('')

const countryListContainer = document.getElementById('country-list-items');

async function getCountries(countryRegion) {
    try {
        // get rest api
        const result = await axios.get('https://restcountries.eu/rest/v2/all');
        const countryData = result.data;

        // remove previous result
        const previousRegionResult = document.getElementById('country-list-ul');
        if (previousRegionResult) {
            countryListContainer.removeChild(previousRegionResult);
        }

        // create ul
        const countryListUl = document.createElement('ul');
        countryListUl.setAttribute('id', 'country-list-ul');

        const countries = getRegionList(countryRegion, countryData);

        // create country list
        countries.map((country) => {
            const { flag, name, region } = country;

            // create list item
            const countryListItem = document.createElement('li');
            countryListItem.setAttribute('class', 'country-list-item');

            // create flag and append to list item
            const countryListFlag = document.createElement('img');
            countryListFlag.setAttribute('src', flag);
            countryListFlag.setAttribute('class', 'country-list-flag');
            countryListItem.appendChild(countryListFlag);

            // create name and create to list item
            const countryListName = document.createElement('p');
            countryListName.textContent = name;
            countryListName.setAttribute('class', 'country-list-name');
            countryListName.setAttribute('class', getRegionClass(region));
            countryListItem.appendChild(countryListName);

            // add item to list
            countryListUl.appendChild(countryListItem);


    });

        const countryListItems = document.getElementById('country-list-items');
        countryListItems.appendChild(countryListUl);

} catch (e) {
    console.log("Something went wrong!");
    console.error(e);
}
}

getCountries();

// get list of countries based on region input
function getRegionList(countryRegion, countryData) {
    switch (countryRegion) {
        case 'Africa':
            return countryData.filter((country) => {
                return country.region === 'Africa';
            });
        case 'Americas':
            return countryData.filter((country) => {
                return country.region === 'Americas';
            });
        case 'Asia':
            return countryData.filter((country) => {
                return country.region === 'Asia';
            });
        case 'Europe':
            return countryData.filter((country) => {
                return country.region === 'Europe';
            });
        case 'Oceania':
            return countryData.filter((country) => {
                return country.region === 'Oceania';
            });
        default:
            return countryData;
    }
}


function getRegionClass(currentRegion) {
    switch (currentRegion) {
        case 'Africa':
            return 'africa';
        case 'Americas':
            return 'americas';
        case 'Asia':
            return 'asia';
        case 'Europe':
            return 'europe';
        case 'Oceania':
            return 'oceania';
        default:
            return 'default';
    }
}