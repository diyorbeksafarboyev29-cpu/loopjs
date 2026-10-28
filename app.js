// uyga vazifa masalalar

//============================================================================================

// 1-masala. Sonlarni chiqarish
// Qiyinlik: 1/10
// for loop yordamida 1 dan 10 gacha bo‘lgan sonlarni konsolga chiqaring.
// Kutilgan natija: 1 2 3 4 5 6 7 8 9 10

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//============================================================================================================

// 2-masala. Juft sonlar
// Qiyinlik: 2/10
// 1 dan 30 gacha bo‘lgan sonlar orasidan faqat juft sonlarni konsolga chiqaring.
// Shart: if va % operatoridan foydalaning.

// for (let i = 1; i <= 30; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//======================================================================================

// 3-masala. Sonlar yig‘indisi
// Qiyinlik: 3/10
// 1 dan 50 gacha bo‘lgan barcha sonlarning yig‘indisini hisoblang.
// Yordam: yig‘indini saqlash uchun let sum = 0 o‘zgaruvchisini yarating.

// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//   sum += i;
// }

// console.log(sum);

//============================================================================================

// 4-masala. Toq sonlar yig‘indisi
// Qiyinlik: 4/10
// 1 dan 100 gacha bo‘lgan toq sonlarning yig‘indisini hisoblang va natijani konsolga chiqaring.
// Shart: for, if va % operatorlaridan foydalaning

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 1) {
//     sum += i;
//   }
// }

// console.log(   "yig'indi = ", sum);

//===================================================================================================

// 5-masala. 3 ga bo‘linadigan sonlar
// Qiyinlik: 5/10
// 1 dan 100 gacha bo‘lgan sonlar ichidan 3 ga qoldiqsiz bo‘linadigan sonlarni chiqaring. Shu
// sonlarning nechta ekanini ham aniqlang

// let son = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//     son++;
//   }
// }
// console.log("toq sonlar soni = ", son);

//====================================================================================

// 6-masala. Sonning ko‘paytirish jadvali
// Qiyinlik: 5/10
// let number = 7 deb o‘zgaruvchi yarating. Loop yordamida shu sonning 1 dan 10 gacha ko‘paytirish
// jadvalini chiqaring.
// Masalan: 7 x 1 = 7, 7 x 2 = 14 va hokazo

// let number = 7;

// for (let i = 1; i <= 10; i++) {
//   console.log(number + "*" + i + "=" + number * i);
// }

//========================================================================================================

// 7-masala. Musbat va manfiy sonlar
// Qiyinlik: 6/10
// let number = -15 deb o‘zgaruvchi yarating. Agar son musbat bo‘lsa, 1 dan shu songacha bo‘lgan
// sonlarni chiqaring. Agar son manfiy bo‘lsa, uning modulini aniqlab, 1 dan shu songacha bo‘lgan
// sonlarni chiqaring. Agar son 0 bo‘lsa, “Son nolga teng” xabarini chiqaring.
// Eslatma: Math.abs() ishlatmasdan ham yechishga harakat qiling.

// let number = 29;
// let number = -20;

// if (number > 0) {
//   for (let i = 1; i <= number; i++) {
//     console.log(i);
//   }
// } else if (number < 0) {
//   number = -number;
//   for (let i = 1; i <= number; i++) {
//     console.log(i);
//   }
// } else {
//   console.log("son nolga teng ");
// }

//=======================================================================================================

// 8-masala. Raqamni topish
// Qiyinlik: 6/10
// let secretNumber = 8 deb belgilang. 1 dan 10 gacha bo‘lgan sonlarni loop yordamida tekshiring. Son
// secretNumber ga teng bo‘lsa, “Son topildi” deb chiqaring. Qolgan sonlar uchun “Bu son emas” deb
// chiqaring.
// Qo‘shimcha shart: son topilgandan keyin loopni break yordamida to‘xtating.

// let secretNumber = 10;

// for (let i = 1; i <= 10; i++) {
//   if (i == secretNumber) {
//     console.log("son topildi ");
//   } else {
//     console.log("bu son emas ");
//   }
// }
