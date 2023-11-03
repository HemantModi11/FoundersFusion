
document.addEventListener("DOMContentLoaded", function () {
    const addFormButton = document.getElementById("addFormButton");
    const newStartupForm = document.getElementById("newStartupForm");
    const startupGrid = document.getElementById("startupGrid");

    addFormButton.addEventListener("click", () => {
        newStartupForm.style.display = "block";
    });

    const submitStartupButton = document.getElementById("submitStartup");
    submitStartupButton.addEventListener("click", () => {
        //const startupName = document.getElementById("startupName").value;
        const country = document.getElementById("country").value;
        const year = document.getElementById("year").value;
        const city = document.getElementById("city").value;
        const mainCategory = document.getElementById("mainCategory").value;
        const fundingRounds = document.getElementById("fundingRounds").value;
        const fundingFilled = document.getElementById("fundingFilled").value;
        const predicted_success = document.getElementById("predicted_success").value;
        
        const inputData = {
            country: country,
            year: year,
            city: city,
            mainCategory: mainCategory,
            fundingRounds: fundingRounds,
            fundingFilled: fundingFilled,
        };
        fetch("/predict", {
            method: "POST",
            body: JSON.stringify(inputData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Response data:", data)
                // Update the UI with the predicted success status
                /*
                const predictionResult = data.predicted_success;
                if (predictionResult !== null) {
                    const resultElement = document.getElementById("predicted_success");
                    resultElement.innerHTML = `Category of startup is ${predictionResult}`;
                }*/
                const predictedSuccessElement = document.getElementById("predicted_success");
                predictedSuccessElement.textContent = predicted_success;
            })
            .catch((error) => {
                console.error("Error:", error);
            });

        //**************** 
        const newTile = document.createElement("a");
        newTile.className = "startup-tile";
        newTile.innerHTML = `
            
            <p>Country: ${country}</p>
            <p>Year: ${year}</p>
            <p>City: ${city}</p>
            <p>Main Category: ${mainCategory}</p>
            <p>Funding Rounds: ${fundingRounds}</p>
            <p>Funding Filled: ${fundingFilled}</p>
            <p>Success status: ${predicted_success}</p>
        `;

        startupGrid.appendChild(newTile);

        // Reset the form and hide it
        newStartupForm.reset();
        newStartupForm.style.display = "none";
    });

});

/*
document.addEventListener("DOMContentLoaded", function () {
    const addFormButton = document.getElementById("addFormButton");
    const newStartupForm = document.getElementById("newStartupForm");
    const startupGrid = document.getElementById("startupGrid");
    const predictedSuccessElement = document.getElementById("predicted_success");

    addFormButton.addEventListener("click", () => {
        newStartupForm.style.display = "block";
    });

    const submitStartupButton = document.getElementById("submitStartup");
    submitStartupButton.addEventListener("click", () => {
        const country = document.getElementById("country").value;
        const year = document.getElementById("year").value;
        const city = document.getElementById("city").value;
        const mainCategory = document.getElementById("mainCategory").value;
        const fundingRounds = document.getElementById("fundingRounds").value;
        const fundingFilled = document.getElementById("fundingFilled").value;
        
        const inputData = {
            country: country,
            year: year,
            city: city,
            mainCategory: mainCategory,
            fundingRounds: fundingRounds,
            fundingFilled: fundingFilled,
        };

        fetch("/predict", {
            method: "POST",
            body: JSON.stringify(inputData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Response data:", data);
            const predictionResult = data.predicted_success;
            if (predictionResult !== undefined) {
                predictedSuccessElement.textContent = `Category of startup is ${predictionResult}`;
                // Create a new startup tile and append it to the grid
                const newTile = document.createElement("a");
                newTile.className = "startup-tile";
                newTile.innerHTML = `
                    <p>Country: ${country}</p>
                    <p>Year: ${year}</p>
                    <p>City: ${city}</p>
                    <p>Main Category: ${mainCategory}</p>
                    <p>Funding Rounds: ${fundingRounds}</p>
                    <p>Funding Filled: ${fundingFilled}</p>
                    <p>Success status: ${predictionResult}</p>
                `;
                startupGrid.appendChild(newTile);
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });

        // Reset the form and hide it
        newStartupForm.reset();
        newStartupForm.style.display = "none";
    });
});
*/