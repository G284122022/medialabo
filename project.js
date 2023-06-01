let submit = document.querySelector("button#submit");
submit.addEventListener("click", sendRequest);


function sendRequest() {
    let input = document.querySelector("select#country");
    let id = input.value;

    // URL を設定
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/" + id + ".json";

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // ここから記入
    let input = document.querySelector("select#country");
    let id = input.value;
    let lat = document.querySelector("td#lat");
    lat.textContent = data.coord.lat;
    let lon = document.querySelector("td#lon");
    lon.textContent = data.coord.lon;
    let weather = document.querySelector("td#weather");
    weather.textContent = data.weather[0].description;
    let min = document.querySelector("td#min");
    min.textContent = data.main.temp_min;
    let max = document.querySelector("td#max");
    max.textContent = data.main.temp_max;
    let hum = document.querySelector("td#hum");
    hum.textContent = data.main.humidity;
    let sp = document.querySelector("td#sp");
    sp.textContent = data.wind.speed;
    let di = document.querySelector("td#di");
    di.textContent = data.wind.deg;
    let name = document.querySelector("td#name");
    name.textContent = data.name;
    console.log(data.name);


}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}