const linearSearch = require(`../linearSearch/index`);

describe("linearSearch", () => {
  it("should return index when index of the number exists", () => {
    const expected = 1;
    const actual = linearSearch(10);

    expect(actual).toEqual(expected);
  });

  it("should return the message when the number doesn't exists", () => {
    const expected = "the number does not exist";
    const actual = linearSearch(100);
    expect(actual).toEqual(expected);
  });

  it("should return the first occurrence of index when there are more than one occurrences", () => {
    const expected = 1;
    const actual = linearSearch(10);
    expect(actual).toEqual(expected);
  });
});
