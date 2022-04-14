import { getData } from "./getData.js"
import { showData } from "./showData.js"

let btnDog = document.getElementById('btn-cate-dog');
let btnCat = document.getElementById('btn-cate-cat');
const listarCard = document.getElementById('listCard');

const url = "https://mascotas-api.herokuapp.com/"
const urlDogs = "https://mascotas-api.herokuapp.com/dogs"
const urlCats = "https://mascotas-api.herokuapp.com/cats"


btnDog.addEventListener('click', () => {   
    showData(urlDogs)
})

btnCat.addEventListener('click', () => {
    showData(urlCats)
})

listarCard.addEventListener('click', async(e) => {
    console.log(listarCard)    
    const idC = e.target.id   
    
    if(idC){       
        const data = await getData(url);
        const detailPets = data.find(item => item.id == Number(idC))
        console.log(detailPets)
        localStorage.setItem("Detail", JSON.stringify(detailPets));
        window.location.href= "details.html"
    }

    // if(cat){       
    //     const data = await getData(urlCats);
    //     const cat = data.find(item => item.id == Number(idC))
    //     console.log(objeto)
    //     localStorage.setItem("Detail", JSON.stringify(cat));
    //     window.location.href= "details.html"
    // }
    
})