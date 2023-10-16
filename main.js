"use strict";

const containerCards = document.querySelector(".container-cards");

// const persSimpsonsAPI = fetch("https://apisimpsons.fly.dev/api/personajes")
//   .then((response) => response.json())
//   .then((data) => data);

const persSimpsonsAPI = fetch(
  "https://apisimpsons.fly.dev/api/personajes?limit=20&page=1"
)
  .then((response) => response.json())
  .then((data) => {
    data.docs.forEach((personaje) => {
      containerCards.insertAdjacentHTML(
        "beforeend",
        templateCardPersonaje(
          personaje.Imagen,
          personaje.Nombre,
          personaje.Historia,
          personaje._id
        )
      );
    });

    return data;
  });

const templateCardPersonaje = function (img, nombre, historia, id) {
  return `<div class="pt-5 col-lg-4 col-md-6 col-sm-12">
                                <div class="card text-center">
                                  <div>
                                    <img
                                      src="${img}"
                                      class="card-img-top img-prop mt-4"
                                      alt="..."
                                    />
                                  </div>                                  
                                  <div class="card-body">
                                    <h2 class="card-title">${nombre}</h2>
                                    <p class="card-description">${historia}</p>
                                    <button
                                      type="button"
                                      class="btn btn-style"
                                      id="${id}"
                                      data-bs-toggle="modal"
                                      data-bs-target="#staticBackdrop"
                                    >
                                      Ver más
                                    </button>
                                  </div>
                                </div>
                                </div>`;
};
