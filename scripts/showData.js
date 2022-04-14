export const showData = async (url)=>{

  let pets = document.querySelector(".grid-pets")
  pets.innerHTML='';
    
  const resp = await fetch(url);
  const data = await resp.json();

  data.forEach(mascota => {
    const {imagen, nombre, raza, id} = mascota;
    pets.innerHTML += `
    <div class="card bg-transparent text-white"  id='${id}' >
            <img src=${imagen} id='${id}' class="card-img" alt="...">
        <div class="card-img-overlay id=${id}">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${raza}</p>
        </div>
        </div>
        `
  });
}
