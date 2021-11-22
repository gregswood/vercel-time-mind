const examples = document.querySelectorAll(
  "[data-example]",
) as NodeListOf<HTMLElement>;

if (examples.length > 0) {
  import("./components/example").then(({ Example }) => {
    examples.forEach((item) => {
      new Example(item);
    });
  });
}
