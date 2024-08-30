function getData(){
// console.log("get Data"); 
const xhr = new XMLHttpRequest();
xhr.onload = function(){
    // const resText = this.responseText;
    // const data = JSON.parse(resText)
    // console.log(data);

    const data = this.response;
    console.log(data);
}
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
xhr.responseType="json"
xhr.send();
}

function sendData(){
console.log("send Data");

}

const getBtn = document.querySelector("#get");
const sendBtn = document.querySelector("#send");

getBtn.addEventListener("click",getData);
sendBtn.addEventListener("click",sendData);