// let myarr = [1,2,2,3,4,4,5,6,6]
// document.write(myarr + "<br>")
// for (let i = myarr.length - 1; i >= 0; i--) {
//     if (myarr.indexOf(myarr[i]) !== i) {
//         myarr.splice(i,1)
//     }
// }
// document.write(myarr)


// let input = prompt("Enter any positive integer.")
// document.write(`number:${input} <br>round off value:${Math.round(input)}<br>floor value:${Math.floor(input)}<br>ceil value:${Math.ceil(input)}<br>`)


// let input = prompt("Enter any negative integer.")
// document.write(`number:${input} <br>round off value:${Math.round(input)}<br>floor value:${Math.floor(input)}<br>ceil value:${Math.ceil(input)}<br>`)


// let input = prompt("Enter any positive floating integer.")
// document.write(`number:${input} <br>round off value:${Math.round(input)}<br>floor value:${Math.floor(input)}<br>ceil value:${Math.ceil(input)}<br>`)


// let input = prompt("Enter any negative floating integer.")
// document.write(`number:${input} <br>round off value:${Math.round(input)}<br>floor value:${Math.floor(input)}<br>ceil value:${Math.ceil(input)}<br>`)

// let input = prompt("Enter any negative integer.")
// document.write(`the absolute value of ${input} is ${Math.abs(input)}`)


// let dice = Math.ceil(Math.random() * 6)
// document.write(`random dice value: ${dice}`)


// let num = Math.ceil(Math.random() * 2)
// let toss = "head"
// if (num == 1) {
//     toss = "tail"
// }
// document.write(`random coin value: ${toss}`)

// let num = Math.ceil(Math.random() * 100)
// document.write(`random number betwwen 1 and 100: ${num}`)

// let input = +prompt("Enter your weight.")
// document.write(`${input} kilogram`)

// let num = Math.ceil(Math.random() * 10)
// let input = +prompt("Enter any number.")
// if (num == input) {
//     document.write(`congratulation!! you guessed the right number..${num}`)
// }else{
//     document.write(`you guessed the wronge number. <br>Right number: ${num}`)
// }


// let date = new Date()
// document.write(date)


// let mouths = ["jan","feb","mar","april","may","june","july","august","sep","oct","nov","dec"]
// let mouth = new Date().getMonth()
// document.write("Current months "+ mouths[mouth])


// let days = ["sun","mon","tue","wed","thu","fri","sat"]
// let day = new Date().getDay()
// document.write(days[day])

// let day = new Date().getDay()
// if(day == 0 || day == 6 ){
//     document.write("it's fun day.")
// }else{
//     document.write("it's not fun day.")
// }


// let date = new Date().getDate()

// if (date <= 15) {
//     document.write(`First fifteen days of month.`)
// } else {
//     document.write(`last fifteen days of month.`)
// }


// let date = new Date()
// document.write(`Current Date:${date}<br>Elapset millisecinds since january 1, 1970: ${date.getTime()}<br>Elapset minutes since january 1, 1970: ${date.getTime() / 1000}`)


// let hour = new Date().getHours()
// if (hour <= 11) {
//     document.write("it's AM")
// } else {
//     document.write("it's PM")
// }

// let date = new Date("31 dec, 2020")
// document.write(`Later Date: ${date}`)


// let date = new Date("11 mar, 2024").getTime()
// let date1 = new Date().getTime()
// let finalDate = (date1 - date) / (1000 * 60 * 60 * 24)
// document.write(`${Math.floor(finalDate)} days have passed since 1st ramdan, 2024`)


// let date = new Date("5 dec, 2015")
// let date1 = new Date().getTime()
// document.write(`On refeference date ${date}, ${Math.floor((date1 - (date).getTime())/1000)} Seconds had passed dince begining of 2015`)


let date = new Date()
let hour = date.getHours()
date.setHours(hour - 1)
document.write(`Current Date: ${new Date()}<br>1 hour ago, it was ${date}`)


// let date = new Date()
// alert(`Current Date: ${date}\n100 year back, it was: ${new Date("march 1, 1925")}`)

// let input = +prompt("Enter your age.")
// let date = new Date().getFullYear()
// document.write(`Your age is ${input}<br>Your birth year is ${date - input}`)


// let name = "Muddasir Butt"
// let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// let currMonth = months[new Date().getMonth()]

// let units = 410
// let charges = 16
// let late = 350
// let net = units * charges
// let gross = net + late

// document.write(`Customer Name: <b>${name}</b><br>Current Month: <b>${currMonth}</b><br>Number of units: ${units}<br>Charges per unit: ${charges}<br><br>Net Amount Payable (within Due Date): ${net}<br>Late Payment Surcharge: ${late}<br>Gross Amount Payable (after Due Date): ${gross}`)

