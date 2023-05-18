let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
let elem = document.querySelector("input#mytext");
elem.setAttribute("placeholder","入力してね！");
let cn = document.querySelector("li#cn");
cn.setAttribute("placeholder","データを表示");

let pcn1 = document.createElement("p");
pcn1.textContent = data.name;
cn.insertAdjacentElement("afterend",pcn1);

let pcn2 = document.createElement("p");
pcn2.textContenct = data.main.temp_max;
pcn1.insertAdjacentElement("afterend",pcn2);

let pcn3 = document.createElement("p");
pcn3.textContent = data.main.temp_min;
pcn2.insertAdjacentElement("afterend",pcn3);
