// faire une requete
const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();

request.addEventListener('readystatechange',() =>{
  if(request.readyState === 4){
    console.log(request.responseText)
  }
});
