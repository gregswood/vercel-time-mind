const examples = document.querySelectorAll(
  "[data-example]",
) as NodeListOf<HTMLElement>;

const seeAll = document.querySelector("[data-see-all]") as HTMLElement;

import("./components/see-all").then(({ SeeAll }) => {
  new SeeAll(seeAll);
});

if (examples.length > 0) {
  import("./components/example").then(({ Example }) => {
    examples.forEach((item) => {
      new Example(item);
    });
  });
}
