
const inputField = document.getElementById("input");
let inputFieldValue;
inputField.addEventListener("keyup",()=>{
    inputFieldValue = inputField.value;
})

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", ()=>{
    const searching = document.querySelector(".searching");
    searching.innerHTML = `Searching for ${inputFieldValue}...`;
    
    const searchItem = inputFieldValue;
    // console.log(searchItem)
    const xhr = new XMLHttpRequest();
    
    xhr.open("GET",`https://restcountries.com/v3.1/name/${searchItem}`);
    xhr.send();
    
    xhr.onload=function(){
        // console.log(this.responseText);
        if(this.response){
            inputField.value='';
            const data = JSON.parse(this.responseText);
            console.log(data[0]);
            document.querySelector(".countryDetails").innerHTML = `
            <h3 class="countryName">${data[0].name.common}</h3>
            <p class="population">Population: ${data[0].population}</p>
            <img class="image" src=${data[0].flags.png} alt="">
            `
            }
    }
})


