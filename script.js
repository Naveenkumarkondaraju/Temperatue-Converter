document.getElementById("convertBtn").addEventListener("click",convertTemperature);

function convertTemperature(){
    let temp = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if(isNaN(temp)){
        result.innerText = "please enter a valid number!";
        return;
    }

  let convertedTemp;
  if (unit === "C") {
    convertedTemp = (temp * 9/5) + 32;
    result.innerText = `${temp}°C = ${convertedTemp.toFixed(2)}°F`;
  } else {
    convertedTemp = (temp - 32) * 5/9;
    result.innerText = `${temp}°F = ${convertedTemp.toFixed(2)}°C`;
  }
}
    