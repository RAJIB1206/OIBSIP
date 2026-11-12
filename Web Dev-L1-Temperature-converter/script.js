
// Get HTML Elements

const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");
const errorMessage = document.getElementById("error");
const results = document.getElementById("results");

// Convert Temperature Function

function convertTemperature() {

    const temperature = temperatureInput.valueAsNumber;
    const unit = unitSelect.value;

    // Clear previous error
    errorMessage.textContent = "";
    results.style.display = "none";
    resetBtn.style.display = "none";

    // Validate input
    if (temperatureInput.value.trim() === "" ||
        !Number.isFinite(temperature)) {

        errorMessage.textContent =
            "Please enter a valid numeric temperature.";

        temperatureInput.focus();
        return;
    }

    // Check absolute zero
    if (
        (unit === "celsius" && temperature < -273.15) ||
        (unit === "fahrenheit" && temperature < -459.67) ||
        (unit === "kelvin" && temperature < 0)
    ) {

        errorMessage.textContent =
            "Invalid temperature! Temperature cannot be below absolute zero.";

        return;
    }

    let celsius, fahrenheit, kelvin;

    // Celsius Conversion
    if (unit === "celsius") {

        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;

    }

    // Fahrenheit Conversion
    else if (unit === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;
        fahrenheit = temperature;
        kelvin = celsius + 273.15;

    }

    // Kelvin Conversion
    else if (unit === "kelvin") {

        kelvin = temperature;
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;

    }

    // Display Results
    document.getElementById("celsiusResult").textContent =
        celsius.toFixed(2) + " °C";

    document.getElementById("fahrenheitResult").textContent =
        fahrenheit.toFixed(2) + " °F";

    document.getElementById("kelvinResult").textContent =
        kelvin.toFixed(2) + " K";

    results.style.display = "block";
    resetBtn.style.display = "block";
}

// Convert Button Click
convertBtn.addEventListener("click", convertTemperature);

// Reset Function
resetBtn.addEventListener("click", function() {

    temperatureInput.value = "";
    unitSelect.value = "celsius";

    errorMessage.textContent = "";
    results.style.display = "none";
    resetBtn.style.display = "none";

    temperatureInput.focus();
});

// Clear error when user changes input
temperatureInput.addEventListener("input", function() {
    errorMessage.textContent = "";
});

unitSelect.addEventListener("change", function() {
    errorMessage.textContent = "";
});
