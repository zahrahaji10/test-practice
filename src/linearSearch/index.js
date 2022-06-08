// main function to execute which

const linearSearch = (number) => {
  // declare a variable as an array with numbers
  const linearSearchArray = [65, 10, 23, 7, 88, 6, 8, 10];
  // use for loop to loop though the array
  for (let i = 0; i < linearSearchArray.length; i++) {
    // if conditional statement is true
    if (number === linearSearchArray[i]) {
      // return index number
      return i;
    }
  }
  // if conditional statement is false return
  return "the number does not exist";
};

// export this module so that it can be imported by 'index.test.js'
module.exports = linearSearch;
