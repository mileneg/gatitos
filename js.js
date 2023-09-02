
const API_URL = 'https://api.thecatapi.com/v1/images/search';
const catBtn = document.getElementById('cambio');
const catImg = document.getElementById('gato');


const getCats = async () => {
    try {
        const data = await fetch(API_URL);
        const json = await data.json();
        const cat = json[0];
        console.log(cat);
        return cat.url;


    } catch (error) {
        console.error(error.message);
    }

};

const cargarImg = async () => {
    catImg.src = await getCats();
};

catBtn.addEventListener('click', cargarImg);


