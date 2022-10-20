// créer un fetch

fetch("Json_files/test2.json").then((response)=>{
  console.log("réponse positive", response);
  return response.json();
}).then(data =>{
  console.log(data);
}).catch((err) =>{
  console.log("réponse négative", err);


});

// async et await

const getResponse = async ()=>{

  const response = await fetch("Json_files/test3.json")
  const data = await response.json();
  return data
};

getResponse().then(data => { console.log('bonne réponse', data)});
