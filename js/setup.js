$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

function openModal(mn) {
  let modal = document.getElementById(mn);

  if (typeof modal == "undefined" || modal === null) return;

  modal.style.display = "Block";
  document.body.style.overflow = "hidden";
}

function closeModal(mn) {
  let modal = document.getElementById(mn);

  if (typeof modal == "undefined" || modal === null) return;

  modal.style.display = "none";
  document.body.style.overflow = "auto";
}
