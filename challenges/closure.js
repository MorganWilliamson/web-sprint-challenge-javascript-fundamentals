// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// The internal variable is accessible because a function can reach one level deeper into itself, and that combined with the inner layer pushing information back up to its parent allows the console.log to work. myFunction is invoking nestedFunction, which is just console.log-ing the internal variable. 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function counting(){
  for(let i = 0; i < 10; i++){
    return i;
  };
};

function summation(num){
  let counting = [];
  counting.reduce(function(accumulator, item){
    return accumulator + item.num;
  }, 0)
};
console.log(summation(4));
