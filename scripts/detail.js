const detail = document.querySelector('.detail')

const getLocalStorage = () => {
    
    const detalle = JSON.parse(localStorage.getItem("Detail"));
    console.log(detalle)
    const { nombre, historia, imagen, edad, raza, direccion, personalidad1, personalidad2, personalidad3, genero, usuario, imgusuario, id, categoria } = detalle;
    
    detail.innerHTML +=  `
    <header>
      <a href="./home.html"><button class="btnBack"><img src="./images/back.png" alt="back"></button></a>
      <img src="${imagen}" class="imgPrincipal" alt="imagen">
    </header>
    <main id="detailsMain">
      <div class="container">
        <div class="d-flex justify-content-between primerP">
          <div class="d-flex justify-content-start">
              <p class="nameDetail">${nombre}</p>
              <div class="gender ${genero} d-flex mx-auto"></div>
          </div>
          
          <div  class="circleLike detailLike"> </div>
      </div>
      <div class="container d-flex justify-content-evenly">
        <div>
            <img src="../images/race.png" alt="raza">
            <div class="d-inline p-2 raceAgeDetail" id='race'>${raza}</div>
        </div>
        <div>
            <img src="../images/age.png" alt="edad">
            <div class="d-inline p-2 raceAgeDetail">${edad}</div>
        </div>
      </div>
      <div class="d-flex justify-content-start">
        <img src="../images/location.png" class="ubicacion" alt="logo-ubicacion">
        <p class="address">${direccion}</p>
      </div>
        <h2 class="titlePersonalidad">Personalidad</h2>
      </div>    
    <section class="container-fluid contPersonalidad">
      <div class="row conPersonality">
        <div class="col-auto boxPerso">
            
            <p class="textPerso">${personalidad1}</p>
        </div>
        <div class="col-auto boxPerso">
            
            <p class="textPerso">${personalidad2}</p>
        </div>
        <div class="col-auto boxPerso">
            
            <p class="textPerso">${personalidad3}</p>
        </div>
      </div>
    </section>
    <section class="container contHistory">
      <h4 class="hHistory"> Historia de ${nombre} </h5>
      <p class="pDetails"> ${historia} </p>
    </section> 
  </main>
  <footer>
      <ul class="nav detailNav justify-content-left">
        <li class="nav-item">
            <img src="${imgusuario}" class="userImgDetails" alt="">
        </li>
        <li class="nav-item">
            <h5 class='subUserDet'>Publicado por</h5>
            <h6 class='UserDet'>${usuario}</h6>
        </li>
        <li class="nav-item">
            <a href="./chat-${categoria}.html"><button class="btnDetails" id="chatDog">Contactar</button></a>
        </li>
      </ul>
    </footer>
  `
}