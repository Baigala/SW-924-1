// console.log("aaa");
// js хичээлийн сэдвүүд:
// tsaniltsuulga
// нөхцөл шалгах
// давталт
// function
// massiv
// object
// давтлага
// es6 нэмэлтүүд
// DOM
// OOP
// Module
// Async

/* хувьсагч, өгөгдлийн төрлүүд, coersion, бодлого */
// var түлхүүр үг ашиглаж зарлана.
// тоогоор эхэлсэн нэртэй байж болохгүй.
// олон үгээс тогтох урт нэрийг CamelCase ашиглан бичнэ.
// js ийн түлхүүр үгсээр хувьсагчийг нэрлэж болохгүй.

// өгөгдлийн 5 төрөл - datatype
// 1. number - 123456789
// 2. string - "hi" 'hello' '2'
// 3. boolean - true, false
// 4. null
// 5. undefined
// primitive datatype || non-primitive
/* coersion ==>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence */

// true == 1;
// false == 0;

// parseInt(x);
// var x = +prompt("toog oruul");
// alert(x);
// alert("odriin mend");

/*Дасгал 1
Өөрийн төрсөн оноо хувьсагчинд хадгалаад одоо байгаа оноос хасч насаа гаргаж ирдэг програм бич.
*/
// var torsonOn = +prompt("torson onoo oruulna uu?");
// var odooBgaOn = 2022;
// var nas = odooBgaOn - torsonOn;
// console.log(nas);

// Math.pow(3, 2);
// Math.sqrt(16);
// Math.PI;

/*Дасгал 2
Гараас радиус авж тухайн радиустай тойргийн урт, талбайг тус тусад нь ол..
urt = PiToo * 2 * r;
talbai = PiToo * r * r;
*/
// var r = +prompt("radiusaa oruulna uu?");
// var urt = Math.PI * 2 * r;
// var talbai = Math.PI * Math.pow(r, 2);
// console.log(urt);
// console.log(talbai);

/* 11.16 нөхцөл шалгалт */
// if statement
// if(){

// }else {

// }
// < > <= >= && - and || - or !-not
// % - remainder operator үлдэгдлийг нь авдаг
// var nas = +prompt("nasaa oruulna uu?");
// if (nas < 18) {
//   console.log("huuhed");
// } else {
//   console.log("tom hun");
// }

// if (nas <= 12) {
//   console.log("huuhed");
// } else if (nas > 12 && nas <= 18) {
//   console.log("oswor nasnii huuhed");
// } else {
//   console.log("tom hun");
// }

/* Дасгал №3:
Гараас насаа оруулах үед Imgs folder доторх насны үечлэл зургийн дагуу өнөөдрийн хичээлээр үзсэн if statement ашиглан тухайн настай хүнийг аль үечлэлд хамрагдаж байгааг олох програм бичиж ирээрэй.
*/

/* Дасгал №4:
Гараас 2ш тоо өгөгдсөн ба, хэрэв тэдгээрийн үржвэр 1000-с их бол үржвэрийг хэвлэж, 1000-с бага бол нийлбэрийг хэвлэ. */

/* Дасгал №5:
Гурвалжны суурь болон өндөр өгөгдсөн бол тухайн гурвалжны талбайг ол.
томьёо: (суурь*өндөр)/2
*/

/* Дасгал №6:
Гараас тоо аваад тэгш, сондгой эсэхийг нь шалгадаг програм бич. */

/* Дүн гаргах ==> ирц - 10%, шалгалт - 30%, projects - 60% */

// ternary operator ==> гурвалсан operator
// promptoos тоон утга аваад num хувьсагчинд хадгалж өгөөд тухайн тоог сөрөг, бүхэл, бутархай эсэхийг шалгах программ бич.
// var num = +prompt("toog oruul");
// num < 0
//   ? console.log("hasah too bna.")
//   : num % 1 == 0
//   ? console.log("buhel too bna.")
//   : console.log("butarhai");

// switch case ==>
// var fruits = prompt("jimsnii neree oruulna uu?");
// switch (fruits) {
//   case "banana":
//     console.log("гадил");
//     break;
//   case "apple":
//     console.log("алим");
//     break;
//   case "watermelon":
//     console.log("тарвас");
//     break;
//   default:
//     console.log("iim jims medehgui.");
// }

// Гэрт: ternary operator ашиглаж насны үечлэл зургийн дагуу ажиллах програм бич.

/* 11.18 давталт */
// for (var i = 1; i <= 100; i++) {
//   console.log("i iin utga", i);
// }

/* Дасгал №7:
1-с 100 хүртэлх зөвхөн тэгш тоонуудыг хэвлэ. */
// var x = 1;
// x = x + 4;
// x += 4;
// x -= 3;
// x++;
// x--;
// x - 1;
// console.log(x);
// var z = x - 1;
// console.log(x);
// console.log(z);
// for (var i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

/* Дасгал №8:
10 хүртэл давталт хийж, тоо тус бүрийг өмнөх тооны нийлбэртэй консолд хэвлэнэ үү. */
// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//   sum += i;
//   console.log(i + "hurtelh " + sum);
// }

/* Дасгал №9:
 *****
 */
// var string = "";
// for (var i = 1; i <= 5; i++) {
//   string += "*";
// }
// console.log(string);

/* Дасгал №10:

*
*
*
*
*

*/

// for (var i = 1; i <= 5; i++) {
//   console.log("*");
// }

/* Дасгал №11:

*
**
***
****
*****

*/
// console.log("aaaaaaaaa\nbbbbb");
// prompt("hi\nYu bna");

// var string = "";
// for (var i = 1; i <= 10; i++) {
//   for (var j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

/* Гэрт:
/* Дасгал №12:
 *****
 ****
 ***
 **
 *

 */
// let string = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5 - i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

/* 11.21 function */
// void function ==>
// var too1 = 6;
// var too2 = 10;
// function toogNemeh() {
//   var niilber = too1 + too2;
//   console.log(niilber);
// }
// toogNemeh();
// toogNemeh();

// parameter ==>
// function toogNemeh2(too1, too2) {
//   console.log(too1 + too2);
// }
// toogNemeh2(2, 5);
// toogNemeh2(15, 4);
// toogNemeh2(15, 4);
// toogNemeh2(15, 4);

// return hiideg function ==>
// function toogNemeh3(too1, too2) {
//   var niilber = too1 + too2;
//   return niilber;
// }
// console.log(toogNemeh3(4, 5) * 2);

/* Дасгал №13:
Гараас 2ш тоо өгөгдсөн ба, хэрэв тэдгээрийн үржвэр 1000-с их бол үрвэрийг буцааж, 1000-с бага бол нийлбэрийг буцаа */

/* Дасгал №14:
 Гараас тоо өгөгдсөн бол тухайн тоо хүртэлх нийлбэрүүүдийг олж буцаа. */

/* Дасгал №15:
Гурвалжны суурь болон өндөр өгөгдсөн бол тухайн гурвалжны талбайг олж буцаа.
томьёо: (суурь * өндөр) / 2 */
// var ner = "Baigal";
// var mergejil = "bagsh";

/* 11.23 array - массив */
// массивийн элементүүд рүү index-ээр нь хандаж авна.
// var x = [1, 4, "aa", 10];
// x.push(3);
// for (var i = 0; i < x.length; i++) {
//   console.log(x[i]);
// }
// var z = x[1];
// array length - хэдэн ширхэг элемэнт байгааг илэрхийлнэ.
// x.length
// массивийн хамгийн сүүлчийн element-ийг авах.
// x[x.length - 1];
// [1, [3,4,5]][1][0]
// push() - хамгийн сүүлд элемент нэмж өгнө.
// pop() - хамгийн сүүлийн элементийг устгах.
// shift() - хамгийн эхний элементийг устгах.
// unshift(44) - хамгийн эхэнд элемент нэмэх.
// slice() - тодорхой хэсгийг тасдаж авна.
// splice() - тодорхой хэсгийг устгах.
// reverse() - өгөгдлүүдийн байрлалыг урвуу болгоно.
// split("хаагуур салгах") - стринг өгөгдлийг салгаж массив болгоно;
// join("юу залгаж нийлүүлэх") - массивын элементүүдийг хооронд нь стринг болгон нийлүүлнэ.
// arr.concat(залгах массив); - 2 массивыг хооронд нь залгаад шинэ массив үүсгэнэ.
// for (var i = 0; i < x.length; i++) {
//   console.log(i + " indextei element ni : " + x[i]);
// }
// функц ашиглан бодно.
/*Дасгал №15:
 Өгөгдсөн массив дотроос 5-д хуваагддаг тоонуудын нийлбэрийг олж буцаа */
// function ex1(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 == 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(ex1([1, 2, 4, 15, 5, 5]));
/*Дасгал №16:
 Өгөгдсөн массивын эхний болон сүүлийн элемент тэнцүү бол true, үгүй бол false буцаа */
// function ex16(arr) {
//   if (arr[0] == arr[arr.length - 1]) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(ex16([9, 2, 3, 1]));
/* Дасгал №17:
Гараас стринг өгөгдсөн бол тэгш индекс дээрх тэмдэгтүүдийг хэвлэх функц бич. */
// function ex17(str) {
//   for (var i = 0; i < str.length; i++) {
//     if (i % 2 == 0) {
//       console.log(str[i]);
//     }
//   }
// }
// ex17("asdf");
/* Дасгал №18:
Өгөгдсөн массив дотор сондгой element болгон сондгой index агуулж, тэгш index болгон тэгш утга агуулж байвал тухайн massiv нь онцгой массив болно. Хэрэв онцгой массив таарвал true эсрэг тохиолдолд false утга буцаа.
[4, 5, 2, 9, 2]; ==> онцгой массив */
// function ex18(arr) {
//   var countTrue = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if ((arr[i] % 2 == 0 && i % 2 == 0) || (arr[i] % 2 == 1 && i % 2 == 1)) {
//       countTrue++;
//     }
//   }
//   if (countTrue == arr.length) {
//     return true;
//   }
//   return false;
// }

// console.log(ex18([2, 4, 2, 1, 2]));

/* Дасгал №19
string төрлийн тоо өгөгджээ. Бүх тэгш цифрүүдийн нийлбэрийг сондгой цифрүүдийн нийлбэртэй харьцуулж тэгш цифрүүдийн нийлбэр их бол тэгш цифрүүдийн нийлбэр их байна харин сондгой цифрүүдийн нийлбэр нь их байвал сондгой цифрүүдийн нийлбэр нь их хэрвээ тэнцүү байвал цифрүүдийн нийлбэр тэнцүү байна гэсэн утга буцаа.
string төрлийн тоо ==> "1258" */
// function ex19(str) {
//   var tegshTsifruudiinNiilber = 0;
//   var sondgoiTsifruudiinNiilber = 0;
//   var hariu;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] % 2 == 0) {
//       tegshTsifruudiinNiilber += +str[i];
//     } else if (str[i] % 2 == 1) {
//       sondgoiTsifruudiinNiilber += +str[i];
//     }
//   }
//   if (tegshTsifruudiinNiilber > sondgoiTsifruudiinNiilber) {
//     hariu = "tegsh ni ih.";
//   } else if (sondgoiTsifruudiinNiilber > tegshTsifruudiinNiilber) {
//     hariu = "sondgoi ni ih";
//   } else if (sondgoiTsifruudiinNiilber == tegshTsifruudiinNiilber) {
//     hariu = "tentsuu.";
//   }
//   return hariu;
// }
// console.log(ex19("1234"));
/* Дасгал №20: Массиваас element устгадаг функц бич. */
// function ex20(arr, ustgahEl) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == ustgahEl) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// }
// console.log(ex20([1, 2, 3, "aa"], "aa"));

/*Дасгал №21
Massiv дотор хамгийн сүүлийн element-ээс бусад бүх утгуудыг нэгтгэж, хамгийн сүүлийн element-тэй таарж байгаа эсэхийг тооцож boolean утга буцаа.*/
// function ex21(arr) {
//   var sum = "";
//   for (var i = 0; i < arr.length - 1; i++) {
//     sum += arr[i];
//   }
//   if (sum == arr[arr.length - 1]) {
//     return true;
//   }
//   return false;
// }
// console.log(ex21(["a", "b", "cd", "abcd"]));
// console.log(ex21(["aa", "bb", "c", "aabbcd"]));
/* Дасгал №22
 Массив дотор number болон string төрлийн тоонууд өгөгджээ. Зөвхөн number төрлийн тоонуудын нийлбэрийг олж буцаа. */
// function ex22(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number") {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(ex22([1, "1", 3, 5, "4"]));
/* Дасгал №23
Массив өгөдсөн бол element тус бүрийг харгалзах indexeer нь үржүүлж үржвэрүүдийн нийлбэрийг буцаа. */
// function ex23(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i] * i;
//   }
//   return sum;
// }
// console.log(ex23([1, 2, 4]));
/* Дасгал №24
 Дан boolean утгууд агуулсан массив өгөгдсөн бол, дотор нь нийт хэдэн ширхэг true утга байгааг олж буцаа. */
// function ex24(arr) {
//   var countTrue = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == true) {
//       countTrue++;
//     }
//   }
//   return countTrue;
// }
// console.log(ex24([true, false, true, true]));

/* 11.25 oбьект */
// {} ==> block haalt
// var shiree = {
//   ongo: "shar",
//   material: "tahia",
//   hemjee: {
//     ondor: "1m",
//     orgon: "50cm",
//   },
//   une: 40000,
//   mendleh: function () {
//     console.log("Hi");
//   },
//   arr: [1, 2, 3],
// };
// console.log(shiree.hemjee.ondor);
// console.log(shiree.une);
// shiree.mendleh();
// shiree.hayag = { duureg: "BZD", khoroo: "39" };
/* Дасгал №25
ner, dugaar, email 3-н property-tai student1, student2, student3, student4, student5 objectuud uusgeed massiv dotor hiine. promptoos email awj objectuudaa hadgalsan massiv dotorh objectuudaar dawtalt hiigeed oruulsan emailtai ali neg objectiin email taarj bhin bol tuhain emailtai objectiig consoled hewle.*/
/* 99 || 95 || 85 || 94 dugaartai mobi hereglegcid baih yum bol mobiUsers massiv ruu hiine. */
// var bool = false;
// var student1 = {
//   ner: "a",
//   dugaar: "9999999",
//   email: "a@gmail.com",
// };
// var student2 = {
//   ner: "b",
//   dugaar: "9599999",
//   email: "b@gmail.com",
// };
// var student3 = {
//   ner: "c",
//   dugaar: "9799999",
//   email: "c@gmail.com",
// };
// var email = prompt("emailee oruulna uu");
// var students = [student1, student2, student3];
// if (email != null) {
//   for (var i = 0; i < students.length; i++) {
//     if (students[i].email == email) {
//       console.log(students[i]);
//       bool = true;
//     }
//   }
//   if (bool == false) {
//     alert("oldsongui.");
//   }
// } else {
//   alert("emailee oruulna uu?");
// }

/* Дасгал №26
3 хайрцагны урт, өргөн болон өндрийн хэмжээг агуулсан массив өгөгджээ. нийт хайрцагнуудын эзэлхүүнүүдийг буцаа. */
// function ex26(boxes) {
//   var urjwer = 1;
//   var niilber = 0;
//   for (var i = 0; i < boxes.length; i++) {
//     urjwer = 1;
//     for (var j = 0; j < boxes[i].length; j++) {
//       urjwer *= boxes[i][j]; // urjwer = urjwer * boxes[i][j]
//     }
//     niilber += urjwer;
//   }
//   return niilber;
// }
// console.log(
//   ex26([
//     [1, 2, 1],
//     [2, 3, 4],
//     [1, 2, 2],
//   ])
// );

// for in
// var arr = ["a", "b", "c", "d", "e", "f"];
// for (var i in arr) {
//   console.log(arr[i]);
// }

/* Дасгал №31:
Books object доторх номнуудаар for in давталт ашиглан давталт хийгээд read property ni false номнуудыг console-д хэвлэ. */
var books = {
  book1: {
    author: "Preeti Shenoy",
    bookName: "A Place Called Home",
    read: false,
  },
  book2: {
    author: "Geetanjali Shree’s",
    bookName: "Tomb of Sand",
    read: true,
  },
  book3: {
    author: "Harish Mehta",
    bookName: "The Maverick Effect",
    read: false,
  },
};
for (var index in books) {
  if (books[index].read == false) {
    console.log(books[index]);
  }
}

// Гэрт
/* Дасгал №27. Гараас стринг болон индекс өгөгдсөн бол, стринг дотроос өгөгдсөн индекс хүртэлх тэмдэгтүүдийг устгаж, үлдсэн стрингийг буцаах функц бич */
// function ex27(text, index) {
//   var removeText = "";
//   var restText = "";
//   for (var i = 0; i < text[index]; i++) {
//     removeText += text[i];
//   }
//   restText = text.replace(removeText, "");
//   return restText;
// }
// console.log(ex27("1234", 1));

/* Дасгал №28. 2 ширхэг массив өгөгдсөн бол эхний массиваас зөвхөн сондгой, 2 дахь массиваас зөвхөн тэгш утгуудыг агуулсан шинэ массив үүсгэж буцаа. */
// function ex28(arr1, arr2) {
//   var arrNew = [];
//   for (var i = 0; i < arr1.length; i++) {
//     if (arr1[i] % 2 === 1) {
//       arrNew.push(arr1[i]);
//     }
//   }
//   for (var j = 0; j < arr2.length; j++) {
//     if (arr2[j] % 2 === 0) {
//       arrNew.push(arr2[j]);
//     }
//   }
//   return arrNew;
// }
// console.log(ex28([1, 2, 3, 4], [5, 6, 7, 8]));
/* Дасгал №29. Object авдаг function бичиж, keys болон value тус тусад нь салгаж буцаах функц бич. */
// function ex29(obj) {
//   var arr = [];
//   var keyArr = [];
//   var valueArr = [];

//   for (var key in obj) {
//     var value = obj[key];
//     keyArr.push(key);
//     valueArr.push(value);
//   }
//   arr.push(keyArr);
//   arr.push(valueArr);
//   return arr;
// }
// console.log(ex29({ a: 1, b: 2, c: 3 }));
/* Дасгал №30
Бүхэл тооны массив мөн тоо өгөгдсөн бол тухайн тооны нийлбэр болох 2 тооны индэксийг arr дотроос хайж олоод индэксүүдийг нь буцаах функц бич.
Жишээ нь:
Өгөгдсөн arr = [2, 7, 11, 15], target = 9,
nums[0] + nums[1] = 2 + 7 = 9 учир [0, 1] буцаагдана. */
// function ex30(arr, goal) {
//   let indexes = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === goal) {
//         indexes.push(i);
//         indexes.push(j);
//       }
//     }
//   }
//   return indexes;
// }
/* Дасгал №31. Өгөгдсөн тоог палиндром эсэхийг шалгах функц бич */
// function ex31(number) {
//   var result = false;
//   var numString = number.toString();
//   if (number === +numString.split("").reverse().join("")) {
//     result = true;
//   }
//   return result;
// }
// ex31(121);

/*2022.11.30 Сэдэв: es6 нэмэлтүүд */
// let x = 5;
// let x = 6;
// function z() {
//   x = 5;
//   console.log(x);
// }
// z();
/* №1. let, const */
/* let түлхүүр үг ашиглан зарласан хувьсагчийг нэг орчинд дахиж зарлаж өгж болохгүй. */
// var a = 5;
// var a = 6;
// let too = 4;
// let too = 3;
/* var түлхүүр үг ашиглан зарласан хувьсагч function дотроо хүчинтэй бол let -> block haalt дотроо хүчинтэй блокон хаалтнаас гадна дуудвал is not defined болсон байна. */
// function sayHello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log("i===> " + i);
// }
// sayHello();
/* const түлхүүр үг ашиглан зарласан хувьсагч доторх анхны утгыг нь өөрчилж болохгүй. Жишээ нь: Хүний овог нэр хадгалах, html таг барьж авах.*/
// const ner = "Baigal";
// ner = "Zoloo";

// `` - backtick;// var age = 10;
// console.log("Minii nas bol: " + age);
// console.log(`Minii nas bol: ${age}`);

/* №2. object дээрх нэмэлтүүд */
// object-ийн function-ийг method гэж дуудна.
// es6 дээр method-ийн : function түлхүүр үгийг нь хаяж бичнэ.
const person1 = {
  name: "Baigal",
  walk: function () {
    console.log(`${this.name} walking`);
  },
  talk() {
    console.log("talks");
  },
};

// var x111 = function (too1, too2) {
//   return too1 + too2;
// };

// console.log(x111(3, 4) * 2);

// console.log(x(3, 4));

person1.walk();
person1.talk();

// №3. arrow functions - суман функц нь es6-c гарж ирсэн функцыг бичих илүү товч хялбар бичиглэл юм.
// function-ийг зарлаж өгөхдөө ашигладаг function түлхүүр үгийг нь хасаад суман функц гэдгийн илэрхийлэхийн тулд => зааж өгнө. Хэрвээ ганц parameter-тай байхын бол () хаалтыг авахгүй байж болно. Мөн блокон хаалт дотор ганц мөртөй код байхаар бол return түлхүүр үг мөн {} ийг нь бичихгүй байж болно.
// Жишээ 1:
// const zeregtDewshuul = function (number) {
//   return number * number;
// };
const zeregtDewshuul = (number) => number * number;
console.log(zeregtDewshuul(5));
// Жишээ 2:
const books12 = [
  { id: 1, isRead: true },
  { id: 2, isRead: false },
  { id: 3, isRead: true },
  { id: 4, isRead: false },
];
// const unshsanNom = books12.filter(function (book) {
//   return book.isRead;
// });
// const unshsanNom = books12.filter((book) => book.isRead);

// №4. arrow functions and this
// Callback functions оbject-ийн функцдээ орохгүй байгаа учир this нь window object-ийг зааж байна.
// function e() {
//   console.log(this); // window
// }
// const person7 = {
//   name: "Baigal",
//   printThis() {
//     console.log(this);
//     function ee() {
//       console.log(this);
//     }
//     ee();
//   },
// };
// person7.printThis();

// const person2 = {
//   talk() {
//     setTimeout(function () {
//       console.log("----");
//       console.log("this ===>", this);
//     }, 2000);
//   },
// };
// person2.talk();

// Callback function дотор гаднах обьектээ заадаг болгох нь:
// const person3 = {
//   talk() {
//     var self = this;
//     setTimeout(function () {
//       console.log("----");
//       console.log("self ===>", self);
//     }, 1000);
//   },
// };
// person3.talk();
// setTimeout function доторх callback function ийг arrow function-оор сольж үзье.
// const person4 = {
//   talk() {
//     setTimeout(() => {
//       console.log("----");
//       console.log("arrow function доторх this ===>", this);
//     }, 3000);
//   },
// };

/* №5. Array-тай ажилладаг нэмэлт функцууд*/
// map - new array үүсгэнэ.
const colors = ["red", "green", "blue"];
const arr1 = colors.map((color) => "Энэ бол ийм өнгө: " + color);
console.log(arr1);

// forEach
const arr2 = ["a", "b", "c"];
arr2.forEach(function (element) {
  console.log(element);
});

// filter
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result);

// find
const arr3 = [5, 12, 8, 130, 44];
const found = arr3.find((element) => element > 10);
console.log(found);

// findIndex
const arr4 = [5, 12, 8, 130, 44];
console.log(arr4.findIndex((element) => element > 13));

// indexOf
const beasts = ["ant", "bison", "aa", "duck", "bison"];
console.log(beasts.indexOf("bison"));
console.log(beasts.indexOf("bison", 2));
console.log(beasts.indexOf("giraffe"));

//join
const elements = ["Fire", "Air", "Water"];
console.log(elements.join());
console.log(elements.join(""));
console.log(elements.join("+"));

// reduce
const arr5 = [1, 2, 3, 4];
const anhniiUtga = 0;
const niilber = arr5.reduce((a, b) => a + b, anhniiUtga);
console.log(niilber);

// some
const arr6 = [1, 2, 3, 4, 5];
const tegshToo = (element) => element % 2 === 0;
console.log(arr6.some(tegshToo));

//every
const arr7 = [1, 30, 4, 29, 10, 13];
const tooo = (currentValue) => currentValue < 40;
console.log(arr7.every(tooo));

// №6. object destructuring
const geriinHayag = {
  uls: "Монгол",
  hot: "УБ",
  duureg: "БГД",
};

// const uls = geriinHayag.uls;
// const hot = geriinHayag.hot;
// const duureg = geriinHayag.duureg;
// дээрх байдлаар хандаж хувьсагчинд хадгалсныг destructuring ашиглан доорх байдлаар бичнэ.
// const { duureg, hot, uls } = geriinHayag;
// object-ийн ганц утгыг авахаар бол:
// const { duureg } = geriinHayag;
// object-ийн ганц утгыг property-ний нэрнээс өөр нэр өгөх хэрэгтэй бол:
// const { hot: city } = geriinHayag;

// №7. Spread Operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const negtgesen = first.concat(second);
// console.log(negtgesen);
// const SpreadOperatorAshiglanNegtgesen = [...first, "a", "z", ...second, "b"];
// console.log(SpreadOperatorAshiglanNegtgesen);
// Object дээр spread operator хэрэглэх нь:
const toirog = {
  radius: 10,
  zuzaan: "10cm",
};

const ongotoiToirog = {
  ...toirog,
  color: "black",
};

// console.log(ongotoiToirog);

// Дараа үзэх es6 нэмэлтүүд
// Classes;
// Promise;
