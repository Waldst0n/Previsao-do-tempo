const getInput = document.getElementById("input");
const getBtn = document.querySelector("button");

console.log(getBtn);

getBtn.addEventListener("click", GetValues);

function mostraDados(data) {
  document.querySelector(".cidade").innerHTML = `Tempo em ${data.name}`;
  document.querySelector(".temp").innerHTML = `${Math.floor(data.main.temp)}°C`;
  document.querySelector(".clima").innerHTML = `${data.weather[0].description}`;
  document.querySelector(
    ".umidade"
  ).innerHTML = `Umidade: ${data.main.humidity}%`;
  document.querySelector(
    ".icone-clima"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  console.log(data);
}

async function buscaCidade(cityValue) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());

  mostraDados(data);
}

function GetValues() {
  const cityValue = getInput.value;

  console.log(cityValue);
  buscaCidade(cityValue);
}

const key = "22d76df81c22d3ac1ce86b80343a132c";
