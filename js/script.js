// let i = 0;
// function rec() {
//     console.log(i++);
//     if (i <= 10) {
//         setTimeout(() => {
//             rec()
//         },1000);
//     }
// }

// vaqt bilan ishlash

let date = new Date()
console.log(date)

let day = new Date().getDate()
console.log(day)

let month = new Date().getMonth() + 1
console.log(month)

let year = new Date().getFullYear()
console.log(year)

let Hours = new Date().getHours()
console.log(Hours)

let minutes = new Date().getMinutes()
console.log(minutes)

let seconds = new Date().getSeconds()
console.log(seconds)