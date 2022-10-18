
//ajouter le resource en argument
const getRequest = (resource, callback) => {
  const request = new XMLHttpRequest();

// ajouter le resource dans la requete
  request.open('GET', resource);
  request.send();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200){
      const data =JSON.parse(request.responseText)
      callback(undefined, data)
    } else if(request.readyState === 4){
      callback('la data ne peut pas être lue', undefined)
    }
  });

}
// nester les requetes
const handleResponse = (err, data) => {
  if (err) {
    console.log(err)
  } else {
  console.log(data)
  }

}

getRequest('Json_files/test1.json', (err, data) => {
  console.log(data)
  getRequest('Json_files/test2.json', (err, data) => {
    console.log(data)
  });
});
