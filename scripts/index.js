document.addEventListener('DOMContentLoaded', () => {
    const logo1 = document.querySelector('#img1');
    logo1.style.display = 'flex';

    setTimeout(() => {
        logo1.style.display= 'none';

        setTimeout(() => {
            const logo2 = document.querySelector('#img2');
            logo2.style.display = 'flex';
        }, 0);
    }, 2000);
});