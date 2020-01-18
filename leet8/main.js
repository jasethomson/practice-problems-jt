function countLetters(S) {
  let answer = 0
  let repeat = 1
  for (let i = 0; i < S.length - 1; i++) {
    if (S[i] !== S[i + 1]) {
      answer += repeat * (repeat + 1) / 2
      repeat = 0
    }
    repeat++
  }
  return answer + repeat * (repeat + 1) / 2
}
console.log(countLetters("aaaba"));
console.log(countLetters("aaaaaaaaaa"));
