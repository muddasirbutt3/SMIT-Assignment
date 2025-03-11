// function func() {
//     document.write("Hello World")
// }
// func()

// function date() {
//    document.write(new Date())
// }
// date()

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// function greet(name1,name2) {
//    document.write(Welcome! ${name1} ${name2});
// }
// greet(firstName,lastName)

// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");
// function sum(num1,num2) {
//    return num1 + num2;
// }
// document.write(sum(num1,num2))

// let oper1 = +prompt("Enter first number");
// let oper2 = +prompt("Enter second number");
// let operator = prompt("Enter operator");
// function calculate(num1,num2,oper) {
//    document.write(Ans: ${eval(num1 + oper + num2)});
// }
// calculate(oper1,oper2,operator)

// let num1 = +prompt("Enter number for square.");
// function square(num) {
//    document.write(Ans: ${num*num})
// }
// square(num1)

// let num1 = +prompt("Enter number for factorial.");
// function factorial(num) {
//    let ans = 1;
//    for (let i = 1; i <= num; i++) {
//       ans *= i;
//    }
//    document.write(Ans: ${ans})
// }
// factorial(num1)

// let start = +prompt("Enter start number");
// let end = +prompt("Enter end number");
// function count(start,end) {
//    for (let i = start; i <= end; i++) {
//       document.write(${i} <br>);

//    }
// }
// count(start,end)

// let base = +prompt("Enter base of triangle");
// let perpend = +prompt("Enter perpend of triangle");
// function calculateHypotenuse(base,perpend) {
//    function calculateSquare(){
//       return base*base + perpend*perpend
//    }
//    return Math.floor(Math.sqrt(calculateSquare()));
// }
// document.write(calculateHypotenuse(base,perpend))

// question no 10

// question no 11

// let width = +prompt("Enter width of rectangle");
// let height = +prompt("Enter height of rectangle");
// function calculateArea(width,height) {
//    return width*height
// }
// document.write(Area of rectangle is: ${calculateArea(width,height)})

// let myarr = [1,10,5,2,6,4,9,7,8];
// function sortArr(arr) {
//     return arr.sort((a,b) => a-b)
// }
// document.write(sortArr(myarr))

// let myarr = [1,10,5,2,6,4,9,7,8];
// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// document.write(sum(myarr))

// var param = function inner() {
//     return typeof inner;
// }
// alert(param());

// function pow(base,power) {
//     let pre = base;
//     if (power == 0) {
//         return 1;
//     }else{
//         for (let i = 1; i < power; i++) {
//             pre *= base;
//         }
//     }
//     return pre
// }
// document.write(pow(2,3))

// function dice() {
//     return Math.floor(Math.random()*6 + 1)
// }
// document.write(dice())

// let num1 = prompt("Enter number");
// function reversed(num) {
//     let rev = '';
//   for (let i = num.length - 1; i >= 0; i--) {
//     rev += num[i];
//   }
//     return rev;
// }
// document.write(reversed(num1));

// let input = prompt("Enter palindrome");
// let rev = '';
// function palindrome(word) {
//    for (let i = word.length - 1; i >= 0; i--) {
//       rev += word[i];
//    }
//    if (rev == word) {
//       document.write(`the word ${word} is palindrome`)
//    }else{
//       document.write(`the word ${word} is not palindrome`)
//    }

// }
// palindrome(input)

// let word = 'the quick brown fox';
// function capital(word) {
//     let arr = word.split(' ');
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
//     }
//     return newArr.join(' ');
// }
// document.write(capital(word));

// let word = 'Web Development Tutoriala';
// function findLongWord(word) {
//     let arr = word.split(' ');
//     let long = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (long.length < arr[i].length) {
//             long = arr[i];
//         }
//     }
//     return long;
// }
// document.write(findLongWord(word));

// let word = 'The quick brown fox';
// function vowel(word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u') {
//             count++;
//         }
//     }
//     return count;
// }
// document.write(vowel(word));

// function typeTeller(word) {
//     return typeof word;
// }
// document.write(typeTeller('hello'));
// document.write(typeTeller(5));
// document.write(typeTeller(true));

// let word = 'thequickbrownfoxjumpsoverthelazydog';
// function findUnique(word) {
//     let arr = word.split('');
//     let unique = '';
//     for (let i = 0; i < arr.length; i++) {
//         if (unique.indexOf(arr[i]) == -1) {
//             unique += arr[i];
//         }
//     }
//     return unique;

// }
// document.write(findUnique(word));

// function countLetter(str,letter){
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == letter) {
//             count++;
//         }
//     }
//     return count;
// }
// document.write(countLetter('JSResourceS.com','o'));

// let dob = +prompt('Enter your brith year')
// function calculateAge(dob) {
//     let currYear = new Date().getFullYear()
//     document.write(`
//         <h1>Age Calculator</h1>
//         <p>current year: ${currYear}</p>
//         <p>birth year: ${dob}</p>
//         they are either ${currYear - dob} or ${currYear - dob - 1}
//         `)
// }
// calculateAge(dob)

// let age = +prompt("Enter your age");
// let maxAge = +prompt("Enter your max age");
// let snack = prompt("Enter your fav snack");
// let amount = +prompt("Enter amount of snack per day");

// function calculateSupply(age, amount, maxage, snack) {
//   document.write(`<h2>The Lifetime Supply Calculator</h2>
// Favorite Snack: ${snack}<br>
// Current Age: ${age}<br>
// Estimated Maximum Age: ${maxage}<br>
// Amount of snacks per day: ${amount}<br>
// You will need ${(maxage - age) * 365 * amount} ${snack} to last you until the ripe old age of ${maxage}`);
// }
// calculateSupply(age, amount, maxAge, snack)


// let radius = +prompt('Enter radius of circle');
// function calcCircumference(rad) {
//     let circumference = (2 * Math.PI * rad);
//     document.write(`The circumference is ${circumference.toFixed(2)}<br>`);
// }
// function calcArea(rad) {
//     let area = Math.PI * rad * rad;
//     document.write(`The area is ${area.toFixed(2)}<br>`);
// }
// calcCircumference(radius);
// calcArea(radius);

// let celsius = +prompt("Enter temperature in celsius");
// let fahrenheit = +prompt("Enter temperature in fahrenheit");
// function celsiusToFahrenheit(temp) {
//     let ans = (temp * 9/5) + 32;
//     document.write(`${temp}°C is ${ans.toFixed(2)}°F<br>`);
// }
// function fahrenheitToCelsius(temp) {
//     let ans = (temp - 32) * 5/9;
//     document.write(`${temp}°F is ${ans.toFixed(2)}°C<br>`);
// }
// celsiusToFahrenheit(celsius);
// fahrenheitToCelsius(fahrenheit);

