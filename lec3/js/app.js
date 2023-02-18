//higher order function
//call back function <= argument هي دالة عادية ولكن تاخد في
//تعتبر دوال خاصة بالمصفوفات

//example:
// higher order function
//   |
//function(function(وترجع قيمة argument تاخد))
//             |
//call back function || anonymous function || clojure function (الغرض منها ارجاع قيمة)

//types:
//1- map //دالة لتنفيذ اي عملية لكل عناصر المصفوفة
let num = [1, 2, 3, 4, 5];
let newNum = num.map(function (val) {
  return val * val;
});
console.log(num);
console.log(newNum);

//2- filter //دالة تفحص جميع عناصر المصفوفة وتقوم بارجاع العناصر التي حققت الشرط
let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newNum2 = num2.filter(function (element) {
//   return element % 2 == 0;
// });
//
//طرق اخرى لكتابة الدوال
//
// let newNum2 = num2.filter((element)=> {
//     return element % 2 == 0;
// });
//
//تستخدم عندما يكون الامر البرمجي عبارة عن سطر واحد فقط
let newNum2 = num2.filter((element) => element % 2 == 0);
console.log(num2);
console.log(newNum2);

//3-reduce //تستخدم لارجاع تقارير او حاصل اي عملية على جميع عناصر المصفوفة ولكن ارجاعها في قيمة واحدة وليس مصفوفة
let num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNum3 = num3.reduce(function (ocu, val) {
  return ocu + val;
});
console.log(num3);
console.log(newNum3);

//4-foreach //تستخدم عادة لطباعة عناصر المصفوفة
let num4 = [1, 2, 3, 4, 5];
num4.forEach(function (val) {
  console.log(val);
});

//DOM => Document Object Model
//من خلاله نستطيع التعديل والحذف والاضافة على العناصر وعلى خصائص العناصر و اعطائه حدث او اكشن معين
//يجب اختيار العنصر DOM للتعامل مع

//Selector: طرق اختيار العناصر
//1-document.getElementById();
//2-document.getElementsByClassName(); //ترجع مصفوفة حتى ولو كان كلاس واحد
//3-document.getElementsByName();
//4-document.getElementsByTagName();
//5-document.querySelector('#id')
//  document.querySelector('.class')
//  document.querySelector('tagname')

//Add Element:
// let p = document.getElementById("p");
// let app = document.getElementById("app").appendChild();
// document.createElement();

//Edit Element:
// p.innerText = "welcome";
// p.style.color = "red";

//Remove Element:
// p.removeChild();

//Events:
let form = document.getElementById("form");
let btn = document.getElementById("btn");
let req = document.getElementById("req");
let input = document.getElementById("input");

function validate() {
  if (input.innerText == "") {
    req.style.display = "block";
    return false; 
  }
}
