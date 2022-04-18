const detail = document.getElementById('detail')

const getLocalStorage = () => {
  const detalle = JSON.parse(localStorage.getItem("Detail"));
  const { nombre, historia, imagen, edad, raza, direccion, personalidad1, personalidad2, personalidad3, genero, usuario, imgusuario, id, categoria } = detalle;

  detail.innerHTML += `
    <header>
      <a class="btnBack" href="./home.html"><img src="https://res.cloudinary.com/dmaviub4l/image/upload/v1650071397/back_y59rxl.png" alt="back"></a>
      <img src="${imagen}" class="imgPrincipal" alt="imagen">
    </header>
    <main id="detailsMain">
      <div class="container">
        <div class="d-flex justify-content-between primerP">
          <div class="d-flex justify-content-start">
              <h1 class="me-3">${nombre}</h1>
              <img class="gender d-flex mx-auto" src="${genero}" alt="img-genero">
          </div>          
          <div
           class="circleLike detailLike" ><img src="https://res.cloudinary.com/dmaviub4l/image/upload/v1650071397/not-save_jjehug.png" alt="not-save"></div>
      </div>
      <div class="container d-flex justify-content-evenly py-3">
        <div>
            <img src="https://res.cloudinary.com/dmaviub4l/image/upload/v1650071398/race_kiqr56.png" alt="raza">
            <div class="d-inline p-2 raceAgeDetail" id='race'>${raza}</div>
        </div>
        <div>
            <img src="https://res.cloudinary.com/dmaviub4l/image/upload/v1650071397/age_gdon6i.png" alt="edad">
            <div class="d-inline p-2 raceAgeDetail">${edad}</div>
        </div>
      </div>
      <div class="d-flex justify-content-start">
        <img src="https://res.cloudinary.com/dmaviub4l/image/upload/v1650071397/location_cge0ka.png" class="ubicacion" alt="logo-ubicacion">
        <p class="address">${direccion}</p>
      </div>
        <h2 class="titlePersonalidad">Personalidad</h2>
      </div>    
    <section class="container-fluid contPersonalidad">
      <div class="row conPersonality">
        <div class="col-auto boxPerso">
        <img src="https://res.cloudinary.com/dmaviub4l/image/upload/v1650071397/hearts_snebqd.png" class="imgPerso" alt="personalidad">
            <p class="textPerso">${personalidad1}</p>
        </div>
        <div class="col-auto boxPerso">
        <img src="https://res.cloudinary.com/dmaviub4l/image/upload/v1650071397/restless_oa2h7t.png" class="imgPerso" alt="personalidad">
            <p class="textPerso">${personalidad2}</p>
        </div>
        <div class="col-auto boxPerso">
        <img src="https://res.cloudinary.com/dmaviub4l/image/upload/v1650071396/ball_qwcira.png" class="imgPerso" alt="personalidad">
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
            <img src="https://res.cloudinary.com/dmaviub4l/image/upload/v1650280275/maria-dolores2_viutcb.png" class="userImgDetails" alt="imguser">
        </li>
        <li class="nav-item">
            <h5 class='subUserDet'>Publicado por</h5>
            <h6 class='UserDet'>${usuario}</h6>
        </li>
        <li class="nav-item">
            <a href="./chat.html"><button class="btnDetails" id="chat">Contactar</button></a>
        </li>
      </ul>
    </footer>
  `

  const btnLike = document.querySelector('.like');

  btnLike.addEventListener('click', () => {
    let likeNombre = nombre;
    let likeImg = imagen;
    let likeRaza = raza;
    let likeId = id;
    let likeCategoria = categoria;

    let like = {
      likeNombre,
      likeImg,
      likeRaza,
      likeId,
      likeCategoria

    }

    const key = JSON.parce(localStorage.getItem('Like'))

    if (btnLike.classList.contains('circleLike')) {
      console.log('like')
      btnLike.classList.remove("circleLike");
      btnLike.classList.add("circlePush");

      if (key !== null) {
        key.push(like)
        localStorage.setItem('Like', JSON.stringify(key))
      } else {
        arrayLike.push(like);
        localStorage.setItem('Like', JSON.stringify(arrayLike))
      }

    } else if (btnLike.classList.contains('circlePush')) {
      btnLike.classList.remove("circlePush");
      btnLike.classList.add("circleLike");
      const cat = key.filter(categ => categ.likeCategory === 'cat')
      const dog = key.filter(categ => categ.likeCategory === 'dog')

    }
  }
  )
}

document.addEventListener('DOMContentLoaded', getLocalStorage)