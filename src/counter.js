let counter = 0;

export function init(element) {
  element.innerHTML = `count is ${counter}`;

  element.addEventListener("click", () => {
    counter = incrementCounter(counter);
    element.innerHTML = `count is ${counter}`;
  });
}

export const incrementCounter = (count) => {
  return (count += 1);
};
