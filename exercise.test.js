// exercise.test.js
import { add, subtract, multiply, divide, multiplyBig } from "./exercise";

describe("add function", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });
  // Add more test cases based on your exercise requirements
});

describe("subtract function", () => {
  test("subtracts 5 - 3 to equal 2", () => {
    expect(subtract(5, 3)).toBe(2);
  });
});

describe("multiply function", () => {
  test("multiplies 5 * 3 to equal 15", () => {
    expect(multiply(5, 3)).toBe(15);
  });
});

describe("divide function", () => {
  test("divides 6 / 3 to equal 2", () => {
    expect(divide(6, 3)).toBe(2);
  });
});
