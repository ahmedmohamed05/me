export function fadeIn() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
        // if (!entry.isIntersecting) {
        //   entry.target.classList.remove("fade-in");
        // }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px 0px 0px",
    }
  );

  document.querySelectorAll(".fade-in-element").forEach((element) => {
    observer.observe(element);
  });
}
