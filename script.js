const accessKey="M7CS4w1u5ZSdPU1PUPWM4XE4lTT2QQcdEXJuwxq-Igc";


const form1 =document.querySelector("form");
const inputE1 =document.getElementById("search");
const searchR= document.querySelector(".search-results");
const showMore =document.getElementById("btn");


let inputData ="";
let page= 1;

async function searchImages(){
    inputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

   const response =await fetch(url);
   const data = await response.json();


   const results = data.results;

   if(page === 1){
    searchR.innerHTML = "";
   }
   results.map((result)=>{
    const imagecontainer = document.createElement("div");
    imagecontainer.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target ="_blank";
    imageLink.textContent = result.alt_description;


    imagecontainer.appendChild(image);
    imagecontainer.appendChild(imageLink);
    searchR.appendChild(imagecontainer);
   });
page++;

if(page >1){
    showMore.style.display ="block"
}
}

form1.addEventListener("submit",(event)=>{
event.preventDefault();
page = 1;
searchImages();
});

showMore.addEventListener("click",()=>{
    searchImages();
});