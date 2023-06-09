//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let y = document.querySelector("h2#ex42");
let p = document.createElement("p");
p.textContent = "写真表と都市の緯度経度のページです";
y.insertAdjacentElement("afterend",p);
p.style.textEmphasis="sesame green";

// 練習4-3 写真表作成プログラム
let p3 = document.createElement("img"); 
p3.setAttribute("src","hanako.png");
let px3 = document.createElement("p"); 
px3.insertAdjacentElement("beforeend",p3);
let l = document.querySelector("div#phototable");
l.insertAdjacentElement("afterend",px3);

let p2 = document.createElement("img"); 
p2.setAttribute("src","jiro.png"); 
let px2 = document.createElement("p");
px2.insertAdjacentElement("beforeend",p2); 
l.insertAdjacentElement("afterend",px2);

let p1 = document.createElement("img"); 
p1.setAttribute("src","taro.png");
let px1 = document.createElement("p");
px1.insertAdjacentElement("beforeend",p1);
l.insertAdjacentElement("afterend",px1);
// 練習4-4 箇条書き削除プログラム
let z = document.querySelectorAll("li"); 
for (let w of z) {
	w.remove();
} 

// 練習4-5 箇条書き追加プログラム
let w = document.querySelector("ul#location");
for(let x of data) {
	let li = document.createElement("li");
	w.insertAdjacentElement("beforeend",li);
	li.textContent = x.name + "...緯度:" + x.lat + " 経度:" + x.lng;
}
