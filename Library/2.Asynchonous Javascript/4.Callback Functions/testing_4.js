const getRequest = (callback) => {
  const request = new XMLHttpRequest();

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.send();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200){
      callback(undefined, request.responseText)
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

getRequest(handleResponse);
