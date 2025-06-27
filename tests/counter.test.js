import { incrementCounter } from "../src/counter";
import { expect, test } from "vitest";

test("adds 1 to current value", () => {
  expect(incrementCounter(0)).toBe(1);
});

test("adds 1 to negative numbers", () => {
  expect(incrementCounter(-2)).toBe(-1);
});
