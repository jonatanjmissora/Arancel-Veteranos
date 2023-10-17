//=================================================================
//            GLOBALES
//=================================================================
const db = firebase.firestore();

const plantelFirebase = {
  b1: {
    nombre: "BLANCO, Dario",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  c1: {
    nombre: "CALVO, Diego",
    pagos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  d1: {
    nombre: "DAVALOS, Gabriel",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  e1: {
    nombre: "ECHEGUREN, Fer",
    pagos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  e2: {
    nombre: "ESCOBAR, Mauro",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  e3: {
    nombre: "ESPEJO, Javier",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  f1: {
    nombre: "FARIAS, Ernesto",
    pagos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  f2: {
    nombre: "FREDA, Cristian",
    pagos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  g1: {
    nombre: "GARECHANA, Enr",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  g2: {
    nombre: "GOMEZ, Mario",
    pagos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  i1: {
    nombre: "IRIBARNE, Juan",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  l1: {
    nombre: "LUSARRETA, Guille",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  m1: {
    nombre: "MANGANELLI, Enri",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  m2: {
    nombre: "MARCH, Fernando",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  m3: {
    nombre: "MAZZELLO, Pablo",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  m4: {
    nombre: "MENECOZZI, Cris",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  m5: {
    nombre: "MISSORA, Jonatan",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  m6: {
    nombre: "MUNOZ, Martin",
    pagos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  m7: {
    nombre: "MUNOZ, Silvio",
    pagos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  p1: {
    nombre: "PETRUZELA, Nico",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  p2: {
    nombre: "PRIEGUE, Leonardo",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  r1: {
    nombre: "RIESCO, Gonzalo",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  r2: {
    nombre: "ROJAS, Maximiliano",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  r3: {
    nombre: "RUIZ, Ariel",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  s1: {
    nombre: "SCILINGO, Mauricio",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  s2: {
    nombre: "SCUFFI, Jorge",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  s3: {
    nombre: "SORESI, Franco",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  s4: {
    nombre: "SOSA, Juan",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  t1: {
    nombre: "TAFFAREL, Diego",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  t2: {
    nombre: "TORRES, Luciano",
    pagos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  v1: {
    nombre: "VIRDIS, Ignacio",
    pagos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  z1: {
    nombre: "ZUBILLAGA, Tomas",
    pagos: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },


};
let plantel = {};
let plantelCopia = {};
let pagosActual = {};
let archivo = {};

let fechaActual = new Date();
let diaActual = fechaActual.getDate();
let mesActual = fechaActual.getMonth() + 1;
let mesActualStr = mesActual < 10 ? "0" + mesActual : "" + mesActual;
let anioActual = fechaActual.getYear() + 1900;
let fechaActualStr = `${anioActual}-${mesActualStr}-${diaActual}`

const mesLetras = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//=================================================================
//           DOM
//=================================================================
//    FORMULARIO
const formulario = document.querySelector(".formulario");
const formLogin = document.getElementById("form-login");
const errorP = document.querySelector(".error");

//    NAV
const navBox = document.querySelector(".nav-box");
const linkPagos = document.querySelector(".link-pagos");
const linkEstado = document.querySelector(".link-estado");
const linkArchivo = document.querySelector(".link-archivo");
const linkAfter = document.querySelector(".link-after");
const loginUser = document.querySelector(".login-user");
const logoutBtn = document.querySelector(".logout-btn");

//    PAGOS - CONTAINER
const pagosContainer = document.querySelector(".pagos-container");
//    LETRAS - BOX
const letrasContenido = document.querySelector(".letras-contenido");
//    PAGOS - BOX
const pagosBox = document.querySelector(".pagos-box");
//    CONFIRMAR - BOX
const confirmarBox = document.querySelector(".confirmar-box");
const confirmarContenido = document.querySelector(".confirmar-contenido");
const confirmarBtn = document.querySelector(".confirmar-btn");
//    TOTAL - BOX
const totalFecha = document.querySelector(".total-fecha");
const totalResultado = document.querySelector(".total-resultado");
const templateLinea = document.querySelector("#tpl-jugador").content;

//    ESTADO - CONTAINER
const estadoContainer = document.querySelector(".estado-container");
const templateFila = document.querySelector("#tpl-fila").content;
const fragment = document.createDocumentFragment();
const tbody = document.querySelector(".tbody");

//    ARCHIVO - CONTAINER
const archivoContainer = document.querySelector(".archivo-container");
const menuMes = document.querySelector(".menu-mes");
const archivoContenido = document.querySelector(".archivo-contenido");

//=================================================================
//            EVENTs
//=================================================================
//    LOGIN
formLogin.addEventListener("submit", e => {
  e.preventDefault();

  const email = formLogin["login-email"].value;
  const password = formLogin["login-password"].value;
  auth.signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        // console.log("usuario ya logueado")
        formLogin.reset();
        errorP.innerText = "";
      })
      .catch(error => {
        errorP.innerText = error.message
      });

});
//    LOG OUT
logoutBtn.addEventListener("click", () => {
  //  reseteo pagos
  resetPagos();
  //  salgo del firebase
  auth.signOut();
})
//    LINKS
linkPagos.addEventListener("click", (e) => {
  //  estableszo que contenedor se muestra
  pagosContainer.classList.add("visible");
  estadoContainer.classList.remove("visible");
  archivoContainer.classList.remove("visible");
  //  muevo selector activo
  linkAfter.style.left = "1.6rem";
    linkAfter.style.height = "0%";
    linkAfter.style.top = "50%";
    setTimeout(() => {
      linkAfter.style.height = "80%";
      linkAfter.style.top = "8%";
    }, 150);
  linkPagos.style.color = "darkred";
  linkEstado.style.color = "#eee";
  linkArchivo.style.color = "#eee";
});
linkEstado.addEventListener("click", (e) => {
  //  estableszo que contenedor se muestra
  pagosContainer.classList.remove("visible");
  estadoContainer.classList.add("visible");
  archivoContainer.classList.remove("visible");
  //  muevo selector activo
  linkAfter.style.left = "7.5rem";
    linkAfter.style.height = "0%";
    linkAfter.style.top = "50%";
    setTimeout(() => {
      linkAfter.style.height = "80%";
      linkAfter.style.top = "8%";
    }, 150);
  linkPagos.style.color = "#eee";
  linkEstado.style.color = "darkred";
  linkArchivo.style.color = "#eee";
});
linkArchivo.addEventListener("click", (e) => {
  //  estableszo que contenedor se muestra
  pagosContainer.classList.remove("visible");
  estadoContainer.classList.remove("visible");
  archivoContainer.classList.add("visible");
  //  muevo selector activo
  linkAfter.style.left = "13.75rem";
    linkAfter.style.height = "0%";
    linkAfter.style.top = "50%";
    setTimeout(() => {
      linkAfter.style.height = "80%";
      linkAfter.style.top = "8%";
    }, 150);
  linkPagos.style.color = "#eee";
  linkEstado.style.color = "#eee";
  linkArchivo.style.color = "darkred";
});
//    LETRAS
letrasContenido.addEventListener("click", e => {
  if (e.target.classList.contains("letra-btn")) {
    let letra = e.target.dataset.letra;

    //  despinto si hay alguna letra pintada
    if (document.querySelector(".letra-activo")) {
        //  y despinto si la letra pintada no es la que clickee
        if (letra !== document.querySelector(".letra-activo").dataset.letra) {
        document.querySelector(`.letra-activo`).classList.remove("letra-activo");
        }
    }
    //  pinto solo letra clickeada
    document.querySelector(`[data-letra="${letra}"]`).classList.toggle("letra-activo");

    Object.entries(plantelCopia).forEach(([id, jugador]) => {
    if (id.startsWith(letra)) {
      document.getElementById(id).classList.toggle("visible");
    } else {
      document.getElementById(id).classList.remove("visible")
      }
    })

  }
  e.stopPropagation();
})
//    CONFIRMAR
confirmarBtn.addEventListener("click", async e => {

  //  indice porque no tengo enero y febrero
  let indice = mesActual - 3;

  //  actualizo plantel con los pagos de pagosActual
  Object.entries(pagosActual).forEach( ([id, pagoActual]) => {
    if (id != "total") {
      plantel[id].pagos[indice] += pagosActual[id];
      plantel[id].total += pagosActual[id];
    }
  });
  //  actualizo archivo con los pagos de pagoActual
  archivo[fechaActualStr]?
  Object.entries(pagosActual).forEach( ([id, pagoActual]) => {
    archivo[fechaActualStr][id]? archivo[fechaActualStr][id] += pagoActual :
      archivo[fechaActualStr][id] = pagoActual;
  })
  : archivo[fechaActualStr] = pagosActual;

  //  deshabilito el boton de confirmar
  confirmarBtn.disabled = true;

  //  actualizo firebase
  try {
    console.time("**** GUARDO DATOS EN FIRESTORE ****  ");

    //  actualizo plantel y archivo
    await Promise.all([
      db.collection("plantel").doc("2022").set({plantel}),
      db.collection("archivo").doc("2022").set({archivo})
    ]);

    // await db.collection("plantel").doc("2022").set({plantel});
    // await db.collection("archivo").doc("2022").set({archivo});

    console.timeEnd("**** GUARDO DATOS EN FIRESTORE ****  ");
  } catch (error) {
      console.log(error.message);
      }

  //  habilito nuevamente el boton de confirmar
      confirmarBtn.disabled = false;

  //  reseteo pagos
  resetPagos();

  //  pinto DOM
  pintarEstado();
  pintarArchivo();

  e.stopPropagation();
})
//    MESES
menuMes.addEventListener("click", e => {

  let btn = e.target;
  if (btn.classList.contains("mes-btn")) {

    //  obtengo el mes del boton que aprete
    let mes = btn.dataset.mesBtn;

    let meses = document.querySelectorAll(`[data-mes]`);
    meses.forEach(m => {

      if (m.dataset.mes == mes) {
        m.classList.add("visible");
      } else {
        m.classList.remove("visible");
      }

    })

    //  pinto boton activo
    document.querySelector(".activo-mes").classList.remove("activo-mes");
    btn.classList.add("activo-mes");

  }
  e.stopPropagation();

});

//=================================================================
//            VERIFICAR AUTH
//=================================================================
auth.onAuthStateChanged( async user => {
  let userN = "";

  // si hay usuario logueado, muestro data
  if(user) {
    let userName = user.email;
    userN = userName.substring(0, 3);
    console.log(`usuario logueado: ${user.email}`);
    loginUser.innerHTML = userN;

    // oculto formulario
    formulario.classList.remove("visible");

    //  muestro pagos - container
    pagosContainer.classList.add("visible");
    navBox.classList.add("visible");
    linkPagos.style.color = "darkred";

    //  pinto la fecha de hoy
    totalFecha.textContent = `${diaActual} de ${mesLetras[mesActual]}`

    // obtengo plantel y archivo de firebase
    try {

      console.time("**** CARGO DATOS DE FIRESTORE ****  ");

      let [plantelAux, archivoAux] = await Promise.all([
                                      db.collection("plantel").doc("2022").get(),
                                      db.collection("archivo").doc("2022").get()
                                      ]);

      // let plantelAux = await db.collection("plantel").doc("2022").get();
      plantel = plantelAux.data().plantel;
      plantelCopia = {...plantel};

      // let archivoAux = await db.collection("archivo").doc("2022").get();
      archivo = archivoAux.data().archivo;

      console.timeEnd("**** CARGO DATOS DE FIRESTORE ****  ");

    } catch (error) {
      console.log(error.message);
      }

    //  pinto DOM
    pintarPlantel();
    pintarEstado();
    pintarArchivo();

  }

  // si no hay usuario logueado, muestro formulario de login
  else {
    console.log("usuario no logueado");
    //  muestro formulario
    formulario.classList.add("visible");

    //  oculto pagos-container
    pagosContainer.classList.remove("visible");
    estadoContainer.classList.remove("visible");
    archivoContainer.classList.remove("visible");
    navBox.classList.remove("visible");
  }
})

//=================================================================
//            PINTAR PLANTEL
//=================================================================
const pintarPlantel = () => {

  pagosBox.innerHTML = "";
  confirmarContenido.innerHTML = "";

  //  clono del template, cada linea jugador
  let idsOrdenados = Object.keys(plantel).sort();
  idsOrdenados.forEach( id => {
    let jugador = plantel[id];

  // Object.entries(plantel).forEach(([id, jugador]) => {

    const clone = templateLinea.cloneNode(true);
    clone.querySelector(".jugador-box").id = id;
    clone.querySelector(".nombre").textContent = jugador.nombre;

    clone.querySelector(".input").id = `input-${id}`;
    clone.querySelector(".bx-check").dataset.id = id;
    clone.querySelector(".bx-check").id = `check-${id}`;
    clone.querySelector(".bx-x").dataset.id = id;
    clone.querySelector(".bx-x").id = `cancel-${id}`;

    fragment.innerHTML = "";
    fragment.appendChild(clone);

  })

  //  pinto en pagos-box
  pagosBox.appendChild(fragment);

  //  evento click en cada tilde ✔
  let dataChecks = document.querySelectorAll(".bx-check");
  dataChecks.forEach(dataCheck => {
    dataCheck.addEventListener("click", async (e) => {
      let id = e.target.dataset.id;
      let jugador = document.getElementById(id);
      let input = document.getElementById(`input-${id}`);
      let pago = parseInt(input.value);

      //  coloco pago del jugador en pagosActual
      pagosActual[id]? pagosActual[id] += pago : pagosActual[id] = pago;
      //  sumo al total de pagosActual
      pagosActual["total"]? pagosActual["total"] += pago : pagosActual["total"] = pago;

      //  quito jugador del plantel
      delete plantelCopia[id];

      //  muevo jugador a detalles-contenido
      confirmarContenido.appendChild(jugador);
      jugador.dataset.confirmar = true;
      input.dataset.confirmarInput = true;

      //  muestro el boton de confirmar
      confirmarBox.classList.add("visible");

      //actualizo total del footer
      let total = parseInt(totalResultado.textContent) + pago;
      totalResultado.textContent = total;

      //  evento change en cada input, actualizo el total
      input.addEventListener("change", (e) => {
          //  si cambio a 1000, entonces le sumo 500
          if(input.value == "1000") {
            let total = parseInt(totalResultado.textContent) + 500;
            totalResultado.textContent = total;

            //  si cambio a 500, entonces le resto 500
          } else {
            let total = parseInt(totalResultado.textContent) - 500;
            totalResultado.textContent = total;
          }

      })

      e.stopPropagation();
     })
   })

  //  evento click en cada x
  let dataCancels = document.querySelectorAll(".bx-x");
  dataCancels.forEach(dataCancel => {
    dataCancel.addEventListener("click", (e) => {
      let id = e.target.dataset.id;
      let jugador = document.getElementById(id);
      let input = document.getElementById(`input-${id}`);
      let pago = parseInt(input.value);

      //  quito el pago del jugador de pagosActual
      delete pagosActual[id];
      //  resto al total de pagosActual
      pagosActual["total"] -= pago;


      //  agrego jugador a plantel
      plantelCopia[id] = plantel[id];

      //  muevo jugador a pagos-box
      pagosBox.appendChild(jugador);
      jugador.dataset.confirmar = false;
      input.dataset.confirmarInput = false;
      input.value = 500;
      //  checkeo si el jugador que muevo es el mismo que letra activa
      let letraActiva = document.querySelector(".letra-activo").dataset.letra;
      let letraJugador = jugador.id[0]
      if (letraActiva != letraJugador) {
        jugador.classList.remove("visible");
      }

      //  actualizo total
      let total = parseInt(totalResultado.textContent) - pago;
      totalResultado.textContent = total;

      //  veo si oculto confirmar-box
      // veo si hay jugadores en confirmar-contenido
      if (!document.querySelector("[data-confirmar=true]")) {
        confirmarBox.classList.remove("visible");
        totalResultado.textContent = "0";
      }

      e.stopPropagation();
    })
  })

}

//=================================================================
//            PINTAR ESTADO
//=================================================================
const pintarEstado = () => {

  tbody.innerHTML = "";

  let idsOrdenados = Object.keys(plantel).sort();
  idsOrdenados.forEach( id => {
    let jugador = plantel[id];

  // Object.entries(plantel).forEach(([id, jugador]) => {

    let clone = templateFila.cloneNode(true);

    clone.querySelector(".nombre-tb").textContent = jugador.nombre;
    clone.querySelector(".total-tb").textContent = jugador.total;
    clone.querySelector(".marzo").textContent = jugador.pagos[0];
    clone.querySelector(".abril").textContent = jugador.pagos[1];
    clone.querySelector(".mayo").textContent = jugador.pagos[2];
    clone.querySelector(".junio").textContent = jugador.pagos[3];
    clone.querySelector(".julio").textContent = jugador.pagos[4];
    clone.querySelector(".agosto").textContent = jugador.pagos[5];
    clone.querySelector(".septiembre").textContent = jugador.pagos[6];
    clone.querySelector(".octubre").textContent = jugador.pagos[7];
    clone.querySelector(".noviembre").textContent = jugador.pagos[8];
    clone.querySelector(".diciembre").textContent = jugador.pagos[9];

    //  pinto en verde si esta al dia
    let mesesActivos = mesActual - 2;
    let esVerde = ( jugador.total / mesesActivos ) >= 500;
    if (esVerde) { clone.querySelector(".total-tb").style.backgroundColor = "rgba(0, 128, 0, 0.3)"}
    //  sino pinto de rojo
    else { clone.querySelector(".total-tb").style.backgroundColor = "rgba(139, 0, 0, 0.3)"}

    fragment.appendChild(clone);
  })
  tbody.appendChild(fragment);
}

//=================================================================
//            PINTAR ARCHIVO
//=================================================================
const pintarArchivo = () => {

  archivoContenido.innerHTML = "";

  let fechasOrdenadas = Object.keys(archivo).sort();
    fechasOrdenadas.forEach( fecha => {
  // for (let fecha in archivo) {

    let diaFecha = fecha.substring(8, 10);
    let mesFecha = fecha.substring(5, 7);
    let indiceMes = parseInt(mesFecha) - 1;

    archivoContenido.innerHTML += `
      <div class="fecha-titulo" data-mes="${mesFecha}">
        <h4 class="fecha-titulo-fecha">${diaFecha} de ${mesLetras[indiceMes]}</h4>
        <h4 class="fecha-titulo-total">Total: ${archivo[fecha].total}</h4>
      </div>
        `

    //  listo cada jugador y su pago en dicha fecha
    let idsOrdenados = Object.keys(archivo[fecha]).sort();
    idsOrdenados.forEach( id => {
       let pago = archivo[fecha][id];
       if (id !== "total") {
         let indiceComa = plantel[id].nombre.indexOf(",");
         let nombreReducido = plantel[id].nombre.substring(0, indiceComa + 3);
         archivoContenido.innerHTML += `
           <div class="jug-box" data-mes="${mesFecha}">
             <span class="span-nombre">${nombreReducido}</span>
             <span class="span-pago">${pago}</span>
           </div>`;
       }
    })
    // for (let id in archivo[fecha]) {
    //   let pago = archivo[fecha][id];
    //   if (id !== "total") {
    //     let indiceComa = plantel[id].nombre.indexOf(",");
    //     let nombreReducido = plantel[id].nombre.substring(0, indiceComa + 3);
    //     archivoContenido.innerHTML += `
    //     <div class="jug-box" data-mes="${mesFecha}">
    //       <span class="span-nombre">${nombreReducido}</span>
    //       <span class="span-pago">${pago}</span>
    //     </div>`;
    //   }
    // }

  });

  //  pinto boton del mes vigente
  document.querySelector(`[data-mes-btn="${mesActualStr}"]`).classList.add("activo-mes");

  //  pinto fecha y pagos del mes vigente
  let meses = document.querySelectorAll(`[data-mes]`);
    meses.forEach(m => {

      if (m.dataset.mes == mesActualStr) {
        m.classList.add("visible");
      } else {
        m.classList.remove("visible");
      }

    })

}

//=================================================================
//            RESET PAGOS
//=================================================================
const resetPagos = () => {

  //  oculto letra seleccionada
  if (document.querySelector(".letra-activo")) {
        document.querySelector(`.letra-activo`).classList.remove("letra-activo");
  }

  //  paso jugadores de confirmar-contenido a pagos-box
  let jugadoresEnConfirmar = document.querySelectorAll("[data-confirmar=true]");
  jugadoresEnConfirmar.forEach(jugador => {
    pagosBox.appendChild(jugador);
    jugador.dataset.confirmar = "false";
  })

  //  oculto jugadores
  let jugadoresVisibles = document.querySelectorAll(".jugador-box.visible");
  jugadoresVisibles.forEach(jugador => jugador.classList.remove("visible"))

  //  oculto el confirmar-box
  confirmarBox.classList.remove("visible");

  //  reseteo pagosActual, plantelCopia y totalResultado del DOM
  pagosActual = {};
  plantelCopia = {...plantel};
  totalResultado.textContent = "0";

  //  cargo plantel y archivo del firebase, con delay
//   setTimeout( async () => {
//     try {

//       console.time("**** RE-CARGO DATOS DE FIRESTORE ****  ");

//       let plantelAux = await db.collection("plantel").doc("2022").get();
//       plantel = plantelAux.data().plantel;
//       plantelCopia = {...plantel};

//       let archivoAux = await db.collection("archivo").doc("2022").get();
//       archivo = archivoAux.data().archivo;

//       console.timeEnd("**** RE-CARGO DATOS DE FIRESTORE ****  ");
//       pintarEstado();
//       pintarArchivo();

//     } catch (error) {
//       console.log(error.message);
//       }
//   }, 1000)



}
