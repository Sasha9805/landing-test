"use strict";

function drawRating(vote) {

  if (vote < 0 || vote > 100) {
    return;
  }

  let str = '';
  for (let i = 0; i < 5; i++) {
    // vote === i && vote === 0 - условие для нуля
    str += vote / 20 > i || vote === i && vote === 0 ? '★' : '☆';
  }

  return str;
}

// Проверка работы результата
for (let i = 0; i <= 100; i++) {
  console.log(i, drawRating(i));
}

console.log(drawRating(0)); // ★☆☆☆☆
console.log(drawRating(1)); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★