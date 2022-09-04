const dog_container = document.getElementById("dog_container");
const cat_container = document.getElementById("cat_container");
const fish_container = document.getElementById("fish_container");
const bird_container = document.getElementById("bird_container");

const dog_button = document.getElementById("dog_button");
const cat_button = document.getElementById("cat_button");
const fish_button = document.getElementById("fish_button");
const bird_button = document.getElementById("bird_button");




console.log(dog_container);


cat_button.addEventListener('click', getRandomCat);
dog_button.addEventListener('click', getRandomDog);
//fish_button.addEventListener('click', getRandomFish);
bird_button.addEventListener('click', getRandomBird); 

function getRandomCat () {
    fetch ('https://aws.random.cat/meow')
    .then (res => res.json())
    .then (data=> {
        cat_container.innerHTML= `<img src="${data.file}" width=400px />`
    })
}

function getRandomDog () {
    fetch ('https://random.dog/woof.json')
    .then (res => res.json())
    .then (data=> {
        if (data.url.includes('.mp4')){
            getRandomDog()
        } else {
            dog_container.innerHTML= `<img src="${data.url}"/>`
        }
       
    })
}

function getRandomBird () {
    fetch ('https://random-d.uk/api')
    .then ( res => res.json())
    .then (data => {
        bird_container.innerHTML = `<img src="${data.url}"/>`
    })
}