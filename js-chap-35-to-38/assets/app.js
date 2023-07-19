// Q1///

// let currentDate = new Date();
// document.write(currentDate);

// Q2//

// function greetUser(firstName, lastName) {
//     const fullName = firstName + ' ' + lastName;
//     console.log('Hello, ' + fullName + '! How are you today?');
//   }
//   greetUser('Adeeba', 'Khan');

// Q3//

// function add(){
//      let user1 = +prompt("Enter the first number");
//      let user2 = +prompt("Enter the second number");
//      let sum = user1 + user2;
//       return sum;
//      }
//      let result =add();
//     console.log("The sum is "+ result);


// Q4//

  
// function calc (num1,oper,num2){
//         if(oper === "+"){
//             return num1 + num2
//         }else if(oper ==="-"){
//             return num1 - num2
//         }else if(oper ==="*"){
//             return num1 * num2
//         }else if(oper ==="/"){
//             return num1 / num2
//         }else{
//             return "Incorrect operator!"
//         }
//     }
//     let result = calc(2, "+" ,2 );
//     let result2 = calc(5, "-" ,2 );
//     let result3 = calc(3, "*" ,2 );
//     let result4 = calc(8, "/" ,2 );
//     let Incorrect = calc (3, "$" ,3 );
//     document.write(result+"<br>");
//     document.write(result2 +"<br>");
//     document.write(result3 +"<br>");
//     document.write(result4 +"<br>");
//     document.write(Incorrect);

// Q5//

// function square(number) {
//     return number * number;
//   }
//   const result = square(5); 
// console.log(result);

// const anotherResult = square(10); 
// console.log(anotherResult);

// Q6//

// function factorial(number) {
//         if (number === 0 || number === 1) {
//           return 1;
//         }
      
//         let result = 1;
//         for (let i = 2; i <= number; i++) {
//           result *= i;
//         }
      
//         return result;
//     }
//     let inputNumber = parseInt(prompt("Enter a number:"));
//     let result = factorial(inputNumber);
//     document.write("The factorial of " + inputNumber + " is: " + result);
    

// Q7//

// function count(start, end) {
//     for (var i = start; i <= end; i++) {
//         console.log(i);
//     }
// }
// count(1, 10);

// Q8//


// function calculateHypotenuse() {
//     var base = +prompt("enter base value of right angle triangle", "30");
//     var perpendicular = +prompt("enter perpendicular value of right angle triangle", "10");

//     function square(n) {
//         return n * n;
//     }
//     return "Hypotenuse of a right angle triangle is: " + (square(base) + square(perpendicular));
// }
// alert(calculateHypotenuse());


// Q9//

// function calculateRectangleArea(width, height) {
//         let area = width * height;
//         return area;
//       }
//       let area1 = calculateRectangleArea(5, 6);
//       console.log("The area of the rectangle is: " + area1);
//       function calculateRectangleArea(width, height) {
//         let area = width * height;
//         return area;
//       }
//       let rectangleWidth = 5;
//       let rectangleHeight = 6;
//       let area2 = calculateRectangleArea(rectangleWidth, rectangleHeight);
//       console.log("The area of the rectangle is: " + area2);

// Q10//

// function isPalindrome() {
//     var palindrome = prompt("Please enter a palindrome", "madam");
//     palindrome = palindrome.toLowerCase();
//     var reverse = palindrome.split('').reverse().join('');
//     console.log(reverse);
//     if (reverse === palindrome) {
//         return "The given string " + palindrome + " is a palindrome.";
//     }
//     else {
//         return "The given string " + palindrome + " is not a palindrome.";
//     }
// }

// alert(isPalindrome());


// Q11//

// function capitalizeWords(str) {
//       let words = str.split(' ');
//       for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//       }
//       let capitalizedStr = words.join(' ');
//       return capitalizedStr;
//     }
//     let inputString = prompt("Enter an input string:");
//     let result = capitalizeWords(inputString);
//     document.write("Original string: " + inputString + "<br>");
//     document.write("Capitalized string: " + result);

// Q12//

// function findLongestWord(str) {
//       let words = str.split(' ');
//       let longestWord = '';
//       for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//           longestWord = words[i];
//         }
//       }
//       return longestWord;
//     }
//     let inputString = prompt("Enter a sentence:");
//     let result = findLongestWord(inputString);
//     document.write("Original string: " + inputString + "<br>");
//     document.write("Longest word: " + result);
    

// Q13//

// function findChar(n1, n2) {
//     var n1 = n1.toLowerCase();
//     var count = 0;
//     for (var i = 0; i < n1.length; i++) {
//         if (n1.charAt(i) === n2) {
//             ++count;
//         }
//     }
//     return "The occurrence of " + n2 + " is " + count;
// }

// alert(findChar("Areesha Khan", "a"));

// Q14//

// function calcCircumference(radius) {
//         let circumference = 3 * Math.PI * radius;
//         console.log("The circumference is " + circumference.toFixed(3));
//       }
//       function calcArea(radius) {
//         let area = Math.PI * radius * radius;
//         console.log("The area is " + area.toFixed(3));
//       }
//       calcCircumference(4);
//       calcArea(4);

    
    
  

  