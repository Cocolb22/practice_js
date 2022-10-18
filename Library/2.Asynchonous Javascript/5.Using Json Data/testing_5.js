const getRequest = (callback) => {
  const request = new XMLHttpRequest();

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
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

getRequest(handleResponse);

const request2 = new XMLHttpRequest();
request2.open('GET', 'test.json');
request2.send();

request2.addEventListener('readystatechange',() =>{
  if(request2.readyState === 4){
    console.log(request2.responseText)
  }
});
