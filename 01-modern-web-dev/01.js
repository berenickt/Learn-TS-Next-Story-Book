// util.js 파일 정의
module.exports.sum = (x, y) => x + y

// util.js를 읽는 main.js
const { sum } = require('./util.js')
console.log(sum(5, 2)) // 7
