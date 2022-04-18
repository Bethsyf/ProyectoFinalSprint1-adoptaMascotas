import { getData } from "./getData.js";

const form1 = document.getElementById('form');
const edit = document.getElementById('btnEditar');
const user1 = document.querySelector('.user')

const urlUsers = "https://mascotas-api.herokuapp.com/usuarios"

const showUser = async () => {
    const data = await getData(urlUsers)
    data.forEach(element => {
        const { imagen, nombre, apellido} = element;
        user1.innerHTML += `
        <div class="col-12">
            <img src="${imagen}" class="profileFoto" alt="">
        </div>
        <div class="col-12 Text">
            <h5 class="profileNombre">${nombre} ${apellido}</h5>
        </div>
        `
    })
    getUser();
}

const getUser = async () => {    
    
    const user =  await getData(urlUsers)  
 
   user.forEach(element => {
        const {imagen, nombre, apellido, email, id} = element;
        document.getElementById('imagen').value = imagen;
        document.getElementById('name').value = nombre;
        document.getElementById('lastName').value = apellido;
        document.getElementById('email').value = email;
        document.getElementById('Id').value = id;
    });  
}

document,addEventListener('DOMContentLoaded', user1)

edit.addEventListener('click', () => {
    let main = document.querySelector('main');
    main.style.height = '650px';  
    document.querySelector('#formularioPerfil').style.visibility = 'visible'
})

const getDataU = () => {
    const imagen = document.getElementById('imagen').value;
    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const id = document.getElementById('Id').value;

    const user = {
        imagen, 
        nombre, 
        apellido, 
        email, 
        id
    }
    return user;
}

form1.addEventListener('submit', async (e) => {  
    e.preventDefault();
    const user = getDataU();
    const {imagen,nombre,email,apellido,id} = user;
         
    if(imagen === "",nombre === "",apellido === '' ,email === ""){
        alert('Por favor, diligenciar los campos')
    }
    else{
        const id = document.getElementById('Id').value;
        
        await fetch(urlUsers + id, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
    }
})