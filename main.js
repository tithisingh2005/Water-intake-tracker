let totalWater = 0;
let maxWater = 2000; // daily goal in ml

function addWater(amount) {
    totalWater += amount;

    if (totalWater > maxWater) {
        totalWater = maxWater;
    }

    document.getElementById("totalWater").innerText =
        totalWater + " ml";

    let waterLevel = (totalWater / maxWater) * 100;
    document.getElementById("water").style.height = waterLevel + "%";
}

function resetWater() {
    totalWater = 0;
    document.getElementById("totalWater").innerText = "0 ml";
    document.getElementById("water").style.height = "0%";
}
