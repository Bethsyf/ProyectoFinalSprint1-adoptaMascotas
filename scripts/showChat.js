import { getData } from "./getData"

const urlchatCat = "http://localhost:3000/chatCat"
const urlchatDog = "http://localhost:3000/chatDog"


const containerChat = document.getElementById('containerChat'); 

export const showChatCat = async () => {
    const messages = await getData(urlchatCat);
    containerChat.innerHTML = '';
    messages.forEach(element => {
    setTimeout(() => {
        messages.forEach(element => {
            const {mR, mP} = element;
            containerChat.innerHTML += `
        <div class="person">
            <p>${mR}</p>
        </div>
        <div class="owner">
            <p>${mP}</p>
    `
        })
    }, 1500);
    })}
   
export const showChatDog = async () => {
    const messages = await getData(urlchatDog);
    containerChat.innerHTML = '';
    messages.forEach(element => {
    setTimeout(() => {
        messages.forEach(element => {
            const {mR, mP} = element;
            containerChat.innerHTML += `
        <div class="person">
            <p>${mR}</p>
        </div>
        <div class="owner">
            <p>${mP}</p>
    `
        })
    },1500);

    setTimeout(() => {
        messages.forEach(element => {
            const {r1, p1} = element;
            containerChat.innerHTML += `
        <div class="person">
            <p>${r1}</p>
        </div>
        <div class="owner">
            <p>${p1}</p>
    `
        })
    },2500);   

})}