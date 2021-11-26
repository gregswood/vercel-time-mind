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

const navigationButtons = document.querySelectorAll(
  "[data-navigateButton]",
) as NodeListOf<HTMLElement>;

import("./components/page-changer").then(({ Navigator }) => {
  navigationButtons.forEach((item) => {
    new Navigator(item, item.dataset.page);
  });
});
