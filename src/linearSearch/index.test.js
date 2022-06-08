// import module index.js' into this test file
const linearSearch = require(`../linearSearch/index`);

// test code for linearSearch function
describe("linearSearch", () => {
  // title for the test conditions  using it method
  it("should return index when index of the number exists", () => {
    // expected output from function
    const expected = 1;
    // function called and passed in with argument value
    const actual = linearSearch(10);
    // test will check if conditions of test is true
    expect(actual).toEqual(expected);
  });
  // title for the test conditions  using it method
  it("should return the message when the number doesn't exists", () => {
    // expected output from function
    const expected = "the number does not exist";
    // function called and passed in with argument value
    const actual = linearSearch(100);
    // test will check if conditions of test is true
    expect(actual).toEqual(expected);
  });
  // title for the test conditions using it method
  it("should return the first occurrence of index when there are more than one occurrences", () => {
    // expected output from function
    const expected = 1;
    // function called and passed in with argument value
    const actual = linearSearch(10);
    // test will check if conditions of test is true
    expect(actual).toEqual(expected);
  });
});
