document.addEventListener('DOMContentLoaded', function () {
    const addFormButton = document.getElementById('addFormButton');
    const newStartupForm = document.getElementById('newStartupForm');
    const startupGrid = document.getElementById('startupGrid');
    const countryMapping = {
        0: "ARE", 1: "ARG", 2: "AUS", 3: "AUT", 4: "BEL", 5: "BGR", 6: "BRA",
        7: "CAN", 8: "CHE", 9: "CHL", 10: "CHN", 11: "COL", 12: "CRI", 13: "CYM",
        14: "CZE", 15: "DEU", 16: "DNK", 17: "DOM", 18: "ECU", 19: "EGY", 20: "ESP",
        21: "EST", 22: "FIN", 23: "FRA", 24: "GBR", 25: "GRD", 26: "HKG", 27: "HUN",
        28: "IDN", 29: "IND", 30: "IRL", 31: "ISR", 32: "ITA", 33: "JOR", 34: "JPN",
        35: "KOR", 36: "LAO", 37: "LBN", 38: "LTU", 39: "LUX", 40: "LVA", 41: "MEX",
        42: "MMR", 43: "MYS", 44: "NLD", 45: "NOR", 46: "NZL", 47: "PAK", 48: "PAN",
        49: "PER", 50: "PHL", 51: "POL", 52: "PRT", 53: "ROM", 54: "RUS", 55: "SGP",
        56: "SLV", 57: "SRB", 58: "SVN", 59: "SWE", 60: "THA", 61: "TUR", 62: "TWN",
        63: "UKR", 64: "URY", 65: "USA", 66: "VNM", 67: "ZAF"
    };

    // Main Category mapping
    const mainCategoryMapping = {
        0: "Adventure Travel", 1: "All Students", 2: "Audio", 3: "Beauty",
        4: "Call Center Automation", 5: "Cannabis", 6: "Chat", 7: "Cloud-Based Music",
        8: "Collaborative Consumption", 9: "College Recruiting", 10: "Colleges",
        11: "Comics", 12: "Communications Infrastructure", 13: "Console Gaming",
        14: "Contact Centers", 15: "Cooking", 16: "Displays", 17: "Drones",
        18: "Entrepreneur", 19: "Facebook Applications", 20: "Forums",
        21: "Fraud Detection", 22: "Hardware + Software", 23: "High Tech",
        24: "Home Owners", 25: "Hospitals", 26: "Indoor Positioning",
        27: "Industrial Automation", 28: "Innovation Management", 29: "Internet TV",
        30: "Kinect", 31: "Lighting", 32: "Local", 33: "Mechanical Solutions",
        34: "Medical", 35: "Meeting Software", 36: "Nanotechnology",
        37: "Non-Tech", 38: "Photo Editing", 39: "Price Comparison", 40: "Publishing",
        41: "Recruiting", 42: "Specialty Chemicals"
    };

    const showCountryListButton = document.getElementById("showCountryList");
    const showCategoryListButton = document.getElementById("showCategoryList");
    const countryList = document.getElementById("countryList");
    const categoryList = document.getElementById("categoryList");

    showCountryListButton.addEventListener("click", () => {
        countryList.innerHTML = "";
        for (const key in countryMapping) {
            const listItem = document.createElement("li");
            listItem.textContent = `${key} - ${countryMapping[key]}`;
            countryList.appendChild(listItem);
        }
        countryList.style.display = "block";
    });

    showCategoryListButton.addEventListener("click", () => {
        categoryList.innerHTML = "";
        for (const key in mainCategoryMapping) {
            const listItem = document.createElement("li");
            listItem.textContent = `${key} - ${mainCategoryMapping[key]}`;
            categoryList.appendChild(listItem);
        }
        categoryList.style.display = "block";
    });

    addFormButton.addEventListener('click', () => {
        newStartupForm.style.display = 'block';
    });

    const submitStartupButton = document.getElementById('submitStartup');
    submitStartupButton.addEventListener('click', () => {
        const year = document.getElementById('year').value;
        const fundingRounds = document.getElementById('fundingRounds').value;
        const fundingFilled = document.getElementById('fundingFilled').value;
        const country = document.getElementById('country').value;
        const mainCategory = document.getElementById('mainCategory').value;

        // Create a new startup card and append it to the grid
        const newTile = document.createElement('div');
        newTile.className = 'startup-tile';
        newTile.innerHTML = `
            <p>Year: ${year}</p>
            <p>Funding Rounds: ${fundingRounds}</p>
            <p>Funding Filled: ${fundingFilled}</p>
            <p>Country: ${country}</p>
            <p>Main Category: ${mainCategory}</p>
        `;
        startupGrid.appendChild(newTile);

        // Reset the form and hide it
        newStartupForm.reset();
        newStartupForm.style.display = 'none';
    });
});
