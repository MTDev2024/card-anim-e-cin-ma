const card = document.querySelector(".card");
const imageZoom = document.querySelector(".image-zoom");
const blocFocusTop = document.querySelector(".bloc-focus-top");
const blocFocusBottom = document.querySelector(".bloc-focus-bottom");

const TLANIM = gsap.timeline({ paused: true });

TLANIM.fromTo(
  imageZoom,
  { scale: 1 },
  {
    scale: 2,
    y: -50,
    x: 200,
    duration: 0.4,
    ease: ExpoScaleEase.config(1, 2, "power2.inOut"),
  }
);

card?.addEventListener("mouseenter", () => {
  TLANIM.play();
});

card?.addEventListener("mouseleave", () => {
  TLANIM.reverse();
});
