function sendRequest(method,url,data){

    const promise = new Promise((res,rej)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType="json"
        xhr.send(data);

        xhr.onload = function(){
            const responseData = this.response;
            res(responseData);
        }
    }) ;

   return promise
    
}

function getData(){

    sendRequest("GET","https://jsonplaceholder.typicode.com/todos/1")
    .then(data => console.log(data));
    
}

function sendData(){

    const data = {
        title: 'foo',
        body: 'bar',
        userId: 1,
      }
    sendRequest("POST","https://jsonplaceholder.typicode.com/posts",JSON.stringify(data))
    .then(responseData=>console.log(responseData));



}

const getBtn = document.querySelector("#get");
const sendBtn = document.querySelector("#send");

getBtn.addEventListener("click",getData);
sendBtn.addEventListener("click",sendData);