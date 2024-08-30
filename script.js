function sendRequest(method,url,data){

    const promise = new Promise((res,rej)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType="json"
        xhr.send(data);

        xhr.onload = function(){
            //application error Handling
        if(this.status >=400){
            rej(`There was an Error. The Error is ${this.status}`)
            }
        else{
            res(this.response);
            }
        }

        xhr.onerror = function(){
            rej("There was an Error");
        }

    }) ;

   return promise
    
}

function getData(){

    sendRequest("GET","https://jsonplaceholder.typicode.com/todos/2")
    .then(data => console.log(data))
    .catch(err=>console.log(err))
    
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