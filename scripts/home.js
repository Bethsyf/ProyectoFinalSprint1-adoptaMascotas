import { getData } from "./getData.js"
import { showData } from "./showData.js"

let btnDog = document.getElementById('btn-cate-dog');
let btnCat = document.getElementById('btn-cate-cat');
const listarCard = document.getElementById('listarCard');

const url = "https://mascotas-api.herokuapp.com/"
const urlDogs = "https://mascotas-api.herokuapp.com/dogs"
const urlCats = "https://mascotas-api.herokuapp.com/cats"


btnDog.addEventListener('click', () => {
    showData(urlDogs)
})

btnCat.addEventListener('click', () => {
    showData(urlCats)
})

listarCard.addEventListener('click', async (e) => {
    const dog = e.target.classList.contains('perro');
    const cat = e.target.classList.contains('gato');
    const idC = e.target.offsetParent.id

    if (dog) {
        console.log('perro')
        const data = await getData(urlDogs);
        const dog = data.find(dog => dog.id == Number(idC))
        console.log(dog)
        localStorage.setItem("Detail", JSON.stringify(dog));
        window.location.href = "details.html"
    }

    if (cat) {
        console.log('gato')
        const data = await getData(urlCats);
        const cat = data.find(cat => cat.id == Number(idC))
        console.log(cat)
        localStorage.setItem("Detail", JSON.stringify(cat));
        window.location.href = "details.html"
    }

})