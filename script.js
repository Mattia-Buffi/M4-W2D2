// API key:  M7HCP0XjhyguqNF5EyfnMSaXfGj6srj3UfkSAeocTGxy6VSrIxyG6Z5O
// https://api.pexels.com/v1/search?query=INSERISCIQUI

fetch('https://api.pexels.com/v1/search?query=random',{method:'GET',headers:{authorization:'M7HCP0XjhyguqNF5EyfnMSaXfGj6srj3UfkSAeocTGxy6VSrIxyG6Z5O'}})
    .then((Response)=>Response.json())
    .then((json)=>{
        let mainNode=document.getElementsByClassName('colonna');
        let cardArray=(json.photos).map(foto=>{
            let elemtTemp=document.createElement('div');
            elemtTemp.classList.add('card','text-white','mt-3');
            elemtTemp.innerHTML=`<img src=${foto.src.large} class="card-img" alt=${foto.alt}><div class="card-img-overlay h-100 w-100 picInfo"><h5 class="card-title">PH: ${foto.photographer}</h5></div>`;
            return elemtTemp;})
        console.log(cardArray);
        cardArray.forEach((element,index) => {
            if(index<3) mainNode[0].appendChild(element);
            else if(index<7) mainNode[1].appendChild(element);
            else if(index<11) mainNode[2].appendChild(element);
            else mainNode[3].appendChild(element);
        });
    })
    .catch((err)=>console.log('Error find: ',err));
