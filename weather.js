
let inputsearch = document.getElementById("inputsearch");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let text = document.getElementById("text");

async function getweather(city="cairo") {
  let data = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=dd106b2cf2504043aa5151102232502&q=${city}&days=3`
  );
  let res = await data.json();
  let arr=res.forecast.forecastday;
  displayCurrent(res);
  displayForcast(arr);
//   console.log(res.location.name);
//   console.log(res.current.condition.icon);
//   console.log(res.forecast.forecastday[0].day.maxtemp_c);
//   console.log(res.forecast.forecastday[0].day.condition.icon);
}
// var d = new Date(res);

getweather();
inputsearch.addEventListener("blur", function (el) {
  getweather(el.target.value);
});

function displayCurrent(res) {
  let de = new Date()
let  weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
let  month =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log();
let temp = `<div class="our-one ">
    <div class="head p-2">
        <p >${weekday[de.getDay()]}</p>
        <p >${[de.getDate()]+ month[de.getMonth()]}</p>
    </div>
    <div class="calender ">
        <p class="text-start p-2 px-3 fs-4" id="city">${res.location.name}</p>
        <div class="d-flex justify-content-around">
        <h2 class="text-start word p-2" id="temp">${res.current.temp_c}<sup>o</sup>C</h2>
        <img src="https:${res.current.condition.icon}" class="word w-25" id="temp">
        </div>
    </div>
    <p class="text-start p-2 px-3 text-info fs-5" id="text">${res.current.condition.text}</p>
    <div class="d-flex justify-content-start">
    <p class="px-3"><img src="image/images4.png" class="pe-2">${res.current.wind_degree}</p>
    <p class="px-2"><img src="image/images5.png" class="pe-2">${res.current.wind_kph}</p>
    <p class="px-2"><img src="image/images6.png" class="pe-2">${res.current.wind_dir}</p>
    </div>
    
</div>`;


VanillaTilt.init(document.querySelectorAll(".our-one"), {
max: 25,
speed: 400
});

  document.getElementById("current").innerHTML = temp;
}
function displayForcast(arr) {
  
  let  weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let  temp=``;
 for(let i=1;i<arr.length;i++)
 {
  let de = new Date(arr[i].date)
    // debugger;
    temp += `<div class="col-sm-6 ">
    <div class="our-two">
        <div class="head1 p-1">
        <p>${weekday[de.getDay()]}</p>
        </div>
        <div id="myRow"> 
        <img src="https:${arr[i].day.condition.icon}" class=" pt-3 word" id="temp">
            <h2 class="text-center pt-2 p-2">${arr[i].day.maxtemp_c}</h2>
            <p class="text-center pt-3 text-white">${arr[i].day.mintemp_c}<sup>o</sup></p>
            <p class="text-center pt-3 text-info pb-5">${arr[i].day.condition.text}</p>
        </div>
        
    </div>
</div>`
;
}
document.getElementById('forcast').innerHTML=temp;
}

VanillaTilt.init(document.querySelectorAll(".mm"), {
  max: 15,
  speed: 500,
  
});
