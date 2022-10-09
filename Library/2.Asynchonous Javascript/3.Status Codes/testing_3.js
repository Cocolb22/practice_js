// faire une requete
const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();

// ajouter un controle du statut de la requete
request.addEventListener('readystatechange',() =>{
  if(request.readyState === 4 && request.status === 200){
    console.log(request.responseText)
  } else if(request.readyState === 4){
    console.log(`ERROR !!, ${request.status}`)
  }
});
