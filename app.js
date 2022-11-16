// console.log("aaa");
// js хичээлийн сэдвүүд:
// tsaniltsuulga
// нөхцөл шалгах
// давталт
// function
// massiv
// object
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
var nas = +prompt("nasaa oruulna uu?");
// if (nas <= 18) {
//   console.log("huuhed");
// } else {
//   console.log("tom hun");
// }

if (nas <= 12) {
  console.log("huuhed");
} else if (nas > 12 && nas <= 18) {
  console.log("oswor nasnii huuhed");
} else {
  console.log("tom hun");
}

/* Дасгал №3:
Гараас насаа оруулах үед Imgs folder доторх насны үечлэл зургийн дагуу өнөөдрийн хичээлээр үзсэн if statement ашиглан тухайн настай хүнийг аль үечлэлд хамрагдаж байгааг олох програм бичиж ирээрэй.
*/

/* Дасгал №4:
Гараас 2ш тоо өгөгдсөн ба, хэрэв тэдгээрийн үржвэр 1000-с их бол үржвэрийг хэвлэж, 1000-с бага бол нийлбэрийг хэвлэ. */

/* Дасгал №5:
Гурвалжны суурь болон өндөр өгөгдсөн бол тухайн гурвалжны талбайг ол. 
томьёо: (суурь * өндөр) / 2 */
