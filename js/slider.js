var slider = tns({
  container: ".testimonial__slider",
  items: 3,
  gutter: 100,
  slideBy: "page",
  autoplay: true,
  controls: false,
  nav: false,
  autoplayButtonOutput: false,
  responsive: {
    1250: {
      items: 3,
    },
    200: {
      items: 1,
    },
  },
});
