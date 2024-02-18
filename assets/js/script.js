$(document).ready(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var navHeight = $(".navbar").outerHeight();
    if (scroll > navHeight) {
      $(".navbar").addClass("bg-colored");
    } else {
      $(".navbar").removeClass("bg-colored");
    }
  });

  let avion = $("#avion");
  let montana = $("#montana");
  let camino = $("#camino");
  let pavion = $("#pavion");
  let pmontana = $("#pmontana");
  let pcamino = $("#pcamino");

  avion.click(function () {
    pavion.toggle();
  });

  montana.click(function () {
    pmontana.toggle();
  });

  camino.click(function () {
    pcamino.toggle();
  });

  $(".card").hover(
    function () {
      $(this).addClass("highlight");
    },
    function () {
      $(this).removeClass("highlight");
    }
  );

  $("#btnEnviar").click(function () {
    alert("¡Mensaje enviado con éxito!");
  });

  $(".card").click(function () {
    alert("¡Viaja con nosotros!");
  });

  $("#nav-mundo").click(function () {
    $("#logo-mundo").toggle();
  });
});


document.addEventListener('DOMContentLoaded', function () {
  fetch('./assets/cards.json')
    .then(response => response.json())
    .then(data => generateCards(data))
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

  function generateCards(data) {
    const cardsContainer = document.getElementById('cardsContainer');
    data.forEach(item => {
      const cardHtml = `
              <div class="col-12 col-md-3 d-flex align-items-stretch">
                  <div class="card">
                      <img src="${item.imgSrc}" class="card-img-top" alt="${item.alt}">
                      <div class="card-body bg-celeste">
                          <h5 class="titulo text-white">${item.title}</h5>
                          <p class="card-text text-white">${item.text}</p>
                      </div>
                  </div>
              </div>
          `;
      cardsContainer.insertAdjacentHTML('beforeend', cardHtml);
    });
  }
});
