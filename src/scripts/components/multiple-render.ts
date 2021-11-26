export const multipleRender = (
  html: string,
  target: string,
  input: Array<object>,
) => {
  const container = document.getElementById(target);
  input.forEach((element: object) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    container.appendChild(div);
  });
};
