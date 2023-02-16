var a = "aaa";
var a = "bbb";

let x = 10;
x = 20;

const pi = 3.14;
console.log(a, x, pi);

//conditions
// 1- if()
// 2- if()else{}
// 3- else if()
// 4- switch

let age = 10;
if (age > 0) {
  if (age >= 18 && age < 60) {
    console.log("you are young");
  } else if (age > 60) {
    console.log("you are old");
  } else {
    console.log("you are baby");
  }
}

let num = 1;
switch (num) {
  case 1:
    console.log("number one");
    break;
  case 2:
    console.log("number tow");
    break;

  default:
    console.log("not valid");
    break;
}

//array
let arr = [20, 30, 40, 50];
//لاضافة عنصر ...ويتم اضافته اخر عنصر في المصفوفة
arr.push(60);
//لحذف عنصر ... ويتم حذف اخر عنصر في المصفوفة
arr.pop();
//لحذف عنصر ... ويتم حذف اول عنصر في المصفوفة
arr.shift();
//لاضافة عنصر ... ويتم اضافته اول عنصر في المصفوفة
arr.unshift(70);
console.log(arr);

//لمنع تكرار القيم التي بداخل المصفوفة
let arr2 = [20, 30, 40, 50, 50, 40];
let uniq = new Set(arr2);
console.log(uniq);
// للاضافة عن طريق add , للحذف عن طريق delete

//loop
//1- for
//2- while
//3- do while

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("///////");

let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

console.log("///////");

let z = 0;
do {
  console.log(arr[z]);
  z++;
} while (z < arr.length);

console.log("///////");

//concatenation
//الطريقة التقليدية
let p = "<div>";
p += "<p>Hello</p>";
p += "</div>";
console.log(p);

//الطريقة الحديثة
let name = "youssef";
let p2 = `
<div>
<p>
Hello ${name}
</p>
</div>
`;
console.log(p2);

//string
let text = "welcome in gaza";
//لقطع جزء من النص
//1- slice
// text = text.slice(5); //يقطع من الانكس 5 الى اخر النص
// text = text.slice(5, 10); //يقطع من الانكس 5 الى 10
// text = text.slice(-5); //يبدا من الاندكس الاخير

//2- split //تحول النص الى مصفوفة
// text= text.split(''); //بدون مسافة .. تقطع الحروف وتجعلهم في مصفوفة
// text= text.join(''); //تجمع المصفوفة وتجعلها نص واحد
// text= text.split(' '); //نضع مسافة .. تقطع الكلمات وتجعلهم في مصفوفة
// text= text.join(' '); //تجمع المصفوفة وتجعلها نص واحد
console.log(text);

//numbers
//يطبع رقم من 0 الى 1
let numb = Math.random();
console.log(numb);
//اذا اردنا طباعة رقم من 1 الى 10
let numb2 = Math.random() * 10 + 1;
console.log(numb2);
//لاخذ عدد معين من الخانات العشرية
numb2 = numb2.toFixed(2);
console.log(numb2);
//لخفض العدد لاقرب عدد صحيح
// numb2 = Math.floor(numb2);
// console.log(numb2);
//لرفع العدد لاقرب عدد صحيح
numb2 = Math.round(numb2);
console.log(numb2);

