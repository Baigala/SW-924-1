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

// өгөгдлийн 5 төрөл
// 1. number - 123456789
// 2. string - "hi" 'hello'
// 3. boolean - true, false
// 4. null
// 5. undefined

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
// if (nas <= 18) {
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
let string = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5 - i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

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
function toogNemeh2(too1, too2) {
  console.log(too1 + too2);
}
toogNemeh2(2, 5);
// toogNemeh2(15, 4);
// toogNemeh2(15, 4);
// toogNemeh2(15, 4);

// return hiideg function ==>
function toogNemeh3(too1, too2) {
  var niilber = too1 + too2;
  return niilber;
}
console.log(toogNemeh3(4, 5) * 2);

/* Дасгал №13:
Гараас 2ш тоо өгөгдсөн ба, хэрэв тэдгээрийн үржвэр 1000-с их бол үрвэрийг буцааж, 1000-с бага бол нийлбэрийг буцаа */

/* Дасгал №14:
 Гараас тоо өгөгдсөн бол тухайн тоо хүртэлх нийлбэрүүүдийг олж буцаа. */

/* Дасгал №15:
Гурвалжны суурь болон өндөр өгөгдсөн бол тухайн гурвалжны талбайг олж буцаа. 
томьёо: (суурь * өндөр) / 2 */
