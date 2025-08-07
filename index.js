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
// window.onload = function () {
//   console.log(document.querySelector("#year"))
//   document.querySelector("#year_btn").addEventListener("click", function () {
//     const year = parseInt(document.querySelector("#year").value)
//     // 該年份為400的倍數，或者為4的倍數，但不可以是100的倍數
//     let result
//     if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//       result = "閏年"
//     } else {
//       result = "不是閏年"
//     }
//     console.log(year)
//     document.querySelector("#answer").innerHTML = result
//   })
// }

// const isTriangle = function (a, b, c) {
//   return a + b > c && a + c > b && b + c > a
// }
// // 三角形特性，兩邊相加大於第三邊
// console.log(isTriangle(1, 2, 3)) // false
// console.log(isTriangle(3, 4, 5)) // true

// const countBMI = function (height, weight) {
//   // 體重 / 身高平方(M)
//   return weight / (height * height)
// }
// let bmi = countBMI(1.7, 60)
// console.log(bmi)
// console.log(countBMI(1.7, 60))

// 判斷大小的函式
// const whichIsBig = function (a, b) {
//   if (a > b) {
//     return a
//   } else if (b > a) {
//     return b
//   }
// }
// whichIsBig(1, 2)

// 成績判斷
// 95-100 return A+
// 90-94 return A
// 80-89 return B
// 70-79 return C
// 0-69 return D
// const checkScore = function (score) {
//   if (score >= 95 && score <= 100) {
//     return "A+"
//   }
//   if (score >= 90 && score <= 94) {
//     return "A"
//   }
//   if (score >= 80 && score <= 89) {
//     return "B"
//   }
//   if (score >= 70 && score <= 79) {
//     return "C"
//   }
//   if (score <= 69) {
//     return "D"
//   }
// }

// // 99乘法表
// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     // 2 * 3 = 6
//     // console.log(i + "*" + j + "=" + i * j)
//     console.log(`${i} * ${j} = ${i * j}`)
//   }
// }
// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   sayName() {
//     console.log(this.name)
//   }
// }

// const jac = new Person("jac", 20)
// jac.sayName() // jac
// const mary = new Person("mary", 21)
// mary.sayName() // mary

console.log("Hello world".length)
console.log("Hello world".substring(0, 3))
console.log("Hello world".toUpperCase())
const word = "hello world"

console.log(
  word.substring(0, 1).toUpperCase() + // H
    word.substring(1, word.length) // ello world
)

// string
// console.log("1,jac,wang,21;2,mary,yang,22".split(";"))

// xml
{
  /* <students>
  <student>
    <firstname>jac</firstname>
    <age>21</age>
  </student>
  <student>
    <firstname>mary</firstname>
    <age>22</age>
  </student>
</students> */
}

// json
const students = [
  {
    name: "jac",
    age: 21,
    sayName: function () {
      console.log(this.name)
    },
  },
  {
    name: "mary",
    age: 22,
    sayName: function () {
      console.log(`my name is ${this.name}`)
    },
  },
]
for (let i = 0; i < students.length; i++) {
  // console.log(students[i].name)
  students[i].sayName()
}
// console.log(JSON.stringify(students))
