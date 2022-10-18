
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

const handleResponse = (err, data) => {
  if (err) {
    console.log(err)
  } else {
  console.log(data)
  }

}
// nester les requetes dans un callback
getRequest('Json_files/test1.json', (err, data) => {
  console.log(data)
  getRequest('Json_files/test2.json', (err, data) => {
    console.log(data)
  });
});


// Promise
const getSomething = () => {
  return new Promise((resolve, reject) => {
    // resolve('some data');
    reject('some error;');
  });
};

getSomething().then((data) =>{
  console.log(data)
}, (err) => {
  console.log(err);
});

// promise avec .catch
getSomething().then((data) => {
  console.log(data)
}).catch(err => {
  console.log(err);
});


// Même requete mais avec une promise
const getRequest2 = (resource) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200){
        const data =JSON.parse(request.responseText)
        resolve(data);
      } else if(request.readyState === 4){
        reject('erreur dans la récupération');
      }
    });
    request.open('GET', resource);
    request.send();
  });
}

getRequest2('Json_files/test2.json').then(data => {
  console.log('promise ok', data)
}).catch(err => {
  console.log ('mauvais retour', err)
})
