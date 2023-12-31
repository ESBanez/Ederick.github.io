
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".buttones");
  
    if (button) {
      button.addEventListener("mousemove", (e) => {
        const { x, y } = button.getBoundingClientRect();
        button.style.setProperty("--x", e.clientX - x);
        button.style.setProperty("--y", e.clientY - y);
      });
    }
  });