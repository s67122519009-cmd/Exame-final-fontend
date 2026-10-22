function calculateVolume() {
    const radiusInput = document.getElementById("inRadius");
    const heightInput = document.getElementById("inHeight");
    const unitInput = document.getElementById("inUnit");
    const result = document.getElementById("result");

    const radius = Number(radiusInput.value);
    const height = Number(heightInput.value);
    const unit = unitInput.value;

    
    if (
        radiusInput.value.trim() === "" ||
        heightInput.value.trim() === "" ||
        !Number.isFinite(radius) ||
        !Number.isFinite(height) ||
        radius <= 0 ||
        height <= 0
    ) {
        result.textContent = "Please enter a positive radius and height.";
        return;
    }

    
    const radiusCm = unit === "1000" ? radius / 10 : radius;
    const heightCm = unit === "1000" ? height / 10 : height;

    
    const volume = Math.PI * radiusCm * radiusCm * heightCm;

    
    result.textContent = "Volume = " + volume.toFixed(2) + " cm³";
}


document.getElementById("volumeCalculator").addEventListener("submit", function (event) {
    event.preventDefault();
    calculateVolume();
});
