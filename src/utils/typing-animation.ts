export function typeText(
  el: HTMLElement,
  text: string,
  letterDuration: number
): Promise<void> {
  return new Promise((resolve) => {
    let i = 0;
    const typing = setInterval(() => {
      el.textContent += text[i++];
      if (i === text.length) {
        clearInterval(typing);
        resolve();
      }
    }, letterDuration);
  });
}

export function deleteText(el: HTMLElement, duration: number): Promise<void> {
  return new Promise((resolve) => {
    let text: string = el.textContent || "";
    let i: number = text.length;
    const deleting = setInterval(() => {
      el.textContent = text.slice(0, --i);
      if (i === 0) {
        clearInterval(deleting);
        resolve();
      }
    }, duration);
  });
}

export async function animate(
  el: HTMLElement,
  sentences: string[],
  letterDuration: number,
  deleteDuration: number,
  showingTime: number
): Promise<void> {
  let i = 0;
  while (true) {
    await typeText(el, sentences[i], letterDuration);
    await new Promise((resolve) => setTimeout(resolve, showingTime));
    await deleteText(el, deleteDuration);
    i = (i + 1) % sentences.length;
  }
}
