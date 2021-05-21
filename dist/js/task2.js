"use strict";

// 1-й вариант - цикл и операция деления
function drawRating(vote) {

  if (vote < 0 || vote > 100) {
    return 'no rating';
  }

  let str = '';
  const resOfDivide = vote / 20;
  for (let i = 0; i < 5; i++) {
    // vote === i && vote === 0 - условие для нуля
    str += resOfDivide > i || vote === i && vote === 0 ? '★' : '☆';
  }

  return str;
}

// 2-ой вариант со switch/case
// function drawRating(vote) {

//   switch (true) {
//     case vote >= 0 && vote <= 20:
//       return '★☆☆☆☆';
//     case vote > 20 && vote <= 40:
//       return '★★☆☆☆';
//     case vote > 40 && vote <= 60:
//       return '★★★☆☆';
//     case vote > 60 && vote <= 80:
//       return '★★★★☆';
//     case vote > 80 && vote <= 100:
//       return '★★★★★';
//     default:
//       return 'no rating';
//   }

// }

// Проверка работы результата
for (let i = 0; i <= 100; i++) {
  console.log(i, drawRating(i));
}

console.log(drawRating(0)); // ★☆☆☆☆
console.log(drawRating(1)); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★