function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }
}
days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let formattedDay = days[day];
return `${formattedDay} ${hours}:${minutes}`;

console.log(day);
console.log(time);

let p = document.querySelector(".current-details");
p.innerHTML = `${day}  ${time}, moderate rain
Humidity: 87%, Wind: 7.2km/h`;

function search(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search-city-input");
  console.log(searchCity.value);
  let h1 = document.querySelector("h1");
  if (searchCity.value) {
    h1.innerHTML = `${searchCity.value}`;
  } else {
    h1.innerHTML = `${searchCity.value}`;
    alert("City not found");
  }
}

let form = document.querySelector("form");
