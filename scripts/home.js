import { getData } from "./getData.js"
import { showData } from "./showData.js"

let btnDog = document.getElementById('btn-cate-dog');
let btnCat = document.getElementById('btn-cate-cat');
const listarCard = document.getElementById('listarCard');

const url = "http://localhost:3000/"


btnDog.addEventListener('click', () => {   
    showData('http://localhost:3000/dogs')
})

btnCat.addEventListener('click', () => {
    showData('http://localhost:3000/cats')
})

listarCard.addEventListener('click', async(e) => {
    
    const cardDetail = e.target.classList.contains('.card-img-overlay')
    const id = e.target.offsetParent.id
    console.log(id)
    console.log('card-img-overlay')
    if(cardDetail){
       
        let idCard = await getData(url);

        const objeto = idCard.find(item => item.id == Number(id))

        localStorage.setItem("Detail", JSON.stringify(objeto));
        

        window.location.href= "details.html"
    }
})