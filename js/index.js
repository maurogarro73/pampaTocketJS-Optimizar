/* Recupera LocalStorage, si no hay nada devuelve el array vacio */
let ticketComprado =
  JSON.parse(localStorage.getItem("productosAgregadosJSON")) || [];

/* Muestra los recitales a los accedera */
function renderCarrito() {
  let htmlSelect = "";
  for (let i = 0; i < ticketComprado.length; i++) {
    htmlSelect += `<div class="card my-2">
              <div class="row g-0">
                  <div class="col-md-4">
                      <img src="${ticketComprado[i].img}" class="img-fluid rounded-start" alt="foto recital">
                  </div>
                  <div class="col-md-8">
                      <div class="card-body">
                          <h5 class="card-title text-center">${ticketComprado[i].nombre}</h5>
                          <div class="linea"></div>
                          <p class="card-text">${ticketComprado[i].info}</p>
                          <div class="lugar row w-100 m-auto  d-flex justify-content-center col text-center">
                              <div class="ubicacion  mb-2 m-4 ">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                  </svg>
                                  <p class="card-text">${ticketComprado[i].lugar}</p>
                              </div>
                              <div class="col text-center">
                                  <button type="button" class="btn btn-warning btn-lg m-4" data-bs-toggle="modal" data-bs-target="#comprar" onclick="eliminarCart(${i}); saveToLocalStorage();">Eliminar</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>`;
  }
  document.getElementById("cardJs").innerHTML = htmlSelect;
}
renderCarrito();

/* Guarda carrito en LocalStorage */
let saveToLocalStorage = () => {
  let storageJSON = JSON.stringify(ticketComprado);
  localStorage.setItem("productosAgregadosJSON", storageJSON);
};

class Ticket {
  constructor(id, nombre, info, lugar, precio, stock, img) {
    this.id = id;
    this.nombre = nombre;
    this.info = info;
    this.lugar = lugar;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
  }
}

const ticket1 = new Ticket(
  1,
  "Bersuit Vergarabat",
  "Presentando su gira 2022 se presenta el 4 de Junio a las 16:00 Hs con un show único e irrepetible.",
  "Club All-Boys",
  2900,
  300,
  "img/recital1.jpg"
);
const ticket2 = new Ticket(
  2,
  "DIVIDIDOS",
  "Vuelve al Club Estudiantes por 5ta vez el próximo 27 de junio con un show NO APTO PARA MENORES DE 7 AÑOS",
  "Club Estudiante",
  5000,
  100,
  "img/recital2.jpg"
);
const ticket3 = new Ticket(
  3,
  "No te va gustar",
  "No Te Va Gustar se presentan en el Microestadio Municipal el próximo 10 de agosto a las 20hs con bandas soporte.",
  "Microestadio Municipal",
  1500,
  400,
  "img/recital3.jpg"
);
const ticket4 = new Ticket(
  4,
  "Celia Cruz",
  "Por primera vez en Santa Rosa. A días de arrancar la caravana de 10 Gran Rex agotados y con un recorrido de punta a punta por el país.",
  "Club Estudiante",
  1000,
  200,
  "img/recital6.jpg"
);

const entradas = [];
entradas.push(ticket1, ticket2, ticket3, ticket4);

/* Muestra todos los recitales */
function renderRecitalesTodos() {
  let htmlTodos = "";
  for (let i = 0; i < entradas.length; i++) {
    htmlTodos += `<div class="card my-2">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${entradas[i].img}" class="img-fluid rounded-start" alt="foto recital">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title text-center">${entradas[i].nombre}</h5>
                                <div class="linea"></div>
                                <p class="card-text">${entradas[i].info}</p>
                                <div class="lugar row w-100 m-auto  d-flex justify-content-center col text-center">
                                    <div class="ubicacion  mb-2 m-4 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
                                        <p class="card-text">${entradas[i].lugar}</p>
                                    </div>
                                    <div class="col text-center">
                                        <button type="button" class="btn btn-warning btn-lg m-4" onclick="agregarAlCarrito(${entradas[i].id}); saveToLocalStorage();">Agregar al Carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>`;
  }

  document.getElementById("cardJsTodos").innerHTML = htmlTodos;
}
renderRecitalesTodos();

/* agrega ticket comprados al carrito */
function agregarAlCarrito(id) {
  const selectedTicket = entradas.find((entrada) => entrada.id == id);
  ticketComprado.push(selectedTicket);
  renderCarrito();
  saveToLocalStorage();
}

/* Elimina los ticket comprados */
function eliminarCart(id) {
  ticketComprado.splice(id, 1);
  renderCarrito();
  saveToLocalStorage();
}
