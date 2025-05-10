export function classHandler<Node>(
  items: NodeListOf<HTMLElement>,
  className: string
) {
  items.forEach((item) => {
    item.onclick = () => {
      items.forEach((x) => x.classList.remove(className));
      item.classList.add(className);
    };
  });
}
