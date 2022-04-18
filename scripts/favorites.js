const showFavorites = document.querySelector('.grid-mascotas');

const getLocalStorage = () => {

  const detalle = JSON.parse(localStorage.getItem("Like"));
  
  det3.forEach(element => {
    const { likeNombre, likeImg, likeRaza, likeId, likeCategoria } = element;

      showFav.innerHTML += `
      <div class="card bg-transparent text-white"  id='${likeId}' >
      <img src=${likeImg} id='${likeId}' class="card-img" alt="...">
  <div class="card-img-overlay ${likeCategoria} id=${likeId}">
      <h5 class="card-title">${likeNombre}</h5>
      <p class="card-text">${likeRaza}</p>
  </div>
  </div>
      `
  });
}

document.addEventListener('DOMContentLoaded', getLocalStorage);