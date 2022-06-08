// your code goes here

// const linearSearchArray = [65, 76, 23, 7, 88, 6, 8, 8];

const linearSearch = (number) => {
  const linearSearchArray = [65, 10, 23, 7, 88, 6, 8, 10];
  for (let i = 0; i < linearSearchArray.length; i++) {
    if (number === linearSearchArray[i]) {
      return i;
    }
  }
  return "the number does not exist";
};

// export
module.exports = linearSearch;
