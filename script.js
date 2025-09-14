console.log("%cJS Lab Connected — Start completing the TODOs!", "font-weight:bold; font-size:14px");
//ABDELMAGID OSMAN
//201837680
//MISTAKENLY I PUSHED IT FIRST ON AN OPEN ACCOUNT
// ==========================
// TODO-2: SYNTAX & VARIABLES
// ==========================

// Task 2.1 — declare & reassign
// Create let course = "CIS101"; display it usinng console.log(course), reassign to "CIS102"; display it again.
// write code here
let  course = "CIS101";
console.log(course);
course="CIS102";
console.log(course);
// Task 2.2 — const safety
// Create const SCHOOL = "MyCollege"; then TRY to reassign it and observe the Console error. Add a comment explaining    why  reassignment fails.
// NOTE: For now, keep the reassignment line commented so the file runs without errors.
// const SCHOOL = "MyCollege";
// SCHOOL = "OtherCollege"; // <-- Uncomment to see the error, then re-comment after testing
const SCHOOL = "MyCollege";
// SCHOOL = "OtherCollege"; // <-- Uncomment to see the error, then re-comment after testing
// Reassignment failing because the constants can not be changed when they are made.


// ==========================
// TODO-3: ARITHMETIC & TYPES
// ==========================

// Task 3.1 — arithmetic basics
// Given let x = 8, y = 3; log x+y, x-y, x*y, x/y, x%y.
// write code here
let x = 8,y = 3;console.log(x+y);console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

// Task 3.2 — number vs string
// Display results of "2" + 3, 2 + "3", and 2 + 3. Add a short comment: why do the first two concatenate?
// write code here
console.log("2" + 3);
console.log(2 + "3");
console.log(2 + 3); 
// they concatente because I believe if the first value is string it will convert the second to string and join them with each other.

// Read chapter 4 in zyBooks: Compound Assignment Operators



// ==========================
// TODO-4: CONDITIONALS (CORE)
// ==========================

// Task 4.1 — else-if ladder
// Write a program that checks a user's age (take age input from user).
//       Use if–else if–else statements to categorize and log:
//         - "Child" if age < 13
//         - "Young" if age is between 13 and 35
//         - "Aged" if age > 35
// write code here
    let age = prompt('Enter the age');
    if(age<13){console.log("Child");}
    else if(age>=13 && age<=35){console.log("Young");}
    else if(age>35){console.log("Aged");}

// Task 4.2 — Switch statement
// Create a variable let day = "Mon".
//       Use a switch statement to check the value of day.
//         - If it is "Mon", "Tue", "Wed", "Thu", or "Fri", log "weekday".
//         - If it is "Sat" or "Sun", log "weekend".
//         - For any other value, log "unknown".
// write code here
let day = "Mon"; 
switch(day){case "Mon":
case "Tue":
case "Wed":
    case"THu":  
    case"Fri":console.log("weekday");break;
    case"Sat":
    case"Sun":console.log("weekend");break;
    default:console.log("error");
}
// Read Chapter 4 in zyBooks: Conditional (ternary) operator

// ===============
// TODO-5: LOOPS
// ===============

// Task 5.1 — for loop sum
// TODO: Sum integers 1..10 with a for loop; display the result of total sum.
// write code here
let sum = 0;
for(let i=1;i<=10;i++){sum+=i;} console.log(sum);

// Task 5.2 — while loop
// let t = 3; while(t > 0), decrement the value t variable in each iteration and display the result.
// write code here
let t = 3;while(t > 0){console.log(t);
    t--;}

// Read Chapter 4 in zyBooks: Do-While Loop
// write code here
let m = 3; do{console.log(m);
    m--;}while(m > 0);

// =============================
// TODO-6: FUNCTIONS (DECL, RETURN, ARROW)
// =============================

// Task 6.1 — pure function + return
// Make a function add(a,b){ return a+b; } display the result of add(2,5).
// write code here
function add(a,b){ return a+b; }console.log(add(2,5));

// Task 6.2 — Arrow functions
// Make an arrow function; const cube = n => n*n*n; cube(3)
// write code here
const cube = n => n*n*n; 
console.log(cube(3));

// =================================
// TODO-7: SCOPE & GLOBAL OBJECT (ESSENTIALS)
// =================================

// Task 7.1 — var vs let scope
// Declare var a = 1; let b = 2 inside a block { },  then try displaying both outside the block; observe differences.
// write code here
{var a = 1; let b = 2;}
console.log(a); // works
// console.log(b); // b will not work 
// ==================
// TODO-8: ARRAYS (CORE)
// ==================

// Task 8.1 — create & mutate
// TODO: let nums = [3,1,4]; then push(1), unshift(9), pop(); log final array and length.
// write code here
let arr = [3,1,4];
arr.push(1);
arr.unshift(9);
arr.pop();
console.log(arr);
console.log(arr.length);

// End of manual — great job! Keep this file open and work task by task.