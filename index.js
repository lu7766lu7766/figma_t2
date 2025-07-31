console.log("hello world!")
0.5
1
;("use strict")
;("jhhjgj")
true
false

// let number = 2 // .toFixed(2) // "2.00" 2 "2.01" 2.01
// const name = "jac"
// number = 3
// let temp = number
// console.log(temp)
// number = 4
// temp = number
// console.log(name)

// practice
// let a = 10
// let b = 20
// let c
// c = a
// a = b
// b = c
// //
// console.log(a, b)

// == != && || > < 邏輯運算子
let a = 10
let b = 20
// console.log(a == 10)
// console.log(a != 10)
// console.log(a == 10 && b == 20)
// console.log(a == 10 || b == 10)
// console.log(a <= 10 && b >= 20)

// 算術運算子
// + - * / %
// console.log("1" + "2")
// console.log(1 + 2)
// console.log(2 - 1)
// console.log(2 * 3)
// console.log(6 / 2)
// console.log(5 % 2)

// if (a == 10) {
//   console.log("a is 10")
// } else if (a == 11) {
//   console.log("a is 11")
// } else if (a == 15) {
//   console.log("a is 15")
// } else {
//   console.log("a is not equal 10 and 15")
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }
// console.log("for loop end")

// let double = function (num1, num2) {
//   // num = num || 1 // 如果沒有傳入參數，預設為 1
//   return num1 * 2
// }
// let c = double(2, 3) // 4
// console.log(c)
// let sayMyName = function (name) {
//   console.log("My name is " + name)
// }
// sayMyName("jac")
// sayMyName("mary")
// sayMyName("ming")
// sayMyName("john")
// console.log(document.querySelector("#year"))
window.onload = function () {
  console.log(document.querySelector("#year"))
  document.querySelector("#year_btn").addEventListener("click", function () {
    const year = parseInt(document.querySelector("#year").value)
    // 該年份為400的倍數，或者為4的倍數，但不可以是100的倍數
    console.log(year)
    document.querySelector("#answer").innerHTML = year
  })
}
