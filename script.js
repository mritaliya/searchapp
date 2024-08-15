let acces_key="nUcn6ZOKABAcWY6Op8Hfl6gAXOioHVf4EAnQchmMW-I";
let searchInput=document.querySelector("#searchInput");
let searchbtn=document.querySelector("#search-btn");
let showData=document.querySelector(".showData");
let morebtn=document.querySelector("#more-btn");
let loadmore=document.querySelector(".loadmore");
let page=1;



const getData=async(searchValue,pageno)=>{
let fetching=await fetch(`https://api.unsplash.com/search/photos?query=${searchValue} &per_pag=28&p=${pageno} age&client_id=${acces_key}`)
let jsonData=await fetching.json();
console.log(jsonData.results);
if (pageno===1) {
    
showData.innerHTML=``
}

jsonData.results.forEach((data) => {
    console.log(data);
let div=document.createElement("div");
div.classList.add("card");
showData.appendChild(div);

div.innerHTML=`
<img src="${data.urls.small}" alt="">
<a href=${data.links.html} target="_blank" >${data.alt_description
    }</a>
`
loadmore.style.display="block";
});
}



searchbtn.addEventListener("click",()=>{
    let searchValue=searchInput.value;
    getData(searchValue,1);
})

morebtn.addEventListener("click",()=>{
    let searchValue=searchInput.value;
    getData(searchValue,page++);
})